import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Layout } from "./components/Layout";
import './App.css';
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { ChangeProfile } from "./pages/ChangeProfile";
import { PrivateRoutes } from "./services/PrivateRoutes";
import { AdminRoutes } from "./services/AdminRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteProfile } from "./pages/DeleteProfile";
import { AdminHome } from "./pages/admin/AdminHome";
import { AdminUsers } from "./pages/admin/AdminUsers";
import { AdminArticles } from "./pages/admin/AdminArticles"

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route element={<AdminRoutes/>}>
              <Route path='admin_home' element={<AdminHome />} />
              <Route path='admin_users' element={<AdminUsers />}/>
              <Route path='admin_articles' element={<AdminArticles />}/>
            </Route>
            <Route element={<PrivateRoutes/>}>
              <Route path='change_profile' element={<ChangeProfile />} />
              <Route path='delete_account' element={<DeleteProfile />}/>
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace/>}/>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot_password' element={<ForgotPassword />} />
            <Route path='reset_password/:token' element={<ResetPassword />} />
          </Routes>
        </Layout>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App
