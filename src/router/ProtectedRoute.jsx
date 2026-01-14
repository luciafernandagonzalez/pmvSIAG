import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useUser();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.tipoId)) {
        // return <Navigate to={user.tipoId === 1 ? "/admin/application" : "/user/home"} replace />;
        return <Navigate to="/home" replace />;
    }

    return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.number),
};


