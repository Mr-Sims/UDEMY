import { useState, useCallback } from "react";

const useHTTP = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (request, manageData) => {
        setIsLoading(true);
        setError(null);

        try {
            console.log(request)
            const response = await fetch(request.url, {
                method: request.method ? request.method : 'GET',
                headers: request.headers ? request.headers : {},
                body: request.body ? JSON.stringify(request.body) : null,
            });
            console.log(response)

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            console.log(data)

            manageData(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
};

export default useHTTP;