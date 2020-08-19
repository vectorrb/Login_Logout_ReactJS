export function authHeader() {
    // return authorization header with jwt token
    // used to make authenticated HTTP requests to the server api using JWT
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}