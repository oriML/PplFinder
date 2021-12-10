import react from 'react'
import { Home, Favorites} from "pages";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/favorites',
        component: Favorites
    }
]

export default routes;