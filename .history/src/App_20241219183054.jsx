import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen max-w-screen bg-fuchsia-950 shadow-xl shadow-neutral-900 flex flex-row items-center justify-center">
      <img className='max-w-screen ' src="https://img.freepik.com/premium-vector/mountains-landscape-design_24911-25891.jpg" alt="" />
        
      <div className="p-10 rounded-lg bg-fuchsia-800 shadow-xl shadow-neutral-900 w-full max-w-md">
      <img
          src="https://img.freepik.com/premium-vector/mountains-landscape-design_24911-25891.jpg"
          className="w-96 rounded-lg max-w-full h-80"
          alt="Beautiful landscape of mountains"
        />
        <h2 className="text-white font-bold text-3xl mb-10">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
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
              className="bg-fuchsia-950 w-full hover:shadow-neutral-900 shadow-2xl hover:bg-fuchsia-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
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
