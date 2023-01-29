import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
