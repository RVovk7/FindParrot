const url = 'http://ski-rent-api.herokuapp.com/api/';
function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function postAuth(data: any, endpoint: string) {
    const PostKey = endpoint === 'sign_up' ? "user" : "auth";
    return (dispatch: any) => {
        return fetch(`${url}/${endpoint}`, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                [PostKey]: {
                    "email": data.email,
                    "password": data.password
                }
            }),
            headers: {
                "Content-type": "application/json",
                "Host": "example.org"
            }
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log('postAuth', json)
            })
            .catch(error => console.error('er', error));
    };
}