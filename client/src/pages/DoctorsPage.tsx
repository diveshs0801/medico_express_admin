import { useState, useEffect, useCallback, Fragment } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Popover, Transition } from '@headlessui/react';
import { Download, Plus, Search, Pencil, Trash2, X, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { doctorApi, Doctor, CreateDoctorDto } from '../services/doctorApi';

function DoctorsPage() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const initialForm: CreateDoctorDto = {
        name: '',
        registrationNo: '',
        specialty: '',
        hospitalName: '',
        location: '',
        phone: '',
        email: '',
    };
    const [formData, setFormData] = useState<CreateDoctorDto>(initialForm);

    const fetchDoctors = useCallback(async (page: number, search: string, sort: string) => {
        try {
            setLoading(true);
            const response = await doctorApi.getAll(page, limit, search, sort);
            setDoctors(response.data);
            setTotalPages(response.meta.totalPages);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch doctors', error);
            setLoading(false);
        }
    }, [limit]);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPage(1);
            fetchDoctors(1, searchTerm, sortBy);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm, sortBy, fetchDoctors]);

    // Pagination change
    useEffect(() => {
        fetchDoctors(currentPage, searchTerm, sortBy);
    }, [currentPage, fetchDoctors]); // searchTerm and sortBy are handled by their effects/debounce

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingId) {
                await doctorApi.update(editingId, formData);
            } else {
                await doctorApi.create(formData);
            }
            setShowModal(false);
            setFormData(initialForm);
            setEditingId(null);
            fetchDoctors(currentPage, searchTerm, sortBy);
        } catch (error) {
            console.error('Error saving doctor:', error);
            alert('Failed to save doctor');
        }
    };

    const handleEdit = (doctor: Doctor) => {
        setFormData({
            name: doctor.name,
            registrationNo: doctor.registrationNo,
            specialty: doctor.specialty,
            hospitalName: doctor.hospitalName,
            location: doctor.location || '',
            phone: doctor.phone,
            email: doctor.email || '',
        });
        setEditingId(doctor.id);
        setShowModal(true);
    };

    const handleDelete = async () => {
        if (!deleteId) return;
        try {
            await doctorApi.delete(deleteId);
            setShowDeleteModal(false);
            setDeleteId(null);
            fetchDoctors(currentPage, searchTerm, sortBy);
        } catch (error) {
            console.error('Error deleting doctor:', error);
            alert('Failed to delete doctor');
        }
    };

    const handleExport = async () => {
        try {
            await doctorApi.exportToExcel();
        } catch (error) {
            console.error('Export failed:', error);
            alert('Failed to export data');
        }
    };

    const columns = [
        { key: 'name', label: 'DOCTOR NAME' },
        { key: 'registrationNo', label: 'REG NO' },
        { key: 'specialty', label: 'SPECIALIST' },
        { key: 'hospitalName', label: 'HOSPITAL NAME' },
        { key: 'location', label: 'LOCATION' },
        { key: 'phone', label: 'MOBILE NO' },
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
                            <h1 className="text-2xl font-bold text-gray-900">Doctors Lists</h1>
                            <button
                                onClick={() => {
                                    setFormData(initialForm);
                                    setEditingId(null);
                                    setShowModal(true);
                                }}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Create Doctor
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
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                placeholder="Search doctors..."
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
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            {columns.map(col => (
                                                <th key={col.key} className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                    {col.label}
                                                </th>
                                            ))}
                                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {loading ? (
                                            <tr>
                                                <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-sm text-gray-500">
                                                    Loading...
                                                </td>
                                            </tr>
                                        ) : doctors.length === 0 ? (
                                            <tr>
                                                <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-sm text-gray-500">
                                                    No doctors found
                                                </td>
                                            </tr>
                                        ) : (
                                            doctors.map((doctor) => (
                                                <tr key={doctor.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 text-sm text-gray-900">{doctor.name}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{doctor.registrationNo}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{doctor.specialty}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{doctor.hospitalName}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{doctor.location}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{doctor.phone}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{doctor.email}</td>
                                                    <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                                        <button
                                                            onClick={() => handleEdit(doctor)}
                                                            className="text-blue-600 hover:text-blue-900 mr-3"
                                                        >
                                                            <Pencil className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setDeleteId(doctor.id);
                                                                setShowDeleteModal(true);
                                                            }}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-gray-50">
                                <div className="text-sm text-gray-700">
                                    Page {currentPage} of {totalPages}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="p-2 border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="p-2 border border-gray-300 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            
                                </div>
                            </div>
                        </div>

                </main>
            </div>

            {/* Create/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingId ? 'Edit Doctor' : 'Create New Doctor'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Reg No</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.registrationNo}
                                        onChange={(e) => setFormData({ ...formData, registrationNo: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Specialist</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.specialty}
                                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.hospitalName}
                                        onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <input
                                        type="text"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mail ID</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                                >
                                    {editingId ? 'Update Doctor' : 'Create Doctor'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Confirm Delete</h3>
                        <p className="text-gray-600 mb-6">Are you sure you want to delete this doctor? This action cannot be undone.</p>
                        <div className="flex items-center justify-end gap-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
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

export default DoctorsPage;
