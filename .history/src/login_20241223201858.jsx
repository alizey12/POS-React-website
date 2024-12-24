import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();  // Navigation hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
      navigate('/dashboard');  // Navigate to the dashboard route
    } else {
      alert('Please fill in both fields.');
    }
  };

  function validateForm() {
    // Get the form elements
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Validate name (must not be empty)
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    // Validate email (must not be empty and in proper email format)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

   
    return true;
}

  return (
    <div className="min-h-screen max-w-screen bg-fuchsia-950 shadow-xl shadow-neutral-900 flex flex-row items-center justify-center">
      <div className="p-10 rounded-lg bg-fuchsia-800 shadow-xl shadow-neutral-900 w-full max-w-md">
        <h2 className="text-white font-bold text-3xl mb-10">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              placeholder="Enter Email"
              aria-label="Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              placeholder="Enter Password"
              aria-label="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-fuchsia-950 w-full hover:shadow-neutral-900 shadow-2xl hover:bg-fuchsia-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              aria-label="Sign In"
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
