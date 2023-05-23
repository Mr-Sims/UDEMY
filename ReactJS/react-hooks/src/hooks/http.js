import { useReducer, useCallback } from "react";
const INITIAL_STATE = { 
    loading: false, 
    error: null, 
    data: null ,
    extra: null,
    identifier: null,
}

const httpReducer = (currHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return { 
                loading: true, 
                error: null, 
                data: null, 
                extra: null,
                identifier: action.identifier
            };
        case 'RESPONSE':
            return { 
                ...currHttpState, 
                loading: false, 
                data: action.responseData, 
                extra: action.extra };
        case 'ERROR':
            return { loading: false, error: action.errorData };
        case 'CLEAR':
            return INITIAL_STATE;
        default:
            throw new Error('Should not have ended here!')
    }
};

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, INITIAL_STATE);

    const clear = useCallback(() => {
        dispatchHttp({type: 'CLEAR'})
    }, []);

    const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
        dispatchHttp({ type: 'SEND', identifier: reqIdentifier });
        // we could alos directly return the Promise and then handling it in the component file where we use this function like this:
        // return fetch('http...') and then in the other file we write sendRequest().then...then... and handling the response data as we like
        fetch(url, {
            method: method,
            body: body,
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                return response.json();
            })
            .then(resData => {
                dispatchHttp({ type: 'RESPONSE', responseData: resData, extra: reqExtra });
            })
            .catch(err => {
                dispatchHttp({ type: 'ERROR', errorData: 'Something went wrong' })
            });
    }, [])

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        reqExtra: httpState.extra,
        reqIdentifier: httpState.identifier,
        clear: clear,
    }

}

export default useHttp;