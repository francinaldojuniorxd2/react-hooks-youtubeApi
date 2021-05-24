import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultValue) => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        search(defaultValue)
    },[defaultValue]);

    const search = async (value) => {
        await youtube.get('/search',{
             params:{
                 q: value
             }
        }).then((sucess)=>{
            setVideos(sucess?.data?.items);
        })
    };
    return [videos, search];
};

export default useVideos;