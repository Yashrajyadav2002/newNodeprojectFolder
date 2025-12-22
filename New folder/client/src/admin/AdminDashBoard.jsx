import {Link, Outlet} from "react-router-dom";


const AdminDashBoard =()=>{
    return(
        <>
       
          <div>
             <div id="adminheader">
                  <h1 className="heading"> Welcome To AdminDashBoard</h1>
               </div>
             <div id="adminContent">
                <div id="adminLeftmenu">
                  
                    <Link to="addproduct" className="leftMenu">Add Product</Link>
                  
                   </div>
                <div id="adminData">

                                 <Outlet/>

                </div>

             </div>
          </div>
        </>
    )
}

export default AdminDashBoard;