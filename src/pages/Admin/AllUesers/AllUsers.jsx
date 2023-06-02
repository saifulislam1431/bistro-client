import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`
      }
    })
    return res.json();
  })

  const handleMakeAdmin = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Want to appoint as an admin?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user._id}`, { method: "PATCH" })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount) {
              refetch()
              Swal.fire(
                'Admin!',
                `${user.name} is an admin`,
                'success'
              )
            }
          })

      }
    })
  }
  return (
    <section>
      <div className='my-5'>
        <SectionComponent
          subHeading="How many??"
          heading="MANAGE ALL USERS"
        ></SectionComponent>
      </div>
      <div className='my-5 w-full'>
        <h1 className='text-xl brandTitle font-bold my-4'>Total Users: {users.length}</h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => <tr>
                  <td>
                    <p>{index + 1}</p>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.photo} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>

                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{user.email}</p>
                  </td>
                  <td>
                    {
                      user.role === "admin" ? <p className='font-medium border-2 rounded-md border-green-500 text-green-600 px-2'>Admin</p> : <button className='text-white px-2 py-2 rounded-md text-center bg-[#D1A054]' onClick={() => handleMakeAdmin(user)}>
                        <FaUserAlt />
                      </button>

                    }
                  </td>
                  <td>
                    <button className='text-white px-2 py-2 rounded-md text-center bg-red-600'>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;