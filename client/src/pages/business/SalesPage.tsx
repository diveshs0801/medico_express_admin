import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';
import { Download, Plus } from 'lucide-react';

type TabType = 'sales' | 'return';

function SalesPage() {
    const [activeTab, setActiveTab] = useState<TabType>('sales');

    const salesData = [
        { sNo: 2, productName: 'Paracetamol', hsnCode: 12444, mfr: 'ABC', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, mrp: 499, discount: '7%', gst: '7%', goodsValue: 345, taxAmount: 765, netAmount: 765 },
        { sNo: 2, productName: 'Paracetamol', hsnCode: 12444, mfr: 'ABC', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, mrp: 499, discount: '7%', gst: '7%', goodsValue: 345, taxAmount: 765, netAmount: 765 },
        { sNo: 2, productName: 'Paracetamol', hsnCode: 12444, mfr: 'ABC', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, mrp: 499, discount: '7%', gst: '7%', goodsValue: 345, taxAmount: 765, netAmount: 765 },
        { sNo: 2, productName: 'Paracetamol', hsnCode: 12444, mfr: 'ABC', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, mrp: 499, discount: '7%', gst: '7%', goodsValue: 345, taxAmount: 765, netAmount: 765 },
        { sNo: 2, productName: 'Paracetamol', hsnCode: 12444, mfr: 'ABC', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, mrp: 499, discount: '7%', gst: '7%', goodsValue: 345, taxAmount: 765, netAmount: 765 },
        { sNo: 2, productName: 'Paracetamol', hsnCode: 12444, mfr: 'ABC', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, mrp: 499, discount: '7%', gst: '7%', goodsValue: 345, taxAmount: 765, netAmount: 765 },
        { sNo: 2, productName: 'Paracetamol', hsnCode: 12444, mfr: 'ABC', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, mrp: 499, discount: '7%', gst: '7%', goodsValue: 345, taxAmount: 765, netAmount: 765 },
    ];

    const tabs = [
        { id: 'sales' as TabType, label: 'Sales', icon: '📄' },
        { id: 'return' as TabType, label: 'Sales Return', icon: '↩️' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Header />
            <div className="flex overflow-x-hidden">
                <Sidebar />
                <main className="flex-1 p-6 overflow-x-hidden">
                    <div className="max-w-full overflow-x-hidden">
                        {/* Tabs and Action Buttons */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
                                {/* Tabs */}
                                <div className="flex items-center gap-6">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all ${activeTab === tab.id
                                                ? 'text-blue-600 border-b-2 border-blue-600'
                                                : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            <span>{tab.icon}</span>
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3">
                                    {activeTab === 'sales' && (
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                            <Plus className="w-4 h-4" />
                                            Sales Invoice
                                        </button>
                                    )}
                                    {activeTab === 'return' && (
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                            <Plus className="w-4 h-4" />
                                            Credit Note
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Sales Form */}
                            {activeTab === 'sales' && (
                                <div className="p-6">
                                    <h2 className="text-base font-semibold text-gray-900 mb-4">Sales</h2>

                                    {/* Form Grid - Row 1 */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Invoice Number</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Invoice</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Patient Name</label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Advance Date</label>
                                            <input
                                                type="text"
                                                placeholder="Advance Date"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Advance Ref Number</label>
                                            <input
                                                type="text"
                                                placeholder="ADV123456"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Form Grid - Row 2 */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Invoice Date</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Date</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">
                                                Bill Type<span className="text-red-500">*</span>
                                            </label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Type</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Advance Amount</label>
                                            <input
                                                type="text"
                                                placeholder="Amount"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Mobile Number</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Mobile Number</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Form Grid - Row 3 */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Patient Web ID</label>
                                            <input
                                                type="text"
                                                placeholder="RDDH78675"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <div className="flex justify-end">
                                        <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                            View
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Sales Return (Credit Note) Form */}
                            {activeTab === 'return' && (
                                <div className="p-6">
                                    <h2 className="text-base font-semibold text-gray-900 mb-4">Credit Note</h2>

                                    {/* Form Grid - Row 1 */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Credit Note Number</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Credit Note No</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Sales Invoice No</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Sales Invoice No</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Patient Name</label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Refund/Adjusted Date</label>
                                            <input
                                                type="text"
                                                placeholder="Recd date"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Form Grid - Row 2 */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Credit Note Date</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Credit Note Date</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Sales Invoice Date</label>
                                            <input
                                                type="text"
                                                placeholder="Sales Invoice Date"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Refund/Adjusted Amount</label>
                                            <input
                                                type="text"
                                                placeholder="Amount"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Ref Number</label>
                                            <input
                                                type="text"
                                                placeholder="Number"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Form Grid - Row 3 (Reason) */}
                                    <div className="mb-4">
                                        <label className="block text-xs font-medium text-gray-600 mb-1">Reason</label>
                                        <textarea
                                            placeholder="Reasons"
                                            rows={3}
                                            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        />
                                    </div>

                                    {/* View Button */}
                                    <div className="flex justify-end">
                                        <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                            View
                                        </button>
                                    </div>
                                </div>
                            )}
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

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">S NO</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PRODUCT NAME</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">HSN CODE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MFR</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PACKING</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">BATCH</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">EXPIRY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">QTY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MRP</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">DISCOUNT</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">GST</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">GOODS VALUE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">TAX AMOUNT</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">NET AMOUNT</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {salesData.map((item, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.sNo}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.productName}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.hsnCode}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.mfr}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.packing}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.batch}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.expiry}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.qty}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.mrp}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.discount}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.gst}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.goodsValue}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.taxAmount}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.netAmount}</td>
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

export default SalesPage;
