import React, { useState, useEffect } from "react";
import { FiImage, FiPlus, FiEdit2, FiTrash2, FiSave, FiX, FiCheckSquare, FiSquare, FiEye } from "react-icons/fi";
import { toast } from "react-toastify";
import { 
  useGetAllBannersQuery, 
  useCreateBannerMutation, 
  useUpdateBannerMutation, 
  useDeleteBannerMutation 
} from "../../../../../services/heroBannerApi";
import { useGetNavbarItemsQuery } from "../../../../../services/navbarApi";

const CarouselManager = () => {
  const { data: banners = [], isLoading: bannersLoading } = useGetAllBannersQuery();
  const { data: navItemsData = [], isLoading: navLoading, error: navError } = useGetNavbarItemsQuery();
  
  useEffect(() => {
    if (navError) {
      toast.error("Failed to load pages! Please check server/database.");
    }
  }, [navError]);
  
  const [createBanner] = useCreateBannerMutation();
  const [updateBanner] = useUpdateBannerMutation();
  const [deleteBanner] = useDeleteBannerMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [currentBanner, setCurrentBanner] = useState({
    badge: '',
    titleHighlight1: '',
    titleHighlight2: '',
    titleHighlight3: '',
    titleEnd: '',
    subtitle: '',
    linkText: '',
    linkUrl: '',
    pagePath: '/',
    isActive: true
  });
  const [imageFile, setImageFile] = useState(null);
  const [selectedParentObj, setSelectedParentObj] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewBanner, setViewBanner] = useState(null);
  const [fileKey, setFileKey] = useState(Date.now());



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(currentBanner).forEach(key => {
      formData.append(key, currentBanner[key]);
    });

    if (imageFile) {
      formData.append('image', imageFile);
    } else if (!isEditing) {
      toast.error("Image is required for a new banner");
      return;
    }

    try {
      if (isEditing) {
        await updateBanner({ id: currentBanner._id, formData }).unwrap();
        toast.success("Banner updated!");
      } else {
        await createBanner(formData).unwrap();
        toast.success("Banner added!");
      }
      resetForm();
    } catch (error) {
      toast.error("Error saving banner");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) return;
    try {
      await deleteBanner(id).unwrap();
      toast.success("Banner deleted");
    } catch (error) {
      toast.error("Error deleting banner");
    }
  };

  const handleEdit = (banner) => {
    setCurrentBanner({ ...banner, pagePath: banner.pagePath || '/' });
    setImageFile(null);
    setIsEditing(true);

    // Find parent object if it's a child path
    const parent = navItemsData.find(p =>
      p.href === banner.pagePath || (p.children && p.children.some(c => c.href === banner.pagePath))
    );
    setSelectedParentObj(parent || null);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setCurrentBanner({
      badge: '',
      titleHighlight1: '',
      titleHighlight2: '',
      titleHighlight3: '',
      titleEnd: '',
      subtitle: '',
      linkText: '',
      linkUrl: '',
      pagePath: '/',
      isActive: true
    });
    setImageFile(null);
    setSelectedParentObj(null);
    setIsEditing(false);
    setFileKey(Date.now());
  };

  const openViewModal = (banner) => {
    setViewBanner(banner);
    setIsViewModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-yellow-400 rounded-xl shadow-md text-white">
          <FiImage size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Carousel / Hero Banner Manager</h1>
          <p className="text-sm text-gray-500">Manage dynamic hero banners shown on the homepage</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
          {isEditing ? <FiEdit2 className="text-yellow-500" /> : <FiPlus className="text-yellow-500" />}
          {isEditing ? 'Edit Hero Banner' : 'Add New Hero Banner'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 border border-gray-100 p-4 rounded-xl mb-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-800">Assign to Main Page</label>
              <select
                value={selectedParentObj ? selectedParentObj._id : (currentBanner.pagePath === '/' ? 'home' : '')}
                onChange={(e) => {
                  if (e.target.value === 'home') {
                    setSelectedParentObj(null);
                    setCurrentBanner({ ...currentBanner, pagePath: '/' });
                  } else {
                    const p = navItemsData.find(item => item._id === e.target.value);
                    setSelectedParentObj(p);
                    setCurrentBanner({ ...currentBanner, pagePath: p.href || '/' });
                  }
                }}
                className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-white"
              >
                <option value="home">Home Page ( / )</option>
                {navLoading ? (
                  <option disabled>Loading pages...</option>
                ) : (
                  navItemsData.map(item => (
                    <option key={item._id} value={item._id}>{item.label}</option>
                  ))
                )}
              </select>
            </div>

            {selectedParentObj && selectedParentObj.children && selectedParentObj.children.length > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800">Assign to Sub-Page</label>
                <select
                  value={currentBanner.pagePath}
                  onChange={(e) => setCurrentBanner({ ...currentBanner, pagePath: e.target.value })}
                  className="w-full px-4 py-2 border border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-white"
                >
                  <option value={selectedParentObj.href}>-- Use Main Page Banner --</option>
                  {selectedParentObj.children.map((child, idx) => (
                    <option key={idx} value={child.href}>{child.label} ({child.href})</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Badge Text</label>
              <input
                type="text" required value={currentBanner.badge}
                onChange={(e) => setCurrentBanner({ ...currentBanner, badge: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Title Part 1 (Default: Experience)</label>
              <input
                type="text" required value={currentBanner.titleHighlight1}
                onChange={(e) => setCurrentBanner({ ...currentBanner, titleHighlight1: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Title Part 2 (Highlight 1)</label>
              <input
                type="text" required value={currentBanner.titleHighlight2}
                onChange={(e) => setCurrentBanner({ ...currentBanner, titleHighlight2: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Title Part 3 (Highlight 2)</label>
              <input
                type="text" required value={currentBanner.titleHighlight3}
                onChange={(e) => setCurrentBanner({ ...currentBanner, titleHighlight3: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Title Part 4 (End)</label>
              <input
                type="text" required value={currentBanner.titleEnd}
                onChange={(e) => setCurrentBanner({ ...currentBanner, titleEnd: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Button Text (Optional)</label>
              <input
                type="text" value={currentBanner.linkText || ''}
                onChange={(e) => setCurrentBanner({ ...currentBanner, linkText: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Button Link URL (Optional)</label>
              <input
                type="text" value={currentBanner.linkUrl || ''}
                onChange={(e) => setCurrentBanner({ ...currentBanner, linkUrl: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Subtitle</label>
            <textarea
              required value={currentBanner.subtitle}
              onChange={(e) => setCurrentBanner({ ...currentBanner, subtitle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              rows="2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Banner Image File {isEditing && "(Leave empty to keep existing)"}</label>
              <input
                key={fileKey}
                type="file" accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-2 flex items-center pt-8">
              <button
                type="button"
                onClick={() => setCurrentBanner({ ...currentBanner, isActive: !currentBanner.isActive })}
                className="flex items-center gap-2 text-gray-700 focus:outline-none"
              >
                {currentBanner.isActive ? <FiCheckSquare className="text-yellow-500" size={20} /> : <FiSquare className="text-gray-400" size={20} />}
                <span className="font-medium text-sm">Active (Show on Website)</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
            <button
              type="button" onClick={resetForm}
              className="px-6 py-2 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all flex items-center gap-2"
            >
              <FiX /> Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <FiSave /> {isEditing ? 'Update Banner' : 'Save Banner'}
            </button>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Current Banners</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#faf9f0]">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">S.No</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Image</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Badge</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Titles</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Button</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Page</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {banners.map((banner, index) => (
                <tr key={banner._id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4">
                    {banner.imageUrl && (
                      <img
                        src={`http://127.0.0.1:5000${banner.imageUrl}`}
                        alt="Banner"
                        className="w-16 h-10 object-cover rounded shadow-sm"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{banner.badge}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    <div className="text-xs">{banner.titleHighlight1} {banner.titleHighlight2}</div>
                    <div className="text-[10px] text-gray-500">{banner.titleHighlight3} {banner.titleEnd}</div>
                  </td>
                  <td className="px-6 py-4">
                    {banner.linkText && <div className="text-xs font-bold text-blue-600 mb-1">{banner.linkText}</div>}
                    {banner.linkUrl && <div className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded inline-block">{banner.linkUrl}</div>}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[10px] text-white bg-purple-500 rounded px-2 py-0.5 inline-block font-bold">{banner.pagePath || '/'}</div>
                  </td>
                  <td className="px-6 py-4">
                    {banner.isActive ? (
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">Active</span>
                    ) : (
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700">Inactive</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openViewModal(banner)} className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg">
                        <FiEye size={16} />
                      </button>
                      <button onClick={() => handleEdit(banner)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg">
                        <FiEdit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(banner._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {banners.length === 0 && !bannersLoading && (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-400 italic">No hero banners found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {isViewModalOpen && viewBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <FiEye size={20} />
                <h3 className="font-bold text-lg">Banner Details</h3>
              </div>
              <button onClick={() => setIsViewModalOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition-all">
                <FiX size={20} />
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {viewBanner.imageUrl && (
                <div className="mb-6 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <img src={`http://127.0.0.1:5000${viewBanner.imageUrl}`} alt="Banner" className="w-full h-48 object-cover object-center" />
                </div>
              )}

              <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Badge</p>
                  <p className="font-bold text-gray-800">{viewBanner.badge}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</p>
                  {viewBanner.isActive ? (
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">Active</span>
                  ) : (
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700">Inactive</span>
                  )}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Page Assignment</p>
                  <code className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-sm font-semibold">{viewBanner.pagePath || '/'}</code>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Button Details</p>
                  <p className="font-bold text-blue-600 text-sm">{viewBanner.linkText || 'No Text'}</p>
                  <code className="text-[10px] text-gray-500">{viewBanner.linkUrl || 'No Link'}</code>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Title Configuration</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-gray-500">Part 1 (Regular)</p>
                    <p className="font-semibold text-gray-800">{viewBanner.titleHighlight1}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500">Part 2 (Red Highlight)</p>
                    <p className="font-semibold text-red-500">{viewBanner.titleHighlight2}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500">Part 3 (Yellow Highlight)</p>
                    <p className="font-semibold text-yellow-600">{viewBanner.titleHighlight3}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500">Part 4 (Ending)</p>
                    <p className="font-semibold text-gray-800">{viewBanner.titleEnd}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Subtitle</p>
                <p className="text-sm text-gray-700 leading-relaxed">{viewBanner.subtitle}</p>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsViewModalOpen(false);
                  handleEdit(viewBanner);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg font-bold text-sm shadow-md hover:bg-blue-600 transition-all flex items-center gap-2"
              >
                <FiEdit2 size={14} /> Edit This Banner
              </button>
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-300 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselManager;
