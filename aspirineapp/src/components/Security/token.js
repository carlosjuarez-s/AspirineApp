import { useState } from 'react';

export default function(){
    const getToken = () => {
        const sessionToken = sessionStorage.getItem("token");
        const userToken = JSON.parse(sessionToken);
        return userToken;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        sessionStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken.token);
    }

    return {
        setToken: saveToken,
        token
    }
}