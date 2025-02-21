import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, []);
  return (
    <div className="not-found">
      <h1>Error 404</h1>
      <h1>Page Not Found</h1>
    </div>
  );
}
 
export default NotFound;