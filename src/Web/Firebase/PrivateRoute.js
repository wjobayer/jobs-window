import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import useAuth from './useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;