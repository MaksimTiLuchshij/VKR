import Admin from "./pages/Admin";
import {
    ACHIEVEMENT_ROUTE,
    ADMIN_ROUTE, ARTICLE_ROUTE, EXHIBITION_ROUTE, GRANT_ROUTE,
    LOGIN_ROUTE, PATENT_ROUTE,
    REGISTRATION_ROUTE,
    SCIENCE_ROUTE,
} from "./utils/consts";

import Achievement from "./pages/Achievement";
import Article from "./pages/Article";
import Exhibition from "./pages/Exhibition";
import Patent from "./pages/Patent";
import Grant from "./pages/Grant";
import Auth from "./pages/Auth";
import Science from "./pages/Science";
import ArticleMain from "./pages/ArticleMain";
import ExhibitionMain from "./pages/ExhibitionMain";
import PatentMain from "./pages/PatentMain";
import GrantMain from "./pages/GrantMain";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SCIENCE_ROUTE,
        Component: Science
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ACHIEVEMENT_ROUTE + '/:id',
        Component: Achievement
    },
    {
        path: ARTICLE_ROUTE,
        Component: ArticleMain
    },
    {
        path: ARTICLE_ROUTE + '/:id',
        Component: Article
    }
    ,
    {
        path: EXHIBITION_ROUTE,
        Component: ExhibitionMain
    },
    {
        path: EXHIBITION_ROUTE + '/:id',
        Component: Exhibition
    },
    {
        path: PATENT_ROUTE,
        Component: PatentMain
    },
    {
        path: PATENT_ROUTE + '/:id',
        Component: Patent
    },
    {
        path: GRANT_ROUTE,
        Component: GrantMain
    },
    {
        path: GRANT_ROUTE + '/:id',
        Component: Grant
    }

]
