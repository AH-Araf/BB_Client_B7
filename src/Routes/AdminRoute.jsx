import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
// import Swal from "sweetalert2";
// import un from "../assets/images/un.jpg"

const AdminRoute = ({ children }) => {

    // Swal.fire({
    //     // imageUrl: `${<img src={un} alt="" />}`,
    //     title: '⚠️Unauthorized Access⚠️',
    //     text: "You are not an Admin.",
    //     icon: 'warning',
    //     position: 'center',
        
    // })
    

    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }


    return ( 
        <div>
            <Navigate  to="/" state={{ from: location }} replace></Navigate>
            {/* onClick={() => handleAddToCart(item) */}
            {/* onClick={()=> (Swal)} */}
            
        </div>
        
    )
};

export default AdminRoute;