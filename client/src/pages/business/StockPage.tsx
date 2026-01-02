import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Download } from 'lucide-react';

function StockPage() {
    const stockData = [
        { batchNo: 1234, quantity: 67, free: 56, pdDiscount: '2%', purchaseRate: 345, mrp: 449, expiryDate: '12/05/2025', lastPurchaseDate: '12/05/2025', taxCode: 12, gp: 50, purchaseInvoice: 1243434, purchaseDate: '12/05/2025', purchaseQuantity: 245, supplierName: 'ABCD', batchId: 123, exciseDuty: 23.00, netWf: 236, costRateWf: 236, godownName: 'ABCD', offlineQuantity: 345, offlineFqty: 499, roundedOff: 7.44, total: 23456 },
        { batchNo: 1234, quantity: 67, free: 56, pdDiscount: '2%', purchaseRate: 345, mrp: 449, expiryDate: '12/05/2025', lastPurchaseDate: '12/05/2025', taxCode: 12, gp: 50, purchaseInvoice: 1243434, purchaseDate: '12/05/2025', purchaseQuantity: 245, supplierName: 'ABCD', batchId: 123, exciseDuty: 23.00, netWf: 236, costRateWf: 236, godownName: 'ABCD', offlineQuantity: 345, offlineFqty: 499, roundedOff: 7.44, total: 23456 },
        { batchNo: 1234, quantity: 67, free: 56, pdDiscount: '2%', purchaseRate: 345, mrp: 449, expiryDate: '12/05/2025', lastPurchaseDate: '12/05/2025', taxCode: 12, gp: 50, purchaseInvoice: 1243434, purchaseDate: '12/05/2025', purchaseQuantity: 245, supplierName: 'ABCD', batchId: 123, exciseDuty: 23.00, netWf: 236, costRateWf: 236, godownName: 'ABCD', offlineQuantity: 345, offlineFqty: 499, roundedOff: 7.44, total: 23456 },
        { batchNo: 1234, quantity: 67, free: 56, pdDiscount: '2%', purchaseRate: 345, mrp: 449, expiryDate: '12/05/2025', lastPurchaseDate: '12/05/2025', taxCode: 12, gp: 50, purchaseInvoice: 1243434, purchaseDate: '12/05/2025', purchaseQuantity: 245, supplierName: 'ABCD', batchId: 123, exciseDuty: 23.00, netWf: 236, costRateWf: 236, godownName: 'ABCD', offlineQuantity: 345, offlineFqty: 499, roundedOff: 7.44, total: 23456 },
        { batchNo: 1234, quantity: 76, free: 56, pdDiscount: '2%', purchaseRate: 345, mrp: 449, expiryDate: '12/05/2025', lastPurchaseDate: '12/05/2025', taxCode: 12, gp: 50, purchaseInvoice: 1243434, purchaseDate: '12/05/2025', purchaseQuantity: 245, supplierName: 'ABCD', batchId: 123, exciseDuty: 23.00, netWf: 236, costRateWf: 236, godownName: 'ABCD', offlineQuantity: 345, offlineFqty: 499, roundedOff: 7.44, total: 23456 },
        { batchNo: 1234, quantity: 67, free: 56, pdDiscount: '2%', purchaseRate: 345, mrp: 449, expiryDate: '12/05/2025', lastPurchaseDate: '12/05/2025', taxCode: 12, gp: 50, purchaseInvoice: 1243434, purchaseDate: '12/05/2025', purchaseQuantity: 245, supplierName: 'ABCD', batchId: 123, exciseDuty: 23.00, netWf: 236, costRateWf: 236, godownName: 'ABCD', offlineQuantity: 345, offlineFqty: 499, roundedOff: 7.44, total: 23456 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Header />
            <div className="flex overflow-x-hidden">
                <Sidebar />
                <main className="flex-1 p-6 overflow-x-hidden">
                    <div className="max-w-full overflow-x-hidden">
                        {/* Stock Tab Header */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                            <div className="px-6 py-3 border-b border-gray-200">
                                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                                    <span>📦</span>
                                    Stock
                                </button>
                            </div>

                            {/* Product Information Section */}
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
                                    {/* Row 1 */}
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Product Name</span>
                                        <span className="font-semibold text-gray-900">Dolo 650ml</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Alias Code</span>
                                        <span className="font-semibold text-gray-900"></span>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Product Number</span>
                                        <span className="font-semibold text-gray-900">345</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">MFR</span>
                                        <span className="font-semibold text-gray-900">MICRO</span>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Drug Name</span>
                                        <span className="font-semibold text-gray-900">Paracetamol</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Unit per Case</span>
                                        <span className="font-semibold text-gray-900">0</span>
                                    </div>

                                    {/* Row 4 */}
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Cmp. / Div.</span>
                                        <span className="font-semibold text-gray-900">MICRO</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">PTR</span>
                                        <span className="font-semibold text-gray-900">0</span>
                                    </div>

                                    {/* Row 5 */}
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Supplier</span>
                                        <span className="font-semibold text-gray-900">Paramount</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Packing</span>
                                        <span className="font-semibold text-gray-900">1 X15</span>
                                    </div>

                                    {/* Row 6 */}
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Box Packing</span>
                                        <span className="font-semibold text-gray-900"></span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Recent Cost Rate</span>
                                        <span className="font-semibold text-gray-900">24.6</span>
                                    </div>

                                    {/* Row 7 */}
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">MFR Material Code</span>
                                        <span className="font-semibold text-gray-900"></span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Rate Increase %</span>
                                        <span className="font-semibold text-gray-900">0</span>
                                    </div>

                                    {/* Row 8 */}
                                    <div className="flex">
                                        <span className="text-gray-600 w-40">Manufacturer</span>
                                        <span className="font-semibold text-gray-900"></span>
                                    </div>
                                </div>
                            </div>
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

                                {/* Wide Scrollable Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">BATCH NO</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">QUANTITY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">FREE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PD DISCOUNT</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PURCHASE RATE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">MRP</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">EXPIRY DATE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">LAST PURCHASE DATE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">TAX CODE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">GP %</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PURCHASE INVOICE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PURCHASE DATE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PURCHASE QUANTITY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">SUPPLIER NAME</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">BATCH ID</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">EXCISE DUTY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">NET_WF</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">COST RATE_WF</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">GODOWN NAME</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">OFFLINE QUANTITY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">OFFLINE FQTY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">ROUNDED OFF</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">TOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stockData.map((item, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.batchNo}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.quantity}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.free}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.pdDiscount}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.purchaseRate}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.mrp}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.expiryDate}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.lastPurchaseDate}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.taxCode}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.gp}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.purchaseInvoice}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.purchaseDate}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.purchaseQuantity}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.supplierName}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.batchId}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.exciseDuty}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.netWf}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.costRateWf}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.godownName}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.offlineQuantity}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.offlineFqty}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.roundedOff}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700 whitespace-nowrap">{item.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Summary Footer */}
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <div className="grid grid-cols-2 gap-6 text-sm">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Offer</span>
                                                <span className="font-semibold text-gray-900"></span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Total Stock</span>
                                                <span className="font-semibold text-gray-900">159</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Offline Quantity</span>
                                                <span className="font-semibold text-gray-900">0</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Stock Value</span>
                                                <span className="font-semibold text-gray-900">0</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Current Month Sale</span>
                                                <span className="font-semibold text-gray-900">159</span>
                                            </div>
                                            <div></div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Last Month Sale</span>
                                                <span className="font-semibold text-gray-900">235</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default StockPage;
