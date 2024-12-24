
import { useState } from 'react';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <div className="min-h-screen max-w-screen bg-fuchsia-950 flex flex-col items-center justify-center">
      <div className=" p-10 rounded-lg bg-fuchsia-800 shadow-xl w-full max-w-md">
        {/* Form content will go here */}

        <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block  text-white text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Email"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Password"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </div>
    </form>


      </div>
    </div>
  );
}

export default LoginPage;