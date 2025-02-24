import { useNavigate } from 'react-router-dom';
import './notFound.css';

function NotFound() {
  const navigate = useNavigate();
  const handleBackToHome = () => navigate('/');

  return (
    <div className="not-found">
      <h1>Error 404</h1>
      <h1>Page Not Found</h1>
      <button onClick={handleBackToHome}>Go Back to Home</button>
    </div>
  );
}

export default NotFound;
