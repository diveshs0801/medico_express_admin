import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PurchasePage from './pages/business/PurchasePage';
import SalesPage from './pages/business/SalesPage';
import StockPage from './pages/business/StockPage';
import ProfilePage from './pages/ProfilePage';
import SupplierPage from './pages/SupplierPage';
import ManufacturerPage from './pages/ManufacturerPage';
import CustomerPage from './pages/CustomerPage';
import DoctorsPage from './pages/DoctorsPage';
import ProductPage from './pages/ProductPage';
import EmployeePage from './pages/EmployeePage';
import AdjustmentEntryPage from './pages/ac-master/AdjustmentEntryPage';
import ReceiptsPage from './pages/ac-master/ReceiptsPage';
import PaymentsPage from './pages/ac-master/PaymentsPage';
import PackingCreationPage from './pages/master-creation/PackingCreationPage';
import MoleculeCreationPage from './pages/master-creation/MoleculeCreationPage';
import HSNCreationPage from './pages/master-creation/HSNCreationPage';
import CategoryCreationPage from './pages/master-creation/CategoryCreationPage';
import SubCategoryCreationPage from './pages/master-creation/SubCategoryCreationPage';
import ReportsPage from './pages/ReportsPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" replace />;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/purchase"
          element={
            <ProtectedRoute>
              <PurchasePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/sales"
          element={
            <ProtectedRoute>
              <SalesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business/stock"
          element={
            <ProtectedRoute>
              <StockPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/supplier"
          element={
            <ProtectedRoute>
              <SupplierPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manufacturer"
          element={
            <ProtectedRoute>
              <ManufacturerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <ProtectedRoute>
              <CustomerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors"
          element={
            <ProtectedRoute>
              <DoctorsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute>
              <EmployeePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ac-master/adjustment-entry"
          element={
            <ProtectedRoute>
              <AdjustmentEntryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ac-master/receipts"
          element={
            <ProtectedRoute>
              <ReceiptsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ac-master/payments"
          element={
            <ProtectedRoute>
              <PaymentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master-creation/packing"
          element={
            <ProtectedRoute>
              <PackingCreationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master-creation/molecule"
          element={
            <ProtectedRoute>
              <MoleculeCreationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master-creation/hsn"
          element={
            <ProtectedRoute>
              <HSNCreationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master-creation/category"
          element={
            <ProtectedRoute>
              <CategoryCreationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/master-creation/sub-category"
          element={
            <ProtectedRoute>
              <SubCategoryCreationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
