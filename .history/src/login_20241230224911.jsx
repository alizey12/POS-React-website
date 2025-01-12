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
  const [errors, setErrors] = useState({});
  const [storedUser, setStoredUser] = useState(null);
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Please enter email';
    if (!formData.password) newErrors.password = 'Please enter password';
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { email, password } = formData;

    if (isLogin) {
      if (storedUser && email === storedUser.email && password === storedUser.password) {
        toast.success('Login successful!');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        toast.error('Your email or password is incorrect. Please try again.');
      }
    } else {
      setStoredUser({ email, password });
      toast.success('Signup successful!');
      setTimeout(() => setIsLogin(true), 1500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-purple-800 to-yellow-500">
      <div className=" bg-white w-full shadow-lg rounded-lg">
       
        <div className="w-full bg-fuchsia-900 p-8 justify-center">
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
                className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-white">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
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