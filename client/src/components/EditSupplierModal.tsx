import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useSupplier, useUpdateSupplier } from '../hooks/useSuppliers';

interface EditSupplierModalProps {
    supplierId: string;
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

function EditSupplierModal({ supplierId, isOpen, onClose, onSuccess }: EditSupplierModalProps) {
    const { data: supplier, isLoading } = useSupplier(supplierId, isOpen);
    const updateSupplierMutation = useUpdateSupplier();

    const [formData, setFormData] = useState({
        code: '',
        name: '',
        category: '',
        type: '',
        address: '',
        landlineNumber: '',
        mobileNumber: '',
        email: '',
        gstNumber: '',
        panNumber: '',
        dlNumber: '',
        foodLicenseNumber: '',
        contactPersonName: '',
        paymentTerms: '',
        isActive: true,
    });

    // Populate form when supplier data loads
    useEffect(() => {
        if (supplier) {
            setFormData({
                code: supplier.code || '',
                name: supplier.name || '',
                category: supplier.category || '',
                type: supplier.type || '',
                address: supplier.address || '',
                landlineNumber: supplier.landlineNumber || '',
                mobileNumber: supplier.mobileNumber || '',
                email: supplier.email || '',
                gstNumber: supplier.gstNumber || '',
                panNumber: supplier.panNumber || '',
                dlNumber: supplier.dlNumber || '',
                foodLicenseNumber: supplier.foodLicenseNumber || '',
                contactPersonName: supplier.contactPersonName || '',
                paymentTerms: supplier.paymentTerms || '',
                isActive: supplier.isActive ?? true,
            });
        }
    }, [supplier]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            await updateSupplierMutation.mutateAsync({
                id: supplierId,
                data: formData
            });
            alert('Supplier updated successfully!');
            onSuccess();
            onClose();
        } catch (error: any) {
            alert(`Failed to update supplier: ${error.response?.data?.message || error.message}`);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-900">Edit Supplier</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <form onSubmit={handleSubmit} className="p-6">
                    {isLoading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                            <p className="mt-2 text-sm text-gray-500">Loading supplier...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-6">
                            {/* Supplier Code */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Supplier Code<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="code"
                                    value={formData.code}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>

                            {/* Status Toggle */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <label className="flex items-center gap-2 mt-2">
                                    <input
                                        type="checkbox"
                                        name="isActive"
                                        checked={formData.isActive}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Active</span>
                                </label>
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Pharmaceutical">Pharmaceutical</option>
                                    <option value="Medical">Medical</option>
                                    <option value="Surgical">Surgical</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                >
                                    <option value="">Select Type</option>
                                    <option value="Wholesaler">Wholesaler</option>
                                    <option value="Distributor">Distributor</option>
                                    <option value="Retailer">Retailer</option>
                                    <option value="Manufacturer">Manufacturer</option>
                                </select>
                            </div>

                            {/* Supplier Name */}
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Supplier Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>

                            {/* Address */}
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>

                            {/* Landline */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Landline Number</label>
                                <input
                                    type="text"
                                    name="landlineNumber"
                                    value={formData.landlineNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                            </div>

                            {/* Mobile */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mobile Number<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                            </div>

                            {/* GST */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                                <input
                                    type="text"
                                    name="gstNumber"
                                    value={formData.gstNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                            </div>

                            {/* PAN */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number</label>
                                <input
                                    type="text"
                                    name="panNumber"
                                    value={formData.panNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                            </div>

                            {/* DL Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">DL Number</label>
                                <input
                                    type="text"
                                    name="dlNumber"
                                    value={formData.dlNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                            </div>

                            {/* Food License */}
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Food License Number</label>
                                <input
                                    type="text"
                                    name="foodLicenseNumber"
                                    value={formData.foodLicenseNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                            </div>

                            {/* Contact Person */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Contact Person Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="contactPersonName"
                                    value={formData.contactPersonName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>

                            {/* Payment Terms */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                                <input
                                    type="text"
                                    name="paymentTerms"
                                    value={formData.paymentTerms}
                                    onChange={handleChange}
                                    placeholder="e.g., Net 30"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={updateSupplierMutation.isPending}
                            className="px-8 py-2.5 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                        >
                            {updateSupplierMutation.isPending ? 'Updating...' : 'Update Supplier'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditSupplierModal;
