import { useEffect, useState } from "react";

function useData() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return [data, setData]
}
export default useData;