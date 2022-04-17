import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Container, WrapperItem } from "./style";


export function AuthLayout() {
    return (
        <Container>
            <WrapperItem>
                <Outlet />
            </WrapperItem>
        </Container>
    );
}




export function AuthLayoutWithUser({ children }) {


    const { user } = useSelector((state) => state.userDetailes);
    if (!user) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <Container>
            <WrapperItem>
                {children}
            </WrapperItem>
        </Container>
    );
}