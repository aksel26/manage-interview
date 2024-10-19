import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AdminLayout } from "./component/UI/Admin/Common/AdminLayout.tsx";
import { Login } from "./page/Login/Login.tsx";
import { NotFound } from "./page/NotFound.tsx";
import { Main } from "./page/admin/Main.tsx";
import { ManageManager } from "./page/admin/ManageManager.tsx";
import { Advisor } from "./page/advisor/Advisor.tsx";
import { Manager } from "./page/manager/Manager.tsx";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Main />} />
          <Route path="/admin/manager" element={<ManageManager />} />
        </Route>

        <Route path="/manager" element={<Manager />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
