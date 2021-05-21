import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './component/SearchBar';
import youtube from './apis/youtube';
import ViedoList from './component/VideoList';
import VideoDetail from './component/VideoDetail';



class App extends React.Component {

    componentDidMount(){
        this.onSubmitForm({videos :'Só sertanejo'});
    };

    state = { listVideos:[],videoSelect:null}

    onSubmitForm = async ({videos}) => {
       const term = await youtube.get('/search',{
            params:{
                q: videos
            }
        })

        this.setState({
           listVideos:term?.data?.items,
           videoSelect:term?.data?.items[0]
        })
    };

    onClick = (video) =>{
       this.setState({
           videoSelect: video
       })
    }
    
    
    render() {

        return (
            <div key="div1" className="ui container" style={{ marginTop: '30px' }}>
                <SearchBar onSubmit={this.onSubmitForm} />
                <div  key="div2" className="ui grid">
                    <div key="div3" className="ui row">
                        <div key="div4" className="eleven wide column">
                            <VideoDetail video={this.state.videoSelect}/>
                        </div>
                        <div key="div5" className="five wide column">
                            <ViedoList videoList={this.state.listVideos} onClick={this.onClick}/>
                        </div>
                    </div>
                </div>      
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('#root'))
