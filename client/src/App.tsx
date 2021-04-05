import React from 'react';
import {Navigationbar} from "./components/navbar/Navigationbar";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Row} from "antd";
import {RootState, store} from "./store/store";
import {Provider, useSelector} from 'react-redux';
import {MainPage} from "./components/pages/main/MainPage";
import {BookPage} from "./components/pages/book/BookPage";
import {UserPage} from "./components/pages/user/UserPage";
import {Layout} from "antd";
import {ProtectedRoute} from "./components/additionalComponents/routes/ProtectedRoute";
import {AdminPage} from "./components/pages/admin/AdminPage";
import {RulesPage} from "./components/pages/rules/RulesPage";

const App: React.FC = () => {

    const user = useSelector((store:RootState) => store.user);

    return (
        <HashRouter>
            <Layout>
                <Navigationbar/>
                <Row>
                    <Switch>
                        <Route path="/" component={MainPage} exact={true}/>
                        <Route path="/books" component={BookPage}/>
                        <Route path="/rules" component={RulesPage}/>
                        <ProtectedRoute
                            component={UserPage}
                            path={'/user'}
                            isAuth={!!user.credentials}
                        />
                        <ProtectedRoute
                            component={AdminPage}
                            path={'/admin'}
                            isAuth={user.credentials?.role === 'admin'}
                            />
                    </Switch>
                </Row>
            </Layout>
        </HashRouter>

    );
}

export default App;
