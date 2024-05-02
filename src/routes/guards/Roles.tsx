import {ROLES} from "@constants/enums";
import useStartupContainer from "@containers/useStartupContainer";
import {Navigate, Outlet} from "react-router-dom";
import ROUTES from "@constants/routes";

export const Roles = ({ allowedRoles }: { allowedRoles: ROLES[] }) => {
  const { user } = useStartupContainer();
  return user && allowedRoles.includes(user.role) ? <Outlet /> : <Navigate to={ROUTES.UNAUTHORIZED} replace />;
}
export default Roles;