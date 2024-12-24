
import React, { useState } from 'react';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        {/* Form content will go here */}




      </div>
    </div>
  );
}

export default LoginPage;