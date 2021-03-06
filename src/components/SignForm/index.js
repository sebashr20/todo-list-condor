import React from 'react';

const SignForm = ({ title, handleSubmit, handleChange, values, errors }) => {
  return (
    <div className="flex h-screen bg-teal-500 justify-center items-center px-4">
      <div className="mx-auto border-white p-6 bg-white rounded shadow-xl">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-4xl text-gray-800">{title}</h1>
          <div className="mb-2">
            <label htmlFor="username" className="text-gray-800">
              Username
              <input
                type="text"
                id="username"
                onChange={handleChange}
                value={values.username}
                className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 appearance-none leading-normal"
              />
            </label>
            <p className="block text-red-500 text-xs italic">
              {errors.username}
            </p>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-gray-800">
              Password
              <input
                type="password"
                id="password"
                onChange={handleChange}
                value={values.password}
                className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 appearance-none leading-normal"
              />
            </label>
            <p className="block text-red-500 text-xs italic">
              {errors.password}
            </p>
          </div>
          <button
            type="submit"
            className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded mt-2"
          >
            {title}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
