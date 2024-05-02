import {createBrowserRouter} from "react-router-dom";
import LoginView from "@views/LoginView";
import PublicRoute from "./guards/PublicRoute";
import ROUTES from "@constants/routes";
import RegisterView from "@views/RegisterView";
import NotFound from "@views/NotFound";
import PrivateRoute from "./guards/PrivateRoute";
import Roles from "./guards/Roles";
import {ROLES} from "@constants/enums";

const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginView />
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterView />
      }
    ]
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTES.HOME,
        element: <p>Home Page</p>
      },
      {
        element: <Roles allowedRoles={[ROLES.USER]} />,
        children: [
          {
            path: ROUTES.USER,
            element: <p>User Page</p>
          }
        ]
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])
export default router;