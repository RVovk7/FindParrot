 const genereteBody = (data: any, endpoint: string) => {
    const { email, password } = data;
    const PostKey = endpoint === 'sign_up' ? "user" : "auth";
    const body = JSON.stringify({
        [PostKey]: {
            email,
            password,
        }
    })

    return body;
}
export default genereteBody;