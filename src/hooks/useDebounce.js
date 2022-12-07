import React, { useEffect, useState } from 'react'

/*검색 성능을 높이기 위한 함수 : 
검색어가 전부 완성되고 나서 딜레이시간이 생기면 그때부터 서치가 실행되도록...*/
export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }

    },[value, delay]);

    return debounceValue;
}