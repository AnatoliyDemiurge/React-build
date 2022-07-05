import CreateAd from "./pages/CreateAd";
import Login from "./pages/Login";
import Organizations from "./pages/Organizations";
import OrganizationPage from "./pages/OrganizationPage";
import {
    LOGIN_ROUTE, CREATE_AD_ROUTE,
    ORGANIZATIONS_ROUTE, ORGANIZATION_ROUTE,
} from "./utils/consts";

export const authRoutes = [
    {
        path: CREATE_AD_ROUTE,
        Component: CreateAd
    },
    {
        path: ORGANIZATIONS_ROUTE,
        Component: Organizations
    },
    {
        path: ORGANIZATION_ROUTE + '/:id',
        Component: OrganizationPage
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]