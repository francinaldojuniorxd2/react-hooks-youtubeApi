import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './component/SearchBar';
import youtube from './apis/youtube';
import ViedoList from './component/VideoList'



class App extends React.Component {

    state = { 
        listVideos:[]
    }

    onSubmitForm = async ({videos}) => {
       const response = await youtube.get('/search',{
            params:{
                q: videos
            }
        })
        console.log(response);
       
    };
    
    
    render() {

        this.setState({listVideos: [
            {key:"lkjkljldfj",text: "kajdfhakjsdlfç"},
            {key:"lkjkljldfj",text: "kajdfhakjsdlfç"},
            {key:"lkjkljldfj",text: "kajdfhakjsdlfç"}
        ]})
        
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>

                {/*
                
                    Aqui eu passei uma prop chamada *onSubmit*, o valor recebido
                    por ela é uma função de retorno que recebera o retorno 
                    dos valores contidos no comonente formúlário.

                */}

                <SearchBar onSubmit={this.onSubmitForm} />

                <ViedoList videoList={this.state.listVideos}/>

            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('#root'))
