import React, { useState } from 'react';

export default function Setting() {
  const [activeTab, setActiveTab] = useState('profile');
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className="min-h-screen bg-slate-800 text-gray-200 flex justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'profile'
                ? 'border-b-2 border-blue-500 text-blue-400'
                : 'text-gray-400 hover:text-gray-200'
            }`}>
            Profile Info
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'security'
                ? 'border-b-2 border-blue-500 text-blue-400'
                : 'text-gray-400 hover:text-gray-200'
            }`}>
            Security
          </button>
        </div>

        {/* Profile Info Tab */}
        {activeTab === 'profile' && (
          <div className="dark:bg-gray-700 rounded-2xl shadow-md p-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Personal Information</h2>
              <p className="text-sm text-gray-400 mb-4">
                Use a permanent address where you can receive mail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <img
                src={avatar || 'https://via.placeholder.com/100'}
                alt="avatar"
                className="w-24 h-24 rounded-full object-cover border border-gray-700 mx-auto sm:mx-0"
              />
              <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm text-center w-full sm:w-auto">
                Change Avatar
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email address"
                className="sm:col-span-2 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Username"
                className="sm:col-span-2 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="status"
                className="sm:col-span-2 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="dark:bg-gray-700 rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold">Change Password</h2>
            <p className="text-sm text-gray-400 mb-4">
              Update your password associated with your account.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="password"
                placeholder="Current password"
                className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="New password"
                className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Update Password
              </button>
            </div>{' '}
            <hr />
            <div className="m-15"></div>
            <button className="w-full sm:w-auto bg-red-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
    // <div className="flex min-h-screen bg-gray-100 p-6">
    //   {/* Sidebar */}
    //   <div className="w-64 bg-white shadow rounded-2xl p-4">
    //     <nav className="flex flex-col space-y-2">
    //       <button className="text-left px-4 py-2 rounded-xl hover:bg-gray-100">
    //         Dashboard
    //       </button>
    //       <button className="text-left px-4 py-2 rounded-xl bg-blue-500 text-white">
    //         Profile
    //       </button>
    //       {/* <button className="text-left px-4 py-2 rounded-xl hover:bg-gray-100">
    //         Preferences
    //       </button> */}
    //       <button className="text-left px-4 py-2 rounded-xl hover:bg-gray-100">
    //         Log out
    //       </button>
    //     </nav>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex-1 ml-6 bg-white shadow rounded-2xl p-8">
    //     <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

    //     {/* Avatar */}
    //     <div className="flex flex-col items-center mb-6">
    //       <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center">
    //         <span className="text-3xl text-blue-800 font-bold">JD</span>
    //       </div>
    //       <button className="mt-2 text-sm text-blue-500 hover:underline">
    //         Change photo
    //       </button>
    //     </div>

    //     {/* Form */}

    //     <form className="space-y-5 max-w-2xl">
    //       <div className="grid gap-6 mb-6 md:grid-cols-2">
    //         <div>
    //           <label className="block text-sm font-medium mb-1">
    //             First name
    //           </label>
    //           <input
    //             type="firstname"
    //             // defaultValue="name"
    //             className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
    //           />
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium mb-1">
    //             Last name
    //           </label>
    //           <input
    //             type="lastname"
    //             // defaultValue="seconname"
    //             className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <label className="block text-sm font-medium mb-1">Email</label>
    //         <input
    //           type="email"
    //           defaultValue="johndoe@example.com"
    //           className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium mb-1">Username</label>
    //         <input
    //           type="username"
    //           defaultValue="johndoe"
    //           className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //         Save
    //       </button>

    //       <hr />

    //       <div>
    //         <label className="block text-sm font-medium mb-1">
    //           Change Password
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="New password"
    //           className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
    //         />
    //       </div>

    //       <div>
    //         <label className="block text-sm font-medium mb-1">
    //           Confirm New Password
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Confirm new password"
    //           className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
    //         />
    //       </div>

    //       {/* <button
    //         type="submit"
    //         className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
    //         Save
    //       </button> */}
    //       <button
    //         type="submit"
    //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //         Save
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
