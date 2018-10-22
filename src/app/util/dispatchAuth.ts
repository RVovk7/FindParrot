const dispatchAuth = (res: any, dispatch: any, type: any) => {
    dispatch({
        type, payload: {
            res
        }
    });
}
export default dispatchAuth;