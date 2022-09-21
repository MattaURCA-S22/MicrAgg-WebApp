import React, { createContext, useCallback, useContext, useState } from 'react';

const ResponseContext = createContext();

export function useResponse() {
    return useContext(ResponseContext);
}

export function ResponseProvider ({children}) {
    const [response, setResponse] = useState({});

    function initializeResponseContext() {
        const userData = {
            consent: 'false',
            sTimes: [],
            iTimes: [],
            sLinesCorrect: [],
            iLinesCorrect: [],
            sCorrect: 0,
            sIncorrect: 0,
            iCorrect: 0,
            iIncorrect: 0
        }
        setResponse(userData);
    }

    function checkForValidContext() {
        if (response.consent != undefined && response.consent == true) {
            return true;
        } else {
            return false;
        }
    }

    function setNewContext(data) {
        setResponse(data);
    }

    const value = {
        response,
        initializeResponseContext,
        checkForValidContext,
        setNewContext
    }

    return (
        <ResponseContext.Provider value={value}>
            {children}
        </ResponseContext.Provider>
    )
}