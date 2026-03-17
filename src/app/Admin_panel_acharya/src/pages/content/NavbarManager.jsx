import React, { useState, useEffect } from "react";
import { 
  FiMenu, 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiChevronDown, 
  FiChevronUp,
  FiSave,
  FiX,
  FiArrowUp,
  FiArrowDown,
  FiEye
} from "react-icons/fi";
import { toast } from "react-toastify";

const NavbarManager = () => {
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    label: '',
    href: '',
    type: 'link',
    order: 0,
    children: []
  });
  const [viewItem, setViewItem] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const API_URL = 'http://localhost:5000/api/navbar';

  const fetchNavbarItems = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setNavItems(data);
    } catch (error) {
      toast.error("Failed to fetch navbar items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNavbarItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    const url = isEditing ? `${API_URL}/${currentItem._id}` : API_URL;

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentItem)
      });

      if (response.ok) {
        toast.success(isEditing ? "Item updated!" : "Item added!");
        resetForm();
        fetchNavbarItems();
      }
    } catch (error) {
      toast.error("Error saving item");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      toast.success("Item deleted");
      fetchNavbarItems();
    } catch (error) {
      toast.error("Error deleting item");
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setCurrentItem({
      label: '',
      href: '',
      type: 'link',
      order: 0,
      children: []
    });
    setIsEditing(false);
  };

  const handleChildChange = (index, field, value) => {
    const updatedChildren = [...currentItem.children];
    updatedChildren[index] = { ...updatedChildren[index], [field]: value };
    setCurrentItem({ ...currentItem, children: updatedChildren });
  };

  const addChild = () => {
    setCurrentItem({
      ...currentItem,
      children: [...currentItem.children, { label: '', href: '' }]
    });
  };

  const removeChild = (index) => {
    const updatedChildren = currentItem.children.filter((_, i) => i !== index);
    setCurrentItem({ ...currentItem, children: updatedChildren });
  };

  const openViewModal = (item) => {
    setViewItem(item);
    setIsViewModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-yellow-400 rounded-xl shadow-md text-white">
          <FiMenu size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Navbar Manager</h1>
          <p className="text-sm text-gray-500">Add, edit and organize website navigation</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
          {isEditing ? <FiEdit2 className="text-yellow-500" /> : <FiPlus className="text-yellow-500" />}
          {isEditing ? 'Edit Menu Item' : 'Add New Menu Item'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Display Label</label>
              <input 
                type="text"
                required
                value={currentItem.label}
                onChange={(e) => setCurrentItem({...currentItem, label: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                placeholder="e.g. Services"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Link URL (href)</label>
              <input 
                type="text"
                required
                value={currentItem.href}
                onChange={(e) => setCurrentItem({...currentItem, href: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                placeholder="e.g. /services"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Menu Type</label>
              <select 
                value={currentItem.type}
                onChange={(e) => setCurrentItem({...currentItem, type: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              >
                <option value="link">Single Link</option>
                <option value="dropdown">Dropdown Menu</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Order</label>
              <input 
                type="number"
                value={currentItem.order}
                onChange={(e) => setCurrentItem({...currentItem, order: parseInt(e.target.value)})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
          </div>

          {/* Sub-menu (Children) Section */}
          {currentItem.type === 'dropdown' && (
            <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Sub-Menu Items</h3>
                <button 
                  type="button" 
                  onClick={addChild}
                  className="flex items-center gap-1 text-xs font-bold text-yellow-600 hover:text-yellow-700 bg-white px-3 py-1.5 rounded-lg border border-yellow-200 shadow-sm transition-all"
                >
                  <FiPlus /> Add Child
                </button>
              </div>
              
              <div className="space-y-3">
                {currentItem.children.map((child, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <input 
                      type="text"
                      required
                      placeholder="Label"
                      value={child.label}
                      onChange={(e) => handleChildChange(idx, 'label', e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white outline-none"
                    />
                    <input 
                      type="text"
                      required
                      placeholder="URL"
                      value={child.href}
                      onChange={(e) => handleChildChange(idx, 'href', e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white outline-none"
                    />
                    <button 
                      type="button"
                      onClick={() => removeChild(idx)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                ))}
                {currentItem.children.length === 0 && (
                  <p className="text-center text-xs text-gray-400 py-4 italic">No sub-menu items added yet</p>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
            <button 
              type="button" 
              onClick={resetForm}
              className="px-6 py-2 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-all flex items-center gap-2"
            >
              <FiX /> Cancel
            </button>
            <button 
              type="submit"
              className="px-8 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <FiSave /> {isEditing ? 'Update Navigation' : 'Save Navigation'}
            </button>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Current Navigation Map</h2>
          <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 uppercase tracking-tighter">
            Total {navItems.length} Items
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#faf9f0]">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider w-16 text-center">Order</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Item Label</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Path / Link</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Children</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {navItems.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-center font-bold text-yellow-600">{item.order}</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-800">{item.label}</span>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{item.href}</code>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${
                      item.type === 'dropdown' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-500">
                      {item.children?.length || 0} items
                    </span>
                  </td>
                   <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => openViewModal(item)}
                        className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all"
                        title="View Details"
                      >
                        <FiEye size={18} />
                      </button>
                      <button 
                        onClick={() => handleEdit(item)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <FiEdit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item._id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {navItems.length === 0 && !loading && (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-400 italic">
                    No navigation items found. Add your first item above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Details Modal */}
      {isViewModalOpen && viewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <FiEye size={20} />
                <h3 className="font-bold text-lg">Menu Item Details</h3>
              </div>
              <button 
                onClick={() => setIsViewModalOpen(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition-all"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Label</p>
                  <p className="font-bold text-gray-800 text-lg">{viewItem.label}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Link Path</p>
                  <code className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-sm font-semibold">{viewItem.href}</code>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Type</p>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${
                    viewItem.type === 'dropdown' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {viewItem.type}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Display Order</p>
                  <p className="font-bold text-gray-800">{viewItem.order}</p>
                </div>
              </div>

              {/* Children List */}
              {viewItem.type === 'dropdown' && (
                <div>
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FiMenu className="text-yellow-500" />
                    Sub-Menu Items ({viewItem.children?.length || 0})
                  </h4>
                  <div className="max-h-60 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                    {viewItem.children?.map((child, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xs">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-800">{child.label}</p>
                            <p className="text-xs text-gray-400">{child.href}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {(!viewItem.children || viewItem.children.length === 0) && (
                      <p className="text-center text-sm text-gray-400 py-8 italic">No child items found.</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-100">
              <button 
                onClick={() => {
                  setIsViewModalOpen(false);
                  handleEdit(viewItem);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg font-bold text-sm shadow-md hover:bg-blue-600 transition-all flex items-center gap-2"
              >
                <FiEdit2 size={14} /> Edit This Menu
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

export default NavbarManager;
