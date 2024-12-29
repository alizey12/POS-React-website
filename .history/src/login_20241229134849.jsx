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
      // Signup Logic
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      setStoredUser({ email, password });  // Store user credentials
      toast.success('Signup successful!');
      setTimeout(() => setIsLogin(true), 1500);  // Switch to login after signup
    } else {
      // Login Logic
      if (storedUser && email === storedUser.email && password === storedUser.password) {
        toast.success('Login successful!');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        toast.error('Your email or password is incorrect. Please try again.');
      }
    }
  };
    

   

  return (
   
    
   
    <div className="flex justify-center h-screen bg-fuchsia-800 content-center">
      <div className="w-full  m-10 max-w-md p-8 space-y-4 bg-fuchsia-600 justify-center content-center rounded-lg shadow-lg">
      <img src="src/assets/login-icon (1).png" className='flex fle' alt="" />
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4  justify-center content-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
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
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          {isLogin ? 'New here?' : 'Already have an account?'}
          <button
            type="button"
            onClick={toggleForm}
            className="ml-1 text-blue-600 hover:underline"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
      <Toaster/>

    </div>
  );
};

export default SignupLogin;
