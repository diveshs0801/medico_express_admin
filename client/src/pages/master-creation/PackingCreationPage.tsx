import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Edit } from 'lucide-react';

function PackingCreationPage() {
    const packingData = [
        { productCode: '2334234', productName: 'Medicinne', qtyPack: '1 x 10' },
        { productCode: '2334234', productName: 'Medicinne', qtyPack: '1 x 10' },
        { productCode: '2334234', productName: 'Medicinne', qtyPack: '1 x 10' },
        { productCode: '2334234', productName: 'Medicinne', qtyPack: '1 x 10' },
        { productCode: '2334234', productName: 'Medicinne', qtyPack: '1 x 10' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Packing Master Creation</h1>

                        {/* Form Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">1. Packing Creation Details</h2>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Product Code*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Product Code"
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Product Name*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Product Name"
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Qty / Pack*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Qty / Pack"
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                    Cancel
                                </button>
                                <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </div>

                        {/* Data Table */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">PRODUCT CODE</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">PRODUCT NAME</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">QTY / PACK</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packingData.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm text-gray-700">{item.productCode}</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">{item.productName}</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">{item.qtyPack}</td>
                                                <td className="px-4 py-3">
                                                    <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">
                                                        <Edit className="w-3 h-3" />
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PackingCreationPage;
