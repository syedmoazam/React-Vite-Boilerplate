import {Navigate, Outlet} from "react-router-dom";
import useStartupContainer from "@containers/useStartupContainer";
import ROUTES from "@constants/routes";

const PrivateRoute = () => {
  const { isAuth } = useStartupContainer();
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace/>;
}
export default PrivateRoute;