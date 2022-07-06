import CreateAd from "../containers/CreateAd";
import Login from "../containers/Login/Login";
import Organizations from "../containers/Organizations";
import OrganizationPage from "../containers/OrganizationPage";
import {
    LOGIN_ROUTE, CREATE_AD_ROUTE,
    ORGANIZATIONS_ROUTE, ORGANIZATION_ROUTE,
} from "../lib/consts";

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