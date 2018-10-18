import API from 'modules/api/sign';

export function postAuth(data: any, endpoint: string) {
    const { email, password } = data;
    const PostKey = endpoint === 'sign_up' ? "user" : "auth";
    const body = JSON.stringify({
        [PostKey]: {
            email,
            password,
        }
    })
    API.post(body, endpoint);
    return (dispatch: any) => {
    };
};
