import React from 'react';
import {Navigationbar} from "./components/navbar/Navigationbar";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Row} from "antd";
import {store} from "./store/store";
import {Provider} from 'react-redux';
import {MainPage} from "./components/pages/main/MainPage";
import {BookPage} from "./components/pages/book/BookPage";
import {UserPage} from "./components/pages/user/UserPage";

const App: React.FC = () => {
    return (
        <HashRouter>
            <Provider store = {store}>
            <Navigationbar/>
            <Row>
                <Switch>
                    <Route path="/" component={MainPage} exact={true}/>
                    <Route path="/books" component={BookPage}/>
                    <Route path="/user" component={UserPage}/>
                </Switch>
            </Row>
            </Provider>
        </HashRouter>

    );
}

export default App;
