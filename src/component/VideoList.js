import React from 'react';
import VideoItem from './VideoItem';


const VideoList  = ({videoList}) => {

    const renderVideoItem = videoList.length;
    

    return (
        <>
         {renderVideoItem}
        </>
    );

}

export default VideoList;