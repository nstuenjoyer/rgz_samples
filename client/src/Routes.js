import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import DocxSamples from "./pages/DocxSamples"
import Home from "./pages/Home"
import Rules from "./pages/Rules"

export const authRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/docxsamples',
        Component: DocxSamples
    },
    {
        path: '/rules',
        Component: Rules
    },
    {
        path: '/registration',
        Component: Auth
    },
    {
        path: '/login',
        Component: Auth
    }
]