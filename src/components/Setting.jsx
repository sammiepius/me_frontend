import React, { useState, useEffect } from 'react';

export default function Setting() {
  const [activeTab, setActiveTab] = useState('profile');
  const [avatar, setAvatar] = useState(null);

  // Toast state
  const [toast, setToast] = useState(null);

  // Loading state for buttons
  const [loading, setLoading] = useState(false);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const simulateSave = (callback) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      callback();
    }, 2000); // simulate 2s processing
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    simulateSave(() =>
      setToast({
        type: 'success',
        message: '✅ Profile changes saved successfully!',
      })
    );
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    simulateSave(() =>
      setToast({
        type: 'success',
        message: '🔑 Password updated successfully!',
      })
    );
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 text-gray-200 flex justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Toast Notification */}
        {toast && (
          <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg text-white text-sm transition-all duration-300
              ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
            {toast.message}
          </div>
        )}
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
          <form
            onSubmit={handleSaveProfile}
            className="dark:bg-gray-700 rounded-2xl shadow-md p-6 space-y-6">
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

            {/* Save Button with Spinner */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center justify-center">
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <form
            onSubmit={handleUpdatePassword}
            className="dark:bg-gray-700 rounded-2xl shadow-md p-6">
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
              {/* Update Password Button with Spinner */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    'Update Password'
                  )}
                </button>
              </div>
            </div>{' '}
            <hr />
            <div className="m-15"></div>
            <button className="w-full sm:w-auto bg-red-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Logout
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
