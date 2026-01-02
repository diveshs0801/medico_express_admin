import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Edit } from 'lucide-react';

function AdjustmentEntryPage() {
    const adjustmentData = [
        { stockTransfer: 'Stock', value: '2545', fromTo: '10/03/2025 -25/03/2025' },
        { stockTransfer: 'Stock', value: '2545', fromTo: '10/03/2025 -25/03/2025' },
        { stockTransfer: 'Stock', value: '2545', fromTo: '10/03/2025 -25/03/2025' },
        { stockTransfer: 'Stock', value: '2545', fromTo: '10/03/2025 -25/03/2025' },
        { stockTransfer: 'Stock', value: '2545', fromTo: '10/03/2025 -25/03/2025' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Adjustment Entry Master Creation</h1>

                        {/* Form Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">1. Adjustment Entry Creation Details</h2>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Stock Transfer*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Stock Transfer"
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Value*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Payment Value"
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">From*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter From Date"
                                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">To*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter To Date"
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
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">STOCK TRANSFER</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">VALUE</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">FROM / TO</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {adjustmentData.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm text-gray-700">{item.stockTransfer}</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">{item.value}</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">{item.fromTo}</td>
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

export default AdjustmentEntryPage;
