import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { DollarSign, ShoppingCart, Package, Clock, Calendar } from 'lucide-react';

function DashboardPage() {
  const stats = [
    {
      name: 'Total Sales',
      value: '4,42,236',
      change: '+25.3%',
      extraInfo: 'You made an extra 35,000 this year',
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Total Purchase',
      value: '18,800',
      change: '+27.4%',
      extraInfo: 'You made an extra 1,943 this year',
      icon: ShoppingCart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Closing Stock Value',
      value: '2345',
      change: '+49.3%',
      extraInfo: 'You made an extra 35,000 this year',
      icon: Package,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Pending Orders',
      value: '50',
      change: '+7.4%',
      extraInfo: 'You made an extra 1,943 this year',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const stockStatusData = [
    { stockName: 'Dolo', quantity: 520, expiryDate: '03/04/2025' },
    { stockName: 'Dolo', quantity: 520, expiryDate: '03/04/2025' },
    { stockName: 'Dolo', quantity: 520, expiryDate: '03/04/2025' },
    { stockName: 'Dolo', quantity: 520, expiryDate: '03/04/2025' },
    { stockName: 'Dolo', quantity: 520, expiryDate: '03/04/2025' },
    { stockName: 'Dolo', quantity: 520, expiryDate: '03/04/2025' },
  ];

  const lossOfOrderData = [
    { name: 'Dolo 650ml', quantity: 530 },
    { name: 'Dolo 650ml', quantity: 530 },
    { name: 'Dolo 650ml', quantity: 530 },
    { name: 'Dolo 650ml', quantity: 530 },
    { name: 'Dolo 650ml', quantity: 530 },
    { name: 'Dolo 650ml', quantity: 530 },
  ];

  const supplierLicenseData = [
    { supplierName: 'ABC', licenseDate: '03/04/2025' },
    { supplierName: 'ABC', licenseDate: '03/04/2025' },
    { supplierName: 'ABC', licenseDate: '03/04/2025' },
    { supplierName: 'ABC', licenseDate: '03/04/2025' },
    { supplierName: 'ABC', licenseDate: '03/04/2025' },
    { supplierName: 'ABC', licenseDate: '03/04/2025' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-full">
            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                const isPositive = stat.change.startsWith('+');
                return (
                  <div
                    key={stat.name}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">{stat.name}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <button className="p-1.5 hover:bg-gray-50 rounded">
                        <Calendar className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${isPositive
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                          }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{stat.extraInfo}</p>
                  </div>
                );
              })}
            </div>

            {/* Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Stock Status Table */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-900">Stock Status</h2>
                  <div className="flex items-center gap-2">
                    <select className="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Expiry</option>
                    </select>
                    <button className="text-xs border border-gray-200 rounded px-2 py-1 hover:bg-gray-50 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Date
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-200">
                      <tr>
                        <th className="text-left text-xs font-semibold text-gray-600 pb-2">Stock Name</th>
                        <th className="text-left text-xs font-semibold text-gray-600 pb-2">Quantity</th>
                        <th className="text-left text-xs font-semibold text-gray-600 pb-2">Expiry Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stockStatusData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 last:border-0">
                          <td className="py-2.5 text-xs text-gray-700">{item.stockName}</td>
                          <td className="py-2.5 text-xs text-gray-700">{item.quantity}</td>
                          <td className="py-2.5 text-xs text-gray-700">{item.expiryDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Loss of Order Table */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-900">Loss of Order</h2>
                  <select className="text-xs border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Daily</option>
                  </select>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-200">
                      <tr>
                        <th className="text-left text-xs font-semibold text-gray-600 pb-2">Name</th>
                        <th className="text-left text-xs font-semibold text-gray-600 pb-2">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lossOfOrderData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 last:border-0">
                          <td className="py-2.5 text-xs text-gray-700">{item.name}</td>
                          <td className="py-2.5 text-xs text-gray-700">{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Supplier License Expiry Table */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-900">Supplier License Expiry</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-200">
                      <tr>
                        <th className="text-left text-xs font-semibold text-gray-600 pb-2">Supplier Name</th>
                        <th className="text-left text-xs font-semibold text-gray-600 pb-2">License Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplierLicenseData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 last:border-0">
                          <td className="py-2.5 text-xs text-gray-700">{item.supplierName}</td>
                          <td className="py-2.5 text-xs text-gray-700">{item.licenseDate}</td>
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

export default DashboardPage;
