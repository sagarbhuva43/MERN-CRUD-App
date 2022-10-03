import { Route, Routes } from "react-router-dom";
import Tutorials from "../pages/Tutorials";
import AddUsers from "../pages/AddData";
import ViewData from "../pages/ViewData";
import EditData from "../pages/EditData";
import NotFound from "../pages/NotFound";
import Navbar from "../layout/Navbar";
import { Home } from "../pages/Home";

function MainRoute() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials/>}>
          {/* <Route path="/tutorials/:id" element={<ViewData />} /> */}
        </Route>
        <Route path="/add" element={<AddUsers />} />
        <Route path="/tutorials/:id" element={<EditData/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default MainRoute;
