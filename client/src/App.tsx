import React, {useEffect} from 'react';
import {Navigationbar} from "./components/navbar/Navigationbar";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Row} from "antd";
import {RootState, store} from "./store/store";
import {Provider, useDispatch, useSelector} from 'react-redux';
import {MainPage} from "./pages/main/MainPage";
import {BookPage} from "./pages/book/BookPage";
import {UserPage} from "./pages/user/UserPage";
import {Layout} from "antd";
import {ProtectedRoute} from "./components/additionalComponents/routes/ProtectedRoute";
import {AdminPage} from "./pages/admin/AdminPage";
import {RulesPage} from "./pages/rules/RulesPage";
import {RegistrationPage} from "./pages/registration/RegistrationPage";

const App: React.FC = () => {

    const user = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();

     console.log(user);

    return (
        <HashRouter>
            <Layout>
                <Navigationbar/>
                <Row>
                    <Switch>
                        <Route path="/" component={MainPage} exact={true}/>
                        <Route path="/registration" component={RegistrationPage}/>
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
