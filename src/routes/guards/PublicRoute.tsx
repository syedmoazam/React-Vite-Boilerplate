import useStartupContainer from "@containers/useStartupContainer";
import {Navigate, Outlet} from "react-router-dom";
import ROUTES from "@constants/routes";

const PublicRoute = () => {
  const {isAuth} = useStartupContainer();

  return !isAuth ? <Outlet/> : <Navigate to={ROUTES.HOME} replace/>;
}
export default PublicRoute;