import React, { useState, useEffect, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Download, Plus, Edit, Trash2, ChevronLeft, ChevronRight, X, Search, Filter } from 'lucide-react';
import manufacturerApi, { Manufacturer, CreateManufacturerDto } from '../services/manufacturerApi';

function ManufacturerPage() {
    // Data State
    const [data, setData] = useState<Manufacturer[]>([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortBy, setSortBy] = useState('');
    const limit = 10;

    // Search State
    const [searchText, setSearchText] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');


    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // Form State
    const initialForm: CreateManufacturerDto = {
        name: '',
        code: '',
        category: '',
        divisions: '',
        subDivisions: '',
        address: '',
        pincode: '',
        mobileNo: '',
        email: '',
        gstNumber: '',
        drugLicenseNo: '',
        dlExpiryDate: ''
    };
    const [formData, setFormData] = useState<CreateManufacturerDto>(initialForm);

    // Debounce Search Logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchText);
            setPage(1); // Reset to page 1 on search change
        }, 500); // 500ms delay

        return () => clearTimeout(timer);
    }, [searchText]);

    // Fetch Data
    const fetchData = async (p: number = page, search: string = debouncedSearch, sort: string = sortBy) => {
        try {
            setLoading(true);
            const response = await manufacturerApi.getAll(p, limit, search || undefined, sort);
            setData(response.data);
            setTotal(response.meta.total);
            setTotalPages(response.meta.totalPages);
            setPage(p);
        } catch (error) {
            console.error('Error fetching manufacturers:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(1, debouncedSearch, sortBy);
    }, [debouncedSearch, sortBy]);

    useEffect(() => {
        fetchData(page, debouncedSearch, sortBy);
    }, [page]);

    // Handlers
    const handleEdit = (item: Manufacturer) => {
        setFormData({
            name: item.name,
            code: item.code || '',
            category: item.category || '',
            divisions: item.divisions || '',
            subDivisions: item.subDivisions || '',
            address: item.address || '',
            pincode: item.pincode || '',
            mobileNo: item.mobileNo || '',
            email: item.email || '',
            gstNumber: item.gstNumber || '',
            drugLicenseNo: item.drugLicenseNo || '',
            dlExpiryDate: item.dlExpiryDate ? item.dlExpiryDate.split('T')[0] : '',
        });
        setEditingId(item.id);
        setShowModal(true);
    };

    const handleDelete = (id: string) => {
        setSelectedId(id);
        setDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!selectedId) return;
        try {
            await manufacturerApi.delete(selectedId);
            setDeleteModal(false);
            setSelectedId(null);
            fetchData(page, debouncedSearch, sortBy);
        } catch (error) {
            console.error('Error deleting manufacturer:', error);
            alert('Failed to delete manufacturer');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setSubmitting(true);
            if (editingId) {
                await manufacturerApi.update(editingId, formData);
            } else {
                await manufacturerApi.create(formData);
            }
            setShowModal(false);
            setFormData(initialForm);
            setEditingId(null);
            fetchData(page, debouncedSearch, sortBy);
        } catch (error: any) {
            console.error('Error saving manufacturer:', error);
            alert('Failed to save manufacturer');
        } finally {
            setSubmitting(false);
        }
    };

    const handleExport = async () => {
        try {
            await manufacturerApi.exportToExcel();
        } catch (error) {
            console.error('Export failed:', error);
            alert('Failed to export data');
        }
    };

    // Columns for the table
    const columns = [
        { key: 'code', label: 'CODE' },
        { key: 'category', label: 'CATEGORY' },
        { key: 'name', label: 'NAME' },
        { key: 'divisions', label: 'DIVISIONS' },
        { key: 'subDivisions', label: 'SUB DIVISIONS' },
        { key: 'address', label: 'ADDRESS' },
        { key: 'pincode', label: 'PINCODE' },
        { key: 'mobileNo', label: 'MOBILE NO' },
        { key: 'email', label: 'MAIL ID' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-2xl font-bold text-gray-900">Manufacturer Lists</h1>
                            <button
                                onClick={() => {
                                    setFormData(initialForm);
                                    setEditingId(null);
                                    setShowModal(true);
                                }}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Create Manufacturer
                            </button>
                        </div>

                        {/* Data Table */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        {/* Filter Popover */}
                                        <Popover className="relative">
                                            <Popover.Button className="p-2 border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200">
                                                <Filter className="w-5 h-5" />
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="p-4 space-y-4">
                                                        <div>
                                                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Sort By</h4>
                                                            {/* Placeholder for sort, assuming logic exists or will be added if needed, sticking to UI structure first */}
                                                            <div className="space-y-2">
                                                                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                                                    <input
                                                                        type="radio"
                                                                        name="sort"
                                                                        checked={sortBy === 'name_asc'}
                                                                        onChange={() => setSortBy('name_asc')}
                                                                        className="text-blue-600 focus:ring-blue-500"
                                                                    />
                                                                    Name (A-Z)
                                                                </label>
                                                                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                                                    <input
                                                                        type="radio"
                                                                        name="sort"
                                                                        checked={sortBy === 'name_desc'}
                                                                        onChange={() => setSortBy('name_desc')}
                                                                        className="text-blue-600 focus:ring-blue-500"
                                                                    />
                                                                    Name (Z-A)
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </Popover>

                                        {/* Search Bar */}
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <input
                                                type="text"
                                                value={searchText}
                                                onChange={(e) => setSearchText(e.target.value)}
                                                placeholder="Search manufacturers..."
                                                className="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleExport}
                                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Export"
                                    >
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                <table className="w-full whitespace-nowrap">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            {columns.map(col => (
                                                <th key={col.key} className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    {col.label}
                                                </th>
                                            ))}
                                            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {loading ? (
                                            <tr>
                                                <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-gray-500">
                                                    Loading...
                                                </td>
                                            </tr>
                                        ) : data.length === 0 ? (
                                            <tr>
                                                <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-gray-500">
                                                    No manufacturers found
                                                </td>
                                            </tr>
                                        ) : (
                                            data.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                                    {columns.map(col => (
                                                        <td key={col.key} className="px-4 py-3 text-sm text-gray-700">
                                                            {(item as any)[col.key] || '-'}
                                                        </td>
                                                    ))}
                                                    <td className="px-4 py-3 text-right">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <button
                                                                onClick={() => handleEdit(item)}
                                                                className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                                                                title="Edit"
                                                            >
                                                                <Edit className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(item.id)}
                                                                className="p-1 text-red-600 hover:bg-red-50 rounded"
                                                                title="Delete"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>


                            
                            {/* Pagination */}
                            {!loading && total > 0 && (
                                <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
                                    <div className="text-sm text-gray-500">
                                        Showing {((page - 1) * limit) + 1} to {Math.min(page * limit, total)} of {total} entries
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setPage(p => Math.max(1, p - 1))}
                                            disabled={page === 1}
                                            className="p-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <span className="text-sm font-medium text-gray-700">
                                            Page {page} of {totalPages}
                                        </span>
                                        <button
                                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                            disabled={page === totalPages}
                                            className="p-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Create/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-gray-900">
                                {editingId ? 'Edit Manufacturer' : 'Create Manufacturer'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Manufacturer Code</label>
                                    <input
                                        type="text"
                                        value={formData.code}
                                        onChange={e => setFormData({ ...formData, code: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="e.g. M001"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <input
                                        type="text"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                                    <input
                                        type="text"
                                        value={formData.pincode}
                                        onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No</label>
                                    <input
                                        type="text"
                                        value={formData.mobileNo}
                                        onChange={e => setFormData({ ...formData, mobileNo: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Divisions</label>
                                    <input
                                        type="text"
                                        value={formData.divisions}
                                        onChange={e => setFormData({ ...formData, divisions: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="e.g. Div A, Div B"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Sub Divisions</label>
                                    <input
                                        type="text"
                                        value={formData.subDivisions}
                                        onChange={e => setFormData({ ...formData, subDivisions: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">GST Number</label>
                                    <input
                                        type="text"
                                        value={formData.gstNumber}
                                        onChange={e => setFormData({ ...formData, gstNumber: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Drug License No</label>
                                    <input
                                        type="text"
                                        value={formData.drugLicenseNo}
                                        onChange={e => setFormData({ ...formData, drugLicenseNo: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <textarea
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-24"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                                >
                                    {submitting ? 'Saving...' : editingId ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3>
                        <p className="text-gray-600 mb-6">Are you sure you want to delete this manufacturer? This action cannot be undone.</p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setDeleteModal(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ManufacturerPage;
