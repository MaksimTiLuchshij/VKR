import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import AchievementStore from "./store/AchievementStore";
import ArticleStore from "./store/ArticleStore";
import ExhibitionStore from "./store/ExhibitionStore";
import PatentStore from "./store/PatentStore";
import GrantStore from "./store/GrantStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value ={{
        user: new UserStore(),
        achievement: new AchievementStore(),
        article: new ArticleStore(),
        exhibition: new ExhibitionStore(),
        patent: new PatentStore(),
        grant: new GrantStore()
    }}>
      <App/>
    </Context.Provider>,
    document.getElementById('root')
)
