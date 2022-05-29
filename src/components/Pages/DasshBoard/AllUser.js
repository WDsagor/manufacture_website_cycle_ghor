import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../share/Loading";

const AllUser = () => {
  const { data: users, isLoading, refetch } = useQuery("allUsers", () =>
    fetch("http://localhost:5000/users",{
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }}).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const makeAdmin = (email) =>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }}).then((res) => res.json())
        .then(data =>{
           return toast.success('Admin Success', {
                position: toast.POSITION.TOP_CENTER
                
              })
            })
            
            refetch()
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Email</th>
            <th>Manage User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.email}</td>
              <td>{user.role ==="admin" ?<span className=" text-success font-bold">Now admin</span>:<batton onClick={()=>makeAdmin(user.email)} className="btn btn-xs btn-primary">Make admin</batton>}<batton className="btn btn-xs ml-2 btn-error">X</batton></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
