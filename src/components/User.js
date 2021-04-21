import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

function User() {

    const {
        state: { isAuth, user },
        dispatch,
    } = useContext(AuthContext);

    return (
        <div>
            user: { " " }
            <div>
                {isAuth && user ? (
                    <span>Email: {user.email}</span>
                ) : (
                    <span> No User </span>
                )}
            </div>
            <br />
            <div>
                {isAuth && user ? (
                    <span onClick={() => dispatch({ type: "LOGOUT" })}>LOGOUT</span>
                ) : (
                    <span>Please Login</span>
                )}
            </div>
        </div>
    );
}

export default User;