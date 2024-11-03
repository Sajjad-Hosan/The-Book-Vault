import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {

    const { user, logOut } = useContext(AuthContext);
    const axiosSecure = useAxios();

  const {
    data: users = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => {
    //             Swal.fire({
    //                 title: "Logged out!",
    //                 text: "You've successfully logged out.",
    //                 icon: "success"
    //             });
    //         })
    //         .catch(error => {
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Oops !",
    //                 text: error.message,
    //             });
    //         })
    // }

    const handleUserUpdate = async () => {
        const { value: formValues } = await Swal.fire({
          title: "Update User Details",
          html: `
            <div style="text-align: left;">
              <h2 style="font-size: 1.25rem; margin: 0.5rem 0;">Name</h2>
              <input id="name" class="swal2-input" placeholder="Name" value="uttpol roy" style="width: 100%;">
      
              <h2 style="font-size: 1.25rem; margin: 0.5rem 0;">Email</h2>
              <input id="email" class="swal2-input" placeholder="Email" value="uaroy22@gmail.com" style="width: 100%;">
                  </div>
          `,
          focusConfirm: false,
          preConfirm: () => {
            return {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
            };
          },
        });
      
        if (formValues) {
          try {
            // Assuming you have an API endpoint for updating user details
            await axiosSecure.patch(`/user/update`, formValues);
            Swal.fire("Success!", "User details updated successfully.", "success");
            // You can also refresh the user list or perform another action if needed
          } catch (error) {
            Swal.fire("Error", "Failed to update user details", "error");
            console.error("Error updating user:", error);
          }
        }
      };
      


    return (
        <div className=" w-2/3 mx-auto">
            <div className="card bg-white p-5 shadow-xl my-20">
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
                        <Link onClick={()=>handleUserUpdate(users?._id)} className="btn bg-[#ef4444] text-white">Update Profile</Link>
                        {/* <Link to='/' onClick={handleLogOut} className=" btn btn-error text-white text-base font-semibold">Log Out</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;