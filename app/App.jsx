import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import SuperAdminLogin from '../src/pages/Login';
import NotFoundPage from '../src/pages/404';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

import Dashboard from '../src/pages/Dashboard';
import UserManagement from './pages/Users';
import BusinessAdmins from './pages/BusinessAdmin';
import AddProduct from './pages/AddProduct';
import InventoryList from './pages/ViewProduct';
import UpdateProduct from './pages/UpdateProduct';
import VendorShowcase from './pages/Home';
import SessionExpiredDialog from './components/ui/status/SessionExpiredDialog';
import Pos from './pages/Pos';

//===================================================================

const App = () => {
  return (
    <>
      <SessionExpiredDialog
        title='Session Expired !'
        description='Please Log In To Continue.'
      />


      <Router>
        <Routes>
          {/* Public Route ==============================*/}
          <Route path="/" element={<PublicRoute element={<SuperAdminLogin />} />} />


          {/* Protected Routes ============================*/}
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Layout><Dashboard /></Layout>} />} />
          <Route
            path="/pos"
            element={<ProtectedRoute element={<Layout><Pos /></Layout>} />} />

          <Route
            path="/users"
            element={<Layout><UserManagement /></Layout>} />
          <Route
            path="/add-products"
            element={<Layout><AddProduct /></Layout>} />
          <Route
            path="/view-products"
            element={<Layout><InventoryList /></Layout>} />
          <Route
            path="/business-admins"
            element={<ProtectedRoute element={<Layout><BusinessAdmins /></Layout>} />} />
          <Route
            path="/edit-product/:productId"
            element={<ProtectedRoute element={<Layout><UpdateProduct /></Layout>} />} />


          <Route
            path="/home"
            element={<ProtectedRoute element={<Layout><VendorShowcase /></Layout>} />} />






          {/* Catch All (404)  ===================================*/}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
