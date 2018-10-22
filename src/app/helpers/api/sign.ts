import { url } from 'util/forServer';

class Api {
    constructor(public url: string) { }
    post(body: any, endpoint: string) {
        return fetch(`${this.url}/${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body,
        })
            .then(res => res.json())
            .catch(error => console.error('er', error));
    };
};

const API = new Api(url);
export default API;





