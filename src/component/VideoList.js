import React from 'react';

import VideoItem from './VideoItem';


const VideoList = ({ videoList, onClick }) => {

    const renderVideoItem = videoList.map(video => {
        return <VideoItem video={video} onClick={onClick} />;
    });

    return (
        <div className="ui realxed divided list">
            <p>Videos localizados: {videoList.length}</p>
            {renderVideoItem}
        </div>
    );
}

export default VideoList;