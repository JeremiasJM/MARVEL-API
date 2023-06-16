import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    useEffect(()=> {
        setLoading(true);
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> setData(data.data.results))
        .catch((error)=>setError(error))
        .finally (()=>setLoading(false));
    },[]);
    return {data, loading, error};
}
export function useFetchID(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    useEffect(()=> {
        setLoading(true);
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> setData(data.data.results[0]))
        .catch((error)=>setError(error))
        .finally (()=>setLoading(false));
    },[]);
    return {data, loading, error};
}