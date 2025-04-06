import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';
import password_icon from '../../assets/password.png';
import { useNavigate } from 'react-router-dom';

export default function CreateProfile() {
  const [values, setValues] = useState({
    names: '',
    username: '',
    email: '',
    password: '',
    comfirm_password: '',
  });

  const handleIput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const navigate = useNavigate();

  return (
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center  sm:px-6 lg:px-8">
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
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img class="mx-auto h-15 w-auto" src={logo} alt="Workflow" />
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p class="mt-2 text-center text-sm leading-6 text-gray-500 ">
            Or
            <a
              href="#"
              onClick={() => navigate('/login')}
              class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              login to your account
            </a>
          </p>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-5  text-gray-700">
                  Name
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input
                    // id="name"
                    name="names"
                    placeholder="John Doe"
                    type="text"
                    onChange={handleIput}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="username"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Username
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    iworkedon.com/
                  </span>
                  <input
                    // id="username"
                    name="username"
                    placeholder="john"
                    type="text"
                    required=""
                    onChange={handleIput}
                    class="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Email address
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input
                    // id="email"
                    name="email"
                    placeholder="user@example.com"
                    type="email"
                    onChange={handleIput}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                  {/* <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      class="h-5 w-5 text-red-500"
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

              <div class="mt-6">
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Password
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    // id="password"
                    name="password"
                    type="password"
                    onChange={handleIput}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="password_confirmation"
                  class="block text-sm font-medium leading-5 text-gray-700">
                  Confirm Password
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    // id="password_confirmation"
                    name="comfirm_password"
                    type="password"
                    onChange={handleIput}
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Create account
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
