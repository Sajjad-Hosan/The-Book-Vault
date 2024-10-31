import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged out!",
                    text: "You've successfully logged out.",
                    icon: "success"
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops !",
                    text: error.message,
                });
            })
    }


    return (
        <div className=" w-2/3 mx-auto">
            <div className="card bg-white p-5 shadow-xl my-10">
                {
                    user.photoURL ? 
                    <figure>
                    <img
                        src={user.photoURL}
                        alt="profile_pic" 
                        className=" rounded-full w-52 h-52"/>
                </figure>
                :
                <figure>
                    <FaCircleUser className=" rounded-full w-52 h-52"/>
                </figure>
                }
                <div className="card-body">
                    <h2 className="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn bg-[#ef4444] text-white">Update Profile</Link>
                        <Link to='/' onClick={handleLogOut} className=" btn btn-error text-white text-base font-semibold">Log Out</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;