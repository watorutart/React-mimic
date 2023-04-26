import Home from "../components/pages/Home";
import Page404 from "../components/pages/Page404";
import Search from "../components/pages/Search";
import UserList from "../components/pages/UserList";
import HeaderLayout from "../components/templates/HeaderLayout";

export const homeRoutes = [
    {
        path: "/home",
        children: <HeaderLayout><Home /></HeaderLayout>
    }, 
    {
        path: "/search",
        children: <HeaderLayout><Search /></HeaderLayout>
    }, 
    {
        path: "/userlist",
        children: <HeaderLayout><UserList /></HeaderLayout>
    }, 
    {
        path: "*",
        children: <HeaderLayout><Page404 /></HeaderLayout>
    }
];
