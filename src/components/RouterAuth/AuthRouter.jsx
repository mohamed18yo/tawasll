import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function RequireAuth({ children }) {
    const { user } = useSelector((state) => state.userDetailes);
    
    if (!user.token) {
        return <Navigate to="/auth/login" />;
    }

    return children;
}
