import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Download, Plus } from 'lucide-react';

function ProductPage() {
    const productData = [
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '4', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '5', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '5', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '5', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '5', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '5', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '5', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '5', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
        { code: '1234', productName: 'Tablet', drugMolecule: 'Acid', manufacturer: 'ABC', supplier: 'ABC', uom: '12343', packing: '1 X 10', recentRate: '546', hsn: '124334', rateOfTax: '23', category: 'Medicine', subCategory: 'Cream', temperature: 'Room', storage: 'Room', minStock: '5', maxStock: '34', reOrderLevel: '6', stock: 'In Stock' },
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
                            <h1 className="text-2xl font-bold text-gray-900">Products List</h1>
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                <Plus className="w-4 h-4" />
                                Create Product
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
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PRODUCT NAME</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">DRUG / MOLECULE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MANUFACTURER</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">SUPPLIER</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">UOM</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">PACKING</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">RECENT RATE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">HSN</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">RATE OF TAX</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">CATEGORY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">SUB_CATEGORY</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">TEMPERTURE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">STORAGE</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MIN STOCK</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">MAX STOCK</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">RE ORDER LEVEL</th>
                                                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700">STOCK</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {productData.map((product, index) => (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.code}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.productName}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.drugMolecule}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.manufacturer}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.supplier}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.uom}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.packing}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.recentRate}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.hsn}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.rateOfTax}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.category}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.subCategory}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.temperature}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.storage}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.minStock}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.maxStock}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.reOrderLevel}</td>
                                                    <td className="px-3 py-3 text-xs text-gray-700">{product.stock}</td>
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

export default ProductPage;
