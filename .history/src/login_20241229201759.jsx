import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [storedUser, setStoredUser] = useState(null);
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password) {
      toast.error('All fields are required');
      return;
    }
    if (!isLogin) {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      setStoredUser({ email, password });
      toast.success('Signup successful!');
      setTimeout(() => setIsLogin(true), 1500);
    } else {
      if (storedUser && email === storedUser.email && password === storedUser.password) {
        toast.success('Login successful!');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        toast.error('Your email or password is incorrect. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-800 to-yellow-500">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl">
        <div className="w-1/2 bg-purple-800 flex items-center justify-center">
          <img src="src/assets/login-icon (1).png" className='w-auto rounded-md' alt="Login Icon" />
        </div>
        <div className="w-1/2 bg-fuchsia-900 p-8">
          <h2 className="text-2xl font-bold text-center text-white">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-white">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword" onClick={<h6></h6>}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-orange-400 text-white p-2 rounded-md hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p className="text-center text-sm text-gray-300 mt-4">
            {isLogin ? 'New here?' : 'Already have an account?'}
            <button
              type="button"
              onClick={toggleForm}
              className="ml-1 text-teal-300 hover:underline"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignupLogin;
