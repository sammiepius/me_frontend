import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';
import password_icon from '../../assets/password.png';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [form, setForm] = useState({
    names: '',
    // username: '',
    email: '',
    password: '',
    comfirm_password: '',
  });
  const [message, setMessage] = useState('');
  // const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  // const handleInput = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setForm(form);
  //   navigate('/login');

  //   console.log(form);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.comfirm_password !== form.password) {
      setMessage('❌ Passwords do not match');
      return;
    }
    // Demo only: in real case send to backend
    setMessage(`✅ Registered: ${form.names} (${form.email})`);
    console.log('Form data:', form);

    // reset
    setForm({ names: '', email: '', password: '', comfirm_password: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center  sm:px-6 lg:px-8">
      {' '}
      <FaArrowLeft
        style={{
          color: 'black',
          marginTop: '10px',
          width: '100px',
          cursor: 'pointer',
        }}
        onClick={() => navigate(-1)}
      />
      {console.log(form)}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-15 w-auto" src={logo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-6 text-gray-500 ">
          Or
          <a
            href="#"
            onClick={() => navigate('/login')}
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            login to your account
          </a>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} action="#">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-5  text-gray-700">
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  // id="name"
                  name="names"
                  placeholder="John Doe"
                  value={form.names}
                  type="text"
                  onChange={handleInput}
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            {/* <div className="mt-6">
              <label
                for="username"
                className="block text-sm font-medium leading-5 text-gray-700">
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  iworkedon.com/
                </span>
                <input
                  // id="username"
                  name="username"
                  placeholder="john"
                  type="text"
                  required=""
                  onChange={handleInput}
                  className="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div> */}

            <div className="mt-6">
              <label
                for="email"
                className="block text-sm font-medium leading-5 text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  // id="email"
                  name="email"
                  placeholder="user@example.com"
                  value={form.email}
                  type="email"
                  onChange={handleInput}
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {/* <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div> */}
              </div>
            </div>

            <div className="mt-6">
              <label
                for="password"
                className="block text-sm font-medium leading-5 text-gray-700">
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  // id="password"
                  name="password"
                  type="password"
                  onChange={handleInput}
                  value={form.password}
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                for="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  // id="password_confirmation"
                  name="comfirm_password"
                  type="password"
                  onChange={handleInput}
                  value={form.comfirm_password}
                  required=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              {/* {confirmPasswordError && (
                <p style={{ color: 'red' }}>{confirmPasswordError}</p>
              )} */}
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Create account
                </button>
                {/* {JSON.stringify(form)} */}
              </span>
            </div>
          </form>
          {message && <p className="mt-3 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
}
