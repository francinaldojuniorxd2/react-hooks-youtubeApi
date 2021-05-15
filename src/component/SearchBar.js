import React from 'react';
import Input from './input'

class SearchBar extends React.Component {

    state = {}  

    onSubmitForm = event => {

        event.preventDefault();
        let obj;

        /*
            A interface FormData fornece uma maneira fácil de construir um 
            conjunto de pares chave/valor representando campos de um elemento 
            form e seus valores, os quais podem ser facilmente enviados utilizado 
            o método send() do XMLHttpRequest. Essa interface utiliza o mesmo formato 
            que um form utilizaria se o tipo de codificação estivesse configurado como 
            "multipart/form-data".
        */

        const formData = new FormData(document.forms.myform);
       

        /*
            O método FormData.entries() retorna um iterator permitindo percorrer todos os 
            valores de chave/valor contidos nesse objeto. A chave de cada par é um objeto 
            USVString (en-US); o valor é USVString (en-US), ou um Blob.
            // Criação de um objeto teste de FormData

            var formData = new FormData();
            formData.append('key1', 'value1');
            formData.append('key2', 'value2');

            // Exibição dos valores chave/valor
            for(var pair of formData.entries()) {
                console.log(pair[0]+ ', '+ pair[1]);
            }
}
        */
        
        for(var pair of formData.entries()) {
            obj = {[pair[0]] : pair[1]};
        }
    
        /*
            Aqui estou acessando as propriedades passadas 
            do componente pai para o filho, estou utilizando a
            prop *onSubmit* passando os valores contidos no 
            estado do formúlário para a função de calback que
            está amazenada no *onSumit*.
        */
        this.props.onSubmit(obj);
    }



    onChangeInput = event => {
        let name = event.target.name
        let value = event.target.value
        this.setState({[name]: value})
    }
    
    render() {
        return (
                <div className="search-bar ui segment">
                    <form onSubmit={this.onSubmitForm} className="ui form" id='myform'>  
                        <Input/>
                    </form>
                </div>
        );
    }
}

export default SearchBar;