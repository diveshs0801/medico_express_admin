import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Edit, Upload } from 'lucide-react';

function HSNCreationPage() {
    const hsnData = [
        { hsnDetails: '1244345' },
        { hsnDetails: '1244345' },
        { hsnDetails: '1244345' },
        { hsnDetails: '1244345' },
        { hsnDetails: '1244345' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">HSN Master Creation</h1>

                        {/* Form Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">1. HSN Creation Details</h2>

                            <div className="mb-6">
                                <label className="block text-sm text-gray-600 mb-2">HSN Upload*</label>
                                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Upload className="w-4 h-4" />
                                    Click to Upload
                                </button>
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
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">HSN DETAILS</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {hsnData.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm text-gray-700">{item.hsnDetails}</td>
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

export default HSNCreationPage;
