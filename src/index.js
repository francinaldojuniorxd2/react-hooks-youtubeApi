import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './component/SearchBar';
import ViedoList from './component/VideoList';
import VideoDetail from './component/VideoDetail';

import useVideos from './hooks/useVideos';


const App = () => {

    const [videoSelect, setVideoSelect] = useState([]);
    
    const [videos, search ] = useVideos('João neto e Cristiano');

    useEffect(()=>{
        setVideoSelect(videos[0]);
    },[videos]);

    return (
        <div key="div1" className="ui container" style={{ marginTop: '30px' }}>
            <SearchBar onSubmit={search} />
            <div  key="div2" className="ui grid">
                <div key="div3" className="ui row">
                    <div key="div4" className="eleven wide column">
                        <VideoDetail video={videoSelect}/>
                    </div>
                    <div key="div5" className="five wide column">
                        <ViedoList videoList={videos} onClick={(video) => setVideoSelect(video)}/>
                    </div>
                </div>
            </div>      
        </div>
    );
};


ReactDom.render(<App />, document.querySelector('#root'))
