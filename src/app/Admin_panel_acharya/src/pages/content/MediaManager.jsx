import React, { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    Eye, Edit, Trash2, X, Plus, Save, Database, 
    Video, Newspaper, Calendar, Award, Share2, Image as ImageIcon,
    ExternalLink, MapPin, Loader2
} from 'lucide-react';
import {
    useGetAllMediaQuery,
    useCreateMediaMutation,
    useUpdateMediaMutation,
    useDeleteMediaMutation,
    useSeedMediaMutation
} from '../../../../../services/mediaApi';
import { BACKEND_URL } from '../../../../../config/apiConfig';

const emptyForm = {
    type: 'news',
    title: '',
    image: '',
    date: '',
    // News
    excerpt: '',
    publication: '',
    link: '',
    // Video
    duration: '',
    views: '',
    videoId: '',
    // Event
    location: '',
    attendees: '',
    description: '',
    // Award
    organization: '',
    year: '',
    // Social
    platform: 'instagram',
    engagement: '',
};

export default function MediaManager() {
    const { data: records = [], isLoading, refetch } = useGetAllMediaQuery();
    const [createMedia, { isLoading: isCreating }] = useCreateMediaMutation();
    const [updateMedia, { isLoading: isUpdating }] = useUpdateMediaMutation();
    const [deleteMedia] = useDeleteMediaMutation();
    const [seedMedia, { isLoading: isSeeding }] = useSeedMediaMutation();

    const [formData, setFormData] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [viewRecord, setViewRecord] = useState(null);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const resetForm = () => {
        setFormData(emptyForm);
        setEditingId(null);
        setImageFile(null);
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleEdit = (rec) => {
        setEditingId(rec._id);
        setFormData({
            type: rec.type || 'news',
            title: rec.title || '',
            date: rec.date || '',
            excerpt: rec.excerpt || '',
            publication: rec.publication || '',
            link: rec.link || '',
            duration: rec.duration || '',
            views: rec.views || '',
            videoId: rec.videoId || '',
            location: rec.location || '',
            attendees: rec.attendees || '',
            description: rec.description || '',
            organization: rec.organization || '',
            year: rec.year || '',
            platform: rec.platform || 'instagram',
            engagement: rec.engagement || '',
        });
        setImageFile(null);
        setImagePreview(rec.image ? (rec.image.startsWith('http') ? rec.image : `${BACKEND_URL}${rec.image}`) : null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const submitData = new FormData();
            Object.entries(formData).forEach(([k, v]) => {
                if (v !== undefined && v !== null) submitData.append(k, v);
            });
            if (imageFile) submitData.append('image', imageFile);

            if (editingId) {
                await updateMedia({ id: editingId, formData: submitData }).unwrap();
                toast.success('Media updated successfully!');
            } else {
                await createMedia(submitData).unwrap();
                toast.success('Media created successfully!');
            }
            resetForm();
        } catch (err) {
            toast.error(err?.data?.message || 'Error occurred');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this media asset?')) return;
        try {
            await deleteMedia(id).unwrap();
            toast.success('Deleted!');
        } catch (err) {
            toast.error('Delete failed');
        }
    };

    const handleSeed = async () => {
        if (!window.confirm('Seed will replace all media data. Continue?')) return;
        try {
            await seedMedia().unwrap();
            toast.success('Seeded!');
        } catch (err) {
            toast.error('Seed failed');
        }
    };

    const isSaving = isCreating || isUpdating;
    const inputCls = "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-white";
    const labelCls = "block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide";

    const getImg = (url) => !url ? '' : url.startsWith('http') ? url : `${BACKEND_URL}${url}`;

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <ToastContainer position="top-right" autoClose={2500} />
            
            {/* Page Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Media Hub Manager</h1>
                    <p className="text-sm text-gray-500">Manage news, videos, events and social updates</p>
                </div>
                <button onClick={handleSeed} disabled={isSeeding} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
                    <Database className="w-4 h-4" /> {isSeeding ? 'Seeding...' : 'Seed Data'}
                </button>
            </div>

            {/* Add / Edit Form Part */}
            <div className="bg-white rounded-xl shadow-sm border p-5 mb-6">
                <h2 className="text-base font-bold text-gray-700 mb-4 border-b pb-2">{editingId ? 'Edit Media Asset' : 'Add New Media Asset'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className={labelCls}>Media Category *</label>
                            <select name="type" value={formData.type} onChange={handleInputChange} className={inputCls} required>
                                <option value="news">Press Release</option>
                                <option value="video">Spiritual Video</option>
                                <option value="event">Sacred Event</option>
                                <option value="award">Glory Archive</option>
                                <option value="social">Social Ripple</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className={labelCls}>Headline / Title *</label>
                            <input name="title" value={formData.title} onChange={handleInputChange} className={inputCls} required placeholder="Asset title..." />
                        </div>
                        <div>
                            <label className={labelCls}>Timeline / Date</label>
                            <input name="date" value={formData.date} onChange={handleInputChange} className={inputCls} placeholder="e.g. 15 Dec 2024" />
                        </div>

                        {/* Conditional Rendering Based on type */}
                        {formData.type === 'news' && (
                            <>
                                <div><label className={labelCls}>Publication</label><input name="publication" value={formData.publication} onChange={handleInputChange} className={inputCls} placeholder="e.g. Divine Times" /></div>
                                <div><label className={labelCls}>Link</label><input name="link" value={formData.link} onChange={handleInputChange} className={inputCls} placeholder="https://..." /></div>
                                <div className="md:col-span-3"><label className={labelCls}>Excerpt</label><textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} className={inputCls} rows={2} placeholder="Article summary..." /></div>
                            </>
                        )}

                        {formData.type === 'video' && (
                            <>
                                <div><label className={labelCls}>YouTube ID</label><input name="videoId" value={formData.videoId} onChange={handleInputChange} className={inputCls} placeholder="e.g. dQw4w9WgXcQ" /></div>
                                <div><label className={labelCls}>Duration</label><input name="duration" value={formData.duration} onChange={handleInputChange} className={inputCls} placeholder="e.g. 10:30" /></div>
                                <div><label className={labelCls}>Total Views</label><input name="views" value={formData.views} onChange={handleInputChange} className={inputCls} placeholder="e.g. 25K" /></div>
                            </>
                        )}

                        {formData.type === 'event' && (
                            <>
                                <div><label className={labelCls}>Location</label><input name="location" value={formData.location} onChange={handleInputChange} className={inputCls} placeholder="e.g. New Delhi" /></div>
                                <div><label className={labelCls}>Attendees</label><input name="attendees" value={formData.attendees} onChange={handleInputChange} className={inputCls} placeholder="e.g. 500+" /></div>
                                <div className="md:col-span-3"><label className={labelCls}>Event Brief</label><textarea name="description" value={formData.description} onChange={handleInputChange} className={inputCls} rows={2} placeholder="Brief about the event..." /></div>
                            </>
                        )}

                        {formData.type === 'award' && (
                            <>
                                <div className="md:col-span-2"><label className={labelCls}>Organization</label><input name="organization" value={formData.organization} onChange={handleInputChange} className={inputCls} placeholder="Award given by..." /></div>
                                <div><label className={labelCls}>Honor Year</label><input name="year" value={formData.year} onChange={handleInputChange} className={inputCls} placeholder="e.g. 2024" /></div>
                            </>
                        )}

                        {formData.type === 'social' && (
                            <>
                                <div>
                                    <label className={labelCls}>Platform</label>
                                    <select name="platform" value={formData.platform} onChange={handleInputChange} className={inputCls}>
                                        <option value="instagram">Instagram</option>
                                        <option value="youtube">YouTube</option>
                                        <option value="facebook">Facebook</option>
                                        <option value="twitter">X (Twitter)</option>
                                    </select>
                                </div>
                                <div><label className={labelCls}>Reach / Engagement</label><input name="engagement" value={formData.engagement} onChange={handleInputChange} className={inputCls} placeholder="e.g. 15K Likes" /></div>
                            </>
                        )}

                        <div className="md:col-span-3">
                            <label className={labelCls}>Image Asset {!editingId && '*'}</label>
                            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-red-50 file:text-red-600 hover:file:bg-red-100" />
                            {imagePreview && <img src={imagePreview} alt="preview" className="mt-2 h-20 w-28 object-cover rounded-lg border" />}
                        </div>
                    </div>
                    
                    <div className="flex gap-3">
                        <button type="submit" disabled={isSaving} className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-50">
                            <Plus className="w-4 h-4" /> {isSaving ? 'Processing...' : (editingId ? 'Update Asset' : 'Add Asset')}
                        </button>
                        {editingId && <button type="button" onClick={resetForm} className="flex items-center gap-2 bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300"><X className="w-4 h-4" /> Cancel</button>}
                    </div>
                </form>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-4 border-b flex items-center justify-between bg-gray-50 pr-6">
                    <h2 className="text-base font-bold text-gray-700">All Media Assets ({records.length})</h2>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Hub Records
                    </div>
                </div>
                {isLoading ? <div className="p-8 text-center text-gray-400">Loading library...</div> : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    {['#', 'Image', 'Cluster', 'Headline & Info', 'Timeline', 'Actions'].map(h => (
                                        <th key={h} className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wide">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 font-medium">
                                {records.map((rec, i) => (
                                    <tr key={rec._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                                        <td className="px-4 py-3">
                                            {rec.image && <img src={getImg(rec.image)} alt="" className="w-12 h-8 object-cover rounded-lg border shadow-sm" onError={e => e.target.style.display = 'none'} />}
                                        </td>
                                        <td className="px-4 py-3 uppercase text-[10px] tracking-widest text-gray-500">{rec.type}</td>
                                        <td className="px-4 py-3 max-w-sm">
                                            <div className="font-bold text-gray-800 line-clamp-1">{rec.title}</div>
                                            <div className="text-[10px] text-gray-400 truncate mt-0.5">{rec.publication || rec.excerpt || 'Acharya Hub'}</div>
                                        </td>
                                        <td className="px-4 py-3 text-gray-500 text-xs">{rec.date || 'LATEST'}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => setViewRecord(rec)} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100" title="Inspect"><Eye className="w-4 h-4" /></button>
                                                <button onClick={() => handleEdit(rec)} className="p-1.5 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100" title="Modify"><Edit className="w-4 h-4" /></button>
                                                <button onClick={() => handleDelete(rec._id)} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100" title="Delete"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {records.length === 0 && <tr><td colSpan={6} className="px-4 py-12 text-center text-gray-400">Library is empty. Add a record or Seed data.</td></tr>}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* View Modal */}
            {viewRecord && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setViewRecord(null)}>
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="relative">
                            {viewRecord.image && <img src={getImg(viewRecord.image)} alt="" className="w-full h-52 object-cover rounded-t-2xl" />}
                            <button onClick={() => setViewRecord(null)} className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 shadow-lg"><X className="w-5 h-5" /></button>
                            <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                                {viewRecord.type} Hub
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">{viewRecord.title}</h3>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2 border-b pb-4 border-gray-50">
                                <Calendar className="w-3 h-3 text-red-500" /> {viewRecord.date || 'Live Asset'}
                            </p>
                            
                            <div className="space-y-4">
                                <p className="text-gray-600 text-sm leading-relaxed font-medium italic bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    "{viewRecord.excerpt || viewRecord.description || 'Our dedicated spiritual archive for media and public engagement.'}"
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4">
                                     {viewRecord.publication && <div className="p-3 bg-white border border-gray-100 rounded-xl"><p className="text-[10px] text-gray-400 uppercase font-black mb-0.5">Publication</p><p className="text-xs font-bold text-gray-800 flex items-center gap-1.5"><Newspaper className="w-3 h-3 text-blue-500" /> {viewRecord.publication}</p></div>}
                                     {viewRecord.location && <div className="p-3 bg-white border border-gray-100 rounded-xl"><p className="text-[10px] text-gray-400 uppercase font-black mb-0.5">Location</p><p className="text-xs font-bold text-gray-800 flex items-center gap-1.5"><MapPin className="w-3 h-3 text-rose-500" /> {viewRecord.location}</p></div>}
                                     {viewRecord.views && <div className="p-3 bg-white border border-gray-100 rounded-xl"><p className="text-[10px] text-gray-400 uppercase font-black mb-0.5">Engagement</p><p className="text-xs font-bold text-gray-800 flex items-center gap-1.5"><Video className="w-3 h-3 text-indigo-500" /> {viewRecord.views}</p></div>}
                                     {viewRecord.year && <div className="p-3 bg-white border border-gray-100 rounded-xl"><p className="text-[10px] text-gray-400 uppercase font-black mb-0.5">Honor Year</p><p className="text-xs font-bold text-gray-800 flex items-center gap-1.5"><Award className="w-3 h-3 text-amber-500" /> {viewRecord.year}</p></div>}
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-4 border-t border-gray-50 flex justify-end gap-3">
                                 <button onClick={() => { setViewRecord(null); handleEdit(viewRecord); }} className="px-5 py-2 hover:bg-gray-100 rounded-lg text-xs font-bold uppercase text-gray-500 transition-colors">Edit Asset</button>
                                 <button onClick={() => setViewRecord(null)} className="px-8 py-2 bg-red-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-red-700 shadow-lg shadow-red-100 transition-all">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
