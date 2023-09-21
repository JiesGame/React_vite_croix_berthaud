import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Layout } from "./components/Layout";
import { UserCharter } from "./pages/UserCharter";
import { Cgu } from "./pages/Cgu";
import { Search } from "./pages/Search";
import { Prices } from "./pages/Prices";
import './App.css';
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { ChangeProfile } from "./pages/ChangeProfile";
import { PrivateRoutes } from "./services/PrivateRoutes";
import { AdminRoutes } from "./services/AdminRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteProfile } from "./pages/DeleteProfile";
import { AdminUsers } from "./pages/admin/AdminUsers";
import { AdminArticles } from "./pages/admin/AdminArticles"
import { AdminActivities } from "./pages/admin/AdminActivities";
import { AdminCreateActivity } from "./pages/admin/AdminCreateActivity";
import { ShowArticle } from "./pages/ShowArticle";
import { AdminCreateArticle } from "./pages/admin/AdminCreateArticle";
import { AdminEditArticle } from "./pages/admin/AdminEditArticle";
import { AdminEditActivity } from "./pages/admin/AdminEditActivity";
import { Donation } from "./pages/Donation";
import { ThanksForDonation } from "./pages/ThanksForDonation";
import { Contact } from "./pages/Contact";
import { Inscription } from "./pages/Inscription";

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route element={<AdminRoutes/>}>
              <Route path='admin_users' element={<AdminUsers />}/>
              <Route path='admin_articles' element={<AdminArticles />}/>
              <Route path='admin_create_article' element={<AdminCreateArticle />}/>
              <Route path='admin_edit_article/:id' element={<AdminEditArticle />}/>
              <Route path='admin_activities' element={<AdminActivities />}/>
              <Route path='admin_create_activity' element={<AdminCreateActivity />}/>
              <Route path='admin_edit_activity/:id' element={<AdminEditActivity />}/>
            </Route>
            <Route element={<PrivateRoutes/>}>
              <Route path='change_profile' element={<ChangeProfile />}/>
              <Route path='delete_account' element={<DeleteProfile />}/>
              <Route path='inscription' element={<Inscription />}/>
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace/>}/>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot_password' element={<ForgotPassword />} />
            <Route path='reset_password/:token' element={<ResetPassword />} />
            <Route path='article/:id' element={<ShowArticle />}/>
            <Route path='user_charter' element={<UserCharter />} />
            <Route path='cgu' element={<Cgu />} />
            <Route path="donation" element={<Donation />} />
            <Route path="thank_you" element={<ThanksForDonation />} />
            <Route path="contact" element={<Contact />} />
            <Route path="search" element={<Search />} />
            <Route path="prices" element={<Prices />} />
          </Routes>
        </Layout>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App
