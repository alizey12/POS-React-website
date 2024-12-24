import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./login"
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
      npm install react-hot-toast        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
