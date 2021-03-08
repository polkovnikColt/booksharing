import React from 'react';
import {Navigationbar} from "./components/navbar/Navigationbar";
import {Sidebar} from "./components/sidebar/Sidebar";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Col, Row} from "antd";
import {MainPage} from "./components/main/MainPage";

const App: React.FC = () => {
    return (
        <HashRouter>
            <Navigationbar/>
            <Row>
                {/*<Col span = {8}>*/}
                {/*<Sidebar/>*/}
                {/*</Col>*/}
                {/*<Col span = {16}>*/}
                <Switch>
                    <Route path="/" component={MainPage} exact={true}/>
                    <Route path="/news" component={null}/>
                </Switch>
                {/*</Col>*/}
            </Row>
        </HashRouter>

    );
}

export default App;
