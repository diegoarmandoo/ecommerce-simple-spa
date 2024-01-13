function isAuthenticated() {
    const token = localStorage.getItem('JWTToken');

    if (token) {
        const decodedToken = parseJwt(token);

        if (decodedToken && decodedToken.exp > Date.now() / 1000) {
            return true;
        }
    }

    return false;
}

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
}

export { isAuthenticated, parseJwt }