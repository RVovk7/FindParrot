const url = 'http://ski-rent-api.herokuapp.com/api';

function handleErrors(response: any) {
    if (!response.ok) throw Error(response.statusText);
    return response;
};

class Api {
    post(body: any, endpoint: string) {
        return fetch(`${url}/${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body,
        })
            .then(handleErrors)
            .then(res => res.json())
            .catch(error => console.error('er', error));
    };
}

const API = new Api();
export default API;