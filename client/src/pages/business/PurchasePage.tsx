import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';
import { Download, Plus } from 'lucide-react';

type TabType = 'purchase' | 'order' | 'return' | 'dc';

function PurchasePage() {
    const [activeTab, setActiveTab] = useState<TabType>('purchase');

    const purchaseData = [
        { sNo: 2, mfr: 'ABC', productName: 'Paracetamol', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, free: 'No', pdDiscount: '7%', purRate: 345, mrp: 499, tax: '7%', goodsValue: 345, taxAmount: 765, amount: 765 },
        { sNo: 2, mfr: 'ABC', productName: 'Paracetamol', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, free: 'No', pdDiscount: '7%', purRate: 345, mrp: 499, tax: '7%', goodsValue: 345, taxAmount: 765, amount: 765 },
        { sNo: 2, mfr: 'ABC', productName: 'Paracetamol', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, free: 'No', pdDiscount: '7%', purRate: 345, mrp: 499, tax: '7%', goodsValue: 345, taxAmount: 765, amount: 765 },
        { sNo: 2, mfr: 'ABC', productName: 'Paracetamol', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, free: 'No', pdDiscount: '7%', purRate: 345, mrp: 499, tax: '7%', goodsValue: 345, taxAmount: 765, amount: 765 },
        { sNo: 2, mfr: 'ABC', productName: 'Paracetamol', packing: 'Box', batch: 2, expiry: '12/05/2025', qty: 4, free: 'No', pdDiscount: '7%', purRate: 345, mrp: 499, tax: '7%', goodsValue: 345, taxAmount: 765, amount: 765 },
    ];

    const tabs = [
        { id: 'purchase' as TabType, label: 'Purchase', icon: '📦' },
        { id: 'order' as TabType, label: 'Purchase Order', icon: '📋' },
        { id: 'return' as TabType, label: 'Purchase Return', icon: '↩️' },
        { id: 'dc' as TabType, label: 'DC Purchase', icon: '🚚' },
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
                                    {activeTab === 'purchase' && (
                                        <>
                                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                                <Plus className="w-4 h-4" />
                                                Purchase
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                                Import DC
                                            </button>
                                        </>
                                    )}
                                    {activeTab === 'order' && (
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                            <Plus className="w-4 h-4" />
                                            Purchase Order
                                        </button>
                                    )}
                                    {activeTab === 'return' && (
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                            <Plus className="w-4 h-4" />
                                            Debit Note
                                        </button>
                                    )}
                                    {activeTab === 'dc' && (
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                            <Plus className="w-4 h-4" />
                                            DC Purchase
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Purchase Form */}
                            {activeTab === 'purchase' && (
                                <div className="p-6">
                                    <h2 className="text-base font-semibold text-gray-900 mb-4">Purchase</h2>

                                    {/* Form Grid */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Purchase Number</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Auto Generate</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Supplier Invoice Number</label>
                                            <input
                                                type="text"
                                                placeholder="Invoice Number"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Supplier Name</label>
                                            <input
                                                type="text"
                                                placeholder="Supplier Name"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Purchase Order No</label>
                                            <input
                                                type="text"
                                                placeholder="PO Date"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Second Row */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Purchase Date</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Date</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Supplier Invoice Date</label>
                                            <input
                                                type="text"
                                                placeholder="Date"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Invoice Amount</label>
                                            <input
                                                type="text"
                                                placeholder="Amount"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Purchase Order Date</label>
                                            <input
                                                type="text"
                                                placeholder="PO Date"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                        View
                                    </button>
                                </div>
                            )}

                            {/* Purchase Order Form */}
                            {activeTab === 'order' && (
                                <div className="p-6">
                                    <h2 className="text-base font-semibold text-gray-900 mb-4">Purchase Order</h2>

                                    {/* Form Grid */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Purchase Order Number</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Purchase order No</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Supplier Name</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Supplier Name</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Purchase Order Date</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Date</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Purchase Order Amount</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>PurOrder Amount</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                        View
                                    </button>
                                </div>
                            )}

                            {/* Purchase Return Form */}
                            {activeTab === 'return' && (
                                <div className="p-6">
                                    <h2 className="text-base font-semibold text-gray-900 mb-4">Purchase Return</h2>

                                    {/* Form Grid */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Debit Note Number</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Purchase Number</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Supplier Name</label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Debit Note Date</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Supplier Code</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                        View
                                    </button>
                                </div>
                            )}

                            {/* DC Purchase Form */}
                            {activeTab === 'dc' && (
                                <div className="p-6">
                                    <h2 className="text-base font-semibold text-gray-900 mb-4">DC Purchase</h2>

                                    {/* Form Grid - Row 1 */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">DC Number</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Dc Number</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Supplier DC Number</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Supplier DC</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Supplier Name</label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Form Grid - Row 2 */}
                                    <div className="grid grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">DC Date</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Date</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Supplier DC Date</label>
                                            <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>DC Date</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 mb-1">Amount</label>
                                            <input
                                                type="text"
                                                placeholder="Amount"
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                        View
                                    </button>
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
                                            <option>Select Columns</option>
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
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">S No</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MFR</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PRODUCT NAME</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PACKING</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">BATCH</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">EXPIRY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">QTY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">FREE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PD DISCOUNT</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PUR.RATE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MRP</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">TAX</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">GOODS VALUE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {purchaseData.map((item, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.sNo}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.mfr}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.productName}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.packing}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.batch}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.expiry}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.qty}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.free}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.pdDiscount}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.purRate}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.mrp}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.tax}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{item.goodsValue}</td>
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

export default PurchasePage;
