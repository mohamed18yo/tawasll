import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function RequireAdmin({ children }) {
    const {
        user: { is_admin },
    } = useSelector((state) => state.userDetailes);

    if (!is_admin) {
        return <Navigate to="/auth/login" />;
    }

    return children;
}