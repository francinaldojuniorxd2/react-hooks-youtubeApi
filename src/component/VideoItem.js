import React from 'react';

const VideoItem = ({ video, onClick }) => {
    return (
        <div className="item" key={video.id} onClick={()=> onClick(video)}>
            <img className="ui image" src={video?.snippet?.thumbnails?.default?.url} alt={video?.snippet?.title} />
            <div className="content">
                <p>{video?.snippet?.title}</p>
            </div>
        </div>
    );

};

export default VideoItem;