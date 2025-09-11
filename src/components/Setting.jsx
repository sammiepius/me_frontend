import React from 'react';

export default function Setting() {
  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow rounded-2xl p-4">
        <nav className="flex flex-col space-y-2">
          <button className="text-left px-4 py-2 rounded-xl hover:bg-gray-100">
            Dashboard
          </button>
          <button className="text-left px-4 py-2 rounded-xl bg-blue-500 text-white">
            Profile
          </button>
          <button className="text-left px-4 py-2 rounded-xl hover:bg-gray-100">
            Preferences
          </button>
          <button className="text-left px-4 py-2 rounded-xl hover:bg-gray-100">
            Log out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-6 bg-white shadow rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center">
            <span className="text-3xl text-blue-800 font-bold">JD</span>
          </div>
          <button className="mt-2 text-sm text-blue-500 hover:underline">
            Change photo
          </button>
        </div>

        {/* Form */}

        <form className="space-y-5 max-w-2xl">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                First name
              </label>
              <input
                type="firstname"
                // defaultValue="name"
                className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last name</label>
              <input
                type="lastname"
                // defaultValue="seconname"
                className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              defaultValue="johndoe@example.com"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="username"
              defaultValue="johndoe"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Change Password
            </label>
            <input
              type="password"
              placeholder="New password"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
