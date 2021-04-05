import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {MessageAlert} from "../alert/AlertMessage";

type ProtectedRouteProps = {
    component: React.FC,
    path: string,
    isAuth: boolean
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
 component,
 path,
 isAuth,
 ...props
    }) => {
        return isAuth ?
            <Route path={path} component={component} {...props}/>
            : <>
                <MessageAlert type={"error"} message={"You aren't log yet"}/>
            <Redirect to="/"/>
            </>
    }