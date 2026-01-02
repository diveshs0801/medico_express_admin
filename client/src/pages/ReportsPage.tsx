import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Download, Eye } from 'lucide-react';

function ReportsPage() {
    const salesData = [
        {
            invoiceNo: '12424526', invoiceDate: '12/05/2025', billType: 'Cash', saleType: 'Local',
            customerName: 'ABC Name', customerCode: '124', communicationAddress: '123, GH Layout, Coimbatore.',
            pincode: '5435655', phoneNo: '12424526', email: 'sap@gmail.com', deliveryAddress: '123, GH Layout, Coimbatore.',
            phoneNo2: '12424526', email2: 'sap@gmail.com', doctorName: 'ABC', hospitalName: 'ABC',
            prescriptionNo: '5467', prescriptionDate: '12/05/2025', sno: '2', productName: 'Paracetamol',
            hsnCode: '12', noOfItems: '50', mfr: 'ABC', packing: 'Box', batch: '2', expiry: '12/05/2025',
            qty: '4', mrp: '499', pdDiscount: '7%', tax: '7%', discount: '7%', goodsValue: '345',
            taxAmount: '765', amount: '765', consolidate: '7%', goodsValue2: '567', tax2: '7%',
            frightCharges: '12', tax3: '7%', insurance: 'Yes', discount2: '7%', roundedOff: '7%',
            total: '7%', deliveryAddress2: '123, GH Layout, Coimbatore.', name: 'ABC Name',
            phoneNo3: '12424526', email3: 'sap@gmail.com', deliveryMode: 'Road', transportor: 'No'
        },
        {
            invoiceNo: '12424526', invoiceDate: '12/05/2025', billType: 'Cash', saleType: 'Local',
            customerName: 'ABC Name', customerCode: '124', communicationAddress: '123, GH Layout, Coimbatore.',
            pincode: '5435655', phoneNo: '12424526', email: 'sap@gmail.com', deliveryAddress: '123, GH Layout, Coimbatore.',
            phoneNo2: '12424526', email2: 'sap@gmail.com', doctorName: 'ABC', hospitalName: 'ABC',
            prescriptionNo: '5467', prescriptionDate: '12/05/2025', sno: '2', productName: 'Paracetamol',
            hsnCode: '12', noOfItems: '50', mfr: 'ABC', packing: 'Box', batch: '2', expiry: '12/05/2025',
            qty: '4', mrp: '499', pdDiscount: '7%', tax: '7%', discount: '7%', goodsValue: '345',
            taxAmount: '765', amount: '765', consolidate: '7%', goodsValue2: '567', tax2: '7%',
            frightCharges: '12', tax3: '7%', insurance: 'Yes', discount2: '7%', roundedOff: '7%',
            total: '7%', deliveryAddress2: '123, GH Layout, Coimbatore.', name: 'ABC Name',
            phoneNo3: '12424526', email3: 'sap@gmail.com', deliveryMode: 'Road', transportor: 'No'
        },
        {
            invoiceNo: '12424526', invoiceDate: '12/05/2025', billType: 'Cash', saleType: 'Local',
            customerName: 'ABC Name', customerCode: '124', communicationAddress: '123, GH Layout, Coimbatore.',
            pincode: '5435655', phoneNo: '12424526', email: 'sap@gmail.com', deliveryAddress: '123, GH Layout, Coimbatore.',
            phoneNo2: '12424526', email2: 'sap@gmail.com', doctorName: 'ABC', hospitalName: 'ABC',
            prescriptionNo: '5467', prescriptionDate: '12/05/2025', sno: '2', productName: 'Paracetamol',
            hsnCode: '12', noOfItems: '50', mfr: 'ABC', packing: 'Box', batch: '2', expiry: '12/05/2025',
            qty: '4', mrp: '499', pdDiscount: '7%', tax: '7%', discount: '7%', goodsValue: '345',
            taxAmount: '765', amount: '765', consolidate: '7%', goodsValue2: '567', tax2: '7%',
            frightCharges: '12', tax3: '7%', insurance: 'Yes', discount2: '7%', roundedOff: '7%',
            total: '7%', deliveryAddress2: '123, GH Layout, Coimbatore.', name: 'ABC Name',
            phoneNo3: '12424526', email3: 'sap@gmail.com', deliveryMode: 'Road', transportor: 'No'
        },
        {
            invoiceNo: '12424526', invoiceDate: '12/05/2025', billType: 'Cash', saleType: 'Local',
            customerName: 'ABC Name', customerCode: '124', communicationAddress: '123, GH Layout, Coimbatore.',
            pincode: '5435655', phoneNo: '12424526', email: 'sap@gmail.com', deliveryAddress: '123, GH Layout, Coimbatore.',
            phoneNo2: '12424526', email2: 'sap@gmail.com', doctorName: 'ABC', hospitalName: 'ABC',
            prescriptionNo: '5467', prescriptionDate: '12/05/2025', sno: '2', productName: 'Paracetamol',
            hsnCode: '12', noOfItems: '50', mfr: 'ABC', packing: 'Box', batch: '2', expiry: '12/05/2025',
            qty: '4', mrp: '499', pdDiscount: '7%', tax: '7%', discount: '7%', goodsValue: '345',
            taxAmount: '765', amount: '765', consolidate: '7%', goodsValue2: '567', tax2: '7%',
            frightCharges: '12', tax3: '7%', insurance: 'Yes', discount2: '7%', roundedOff: '7%',
            total: '7%', deliveryAddress2: '123, GH Layout, Coimbatore.', name: 'ABC Name',
            phoneNo3: '12424526', email3: 'sap@gmail.com', deliveryMode: 'Road', transportor: 'No'
        },
        {
            invoiceNo: '12424526', invoiceDate: '12/05/2025', billType: 'Cash', saleType: 'Local',
            customerName: 'ABC Name', customerCode: '124', communicationAddress: '123, GH Layout, Coimbatore.',
            pincode: '5435655', phoneNo: '12424526', email: 'sap@gmail.com', deliveryAddress: '123, GH Layout, Coimbatore.',
            phoneNo2: '12424526', email2: 'sap@gmail.com', doctorName: 'ABC', hospitalName: 'ABC',
            prescriptionNo: '5467', prescriptionDate: '12/05/2025', sno: '2', productName: 'Paracetamol',
            hsnCode: '12', noOfItems: '50', mfr: 'ABC', packing: 'Box', batch: '2', expiry: '12/05/2025',
            qty: '4', mrp: '499', pdDiscount: '7%', tax: '7%', discount: '7%', goodsValue: '345',
            taxAmount: '765', amount: '765', consolidate: '7%', goodsValue2: '567', tax2: '7%',
            frightCharges: '12', tax3: '7%', insurance: 'Yes', discount2: '7%', roundedOff: '7%',
            total: '7%', deliveryAddress2: '123, GH Layout, Coimbatore.', name: 'ABC Name',
            phoneNo3: '12424526', email3: 'sap@gmail.com', deliveryMode: 'Road', transportor: 'No'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Header />
            <div className="flex overflow-x-hidden">
                <Sidebar />
                <main className="flex-1 p-6 overflow-x-hidden">
                    <div className="max-w-full overflow-x-hidden">
                        {/* Report Type Selector */}
                        <div className="mb-6">
                            <select className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Sales Report</option>
                            </select>
                        </div>

                        {/* Filters and Download */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="flex items-center gap-2">
                                    <label className="text-sm text-gray-600">Column Filter:</label>
                                    <select className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Select Column</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="text-sm text-gray-600">From Date:</label>
                                    <input
                                        type="text"
                                        placeholder="10/09/2025"
                                        className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="text-sm text-gray-600">To Date:</label>
                                    <input
                                        type="text"
                                        placeholder="10/09/2025"
                                        className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <button className="ml-auto p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Comprehensive Data Table with Horizontal Scroll */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">INVOICE NO</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">INVOICE DATE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">BILL TYPE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">SALE TYPE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">CUSTOMER NAME</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">CUSTOMER CODE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">COMMUNICATION ADDRESS</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PINCODE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PHONE NO</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">EMAIL</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">DELIVERY ADDRESS</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PHONE NO</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">EMAIL</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">DOCTOR NAME</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">HOSPITAL NAME</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PRESCRIPTION NO</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PRESCRIPTION DATE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">S NO</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PRODUCT NAME</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">HSN CODE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">NO OF ITEMS</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">MFR</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PACKING</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">BATCH</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">EXPIRY</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">QTY</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">MRP</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PD DISCOUNT</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">TAX</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">DISCOUNT</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">GOODS VALUE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">TAX AMOUNT</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">AMOUNT</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">CONSOLIDATE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">GOODS VALUE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">TAX</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">FRIGHT CHARGES</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">TAX</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">INSURANCE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">DISCOUNT</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">ROUNDED OFF</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">TOTAL</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">DELIVERY ADDRESS</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">NAME</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">PHONE NO</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">EMAIL</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">DELIVERY MODE</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">TRANSPORTOR</th>
                                            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 whitespace-nowrap">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {salesData.map((sale, index) => (
                                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.invoiceNo}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.invoiceDate}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.billType}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.saleType}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.customerName}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.customerCode}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.communicationAddress}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.pincode}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.phoneNo}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.email}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.deliveryAddress}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.phoneNo2}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.email2}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.doctorName}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.hospitalName}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.prescriptionNo}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.prescriptionDate}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.sno}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.productName}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.hsnCode}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.noOfItems}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.mfr}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.packing}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.batch}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.expiry}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.qty}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.mrp}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.pdDiscount}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.tax}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.discount}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.goodsValue}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.taxAmount}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.amount}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.consolidate}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.goodsValue2}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.tax2}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.frightCharges}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.tax3}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.insurance}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.discount2}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.roundedOff}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.total}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.deliveryAddress2}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.name}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.phoneNo3}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.email3}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.deliveryMode}</td>
                                                <td className="px-3 py-3 text-xs text-gray-700">{sale.transportor}</td>
                                                <td className="px-3 py-3">
                                                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                                                        <Eye className="w-4 h-4" />
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

export default ReportsPage;
