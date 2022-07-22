import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const ProtectedRoutes = ({ children }) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  if (!firebase.user) {
    navigate("/");
  }

  return children;
};

export default ProtectedRoutes;
