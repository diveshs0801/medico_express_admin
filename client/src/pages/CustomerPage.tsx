import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Download, Plus } from 'lucide-react';

function CustomerPage() {
    const customerData = [
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
        { code: '12334', delivery: 'Direct', type: 'Local', name: 'ABC Company', address: '123, GH Layout, Coimbatore.', deliveryAddress: '123, GH Layout, Coimbatore.', pincode: '642003', mobileNo: '+91 9876543210', mailId: 'abc@gmail.com', reference: '0453787784', remark: '25/04/2025', image: 'Track.jpg' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Header />
            <div className="flex overflow-x-hidden">
                <Sidebar />
                <main className="flex-1 p-6 overflow-x-hidden">
                    <div className="max-w-full overflow-x-hidden">
                        {/* Page Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-2xl font-bold text-gray-900">Customer Lists</h1>
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                <Plus className="w-4 h-4" />
                                Create Customer
                            </button>
                        </div>

                        {/* Data Table */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <label className="text-sm text-gray-600">Column Filter:</label>
                                        <select className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Select Column</option>
                                        </select>
                                    </div>
                                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">CODE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">DELIVERY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">TYPE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">NAME</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">ADDRESS</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">DELIVERY ADDRESS</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PINCODE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MOBILE NO</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MAIL ID</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">REFERENCE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">REMARK</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">IMAGE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customerData.map((customer, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.code}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.delivery}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.type}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.name}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.address}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.deliveryAddress}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.pincode}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.mobileNo}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.mailId}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.reference}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{customer.remark}</td>
                                                    <td className="px-3 py-3 text-xs text-blue-500">{customer.image}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CustomerPage;
