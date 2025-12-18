import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminLogin from "./admin/AdminLogin";
import AdminDashBoard from "./admin/AdminDashBoard";
import AddProduct from "./admin/Addproduct";


const App=()=>{
  return(
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="admin" element={<AdminLogin/>}/>
        </Route>   
        </Routes>    

        <Routes>
            <Route path="dashboard" element={<AdminDashBoard/>}>
              <Route path="addproduct" element={<AddProduct/>} />
            </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;