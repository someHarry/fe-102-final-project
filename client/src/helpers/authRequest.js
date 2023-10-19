export default class AuthRequest {
    // eslint-disable-next-line consistent-return
    static async login(email, password) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                "loginOrEmail": email,
                "password": password
            }),
            redirect: 'follow'
        }

        return fetch("http://localhost:4000/api/customers/login", requestOptions)
            .then((res) => res.json())
            .then((result) => result)
    }

    static async register(firstName, lastName, login, email, password) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "login": login,
                "email": email,
                "password": password
            }),
            redirect: 'follow'
        }

        fetch("http://localhost:4000/api/customers", requestOptions)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                return result
            })
    }
}