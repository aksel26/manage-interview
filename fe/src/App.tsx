import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AdminLayout } from "./component/UI/Admin/Common/AdminLayout.tsx";
import { Login } from "./page/Login/Login.tsx";
import { NotFound } from "./page/NotFound.tsx";
import { Main } from "./page/admin/Main.tsx";
import { ManageStaffs } from "./page/admin/ManageStaffs.tsx";
import { Advisor } from "./page/advisor/Advisor.tsx";
import { Staff } from "./page/staff/Staff.tsx";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Main />} />
          <Route path="/admin/staff" element={<ManageStaffs />} />
        </Route>

        <Route path="/staff" element={<Staff />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
