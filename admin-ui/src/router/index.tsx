import Home from "@/views/Home"
import { Navigate } from "react-router-dom"
import lazyLoad from "@/common/utils/router/lazyLoad"

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />,
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: lazyLoad("views/Page1")
            },
            {
                path: "/page2",
                element: lazyLoad("views/Page2")
            },
            {
                path: "/user/list",
                element: lazyLoad("views/User"),

            }
        ]
    },
    {
        path: "/login",
        element: lazyLoad("views/Login"),
    },
    {
        path: "*",
        element: lazyLoad("views/errPage/404"),
    }
]
export default routes