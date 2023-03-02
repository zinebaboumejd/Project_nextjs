import React from "react";

// login page 
export default function(){

    return(
        <>
            <h1>Login</h1>
            <form action="/api/login" method="post">
                <label>
                    EMail Address
                </label>
                <input type='email' name='email' placeholder='Type your email'></input>
                <label>
                    Pasword
                </label>
                <input type='password' name='password' placeholder='Type your password'></input>
                <input type='submit' value='Login'></input>

            </form>
        </>
    )
}

