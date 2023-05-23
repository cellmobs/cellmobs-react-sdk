import { useState, useEffect } from "react";
import Cookie from 'js-cookie';

function getSavedValue(key, initialValue) {
    const savedValue = Cookie.get(key)
    if (savedValue) return savedValue

    if(initialValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        Cookie.set(key, value)
    }, [value])

    return [value, setValue]
}