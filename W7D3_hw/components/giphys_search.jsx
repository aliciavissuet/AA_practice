import React from 'react';
import GiphysIndex from './giphys_index';

class GiphySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (e) {
        console.log(e.keyCode,e)
        if (e.keyCode === 13){
            this.handleClick();
        } else {
        this.setState({searchTerm: e.target.value})
        }
    }

    handleClick() {
        this.props.fetchSearchGiphys(this.state.searchTerm)
        this.setState({ searchTerm: '' })
    }

    
    render(){
        return(
            <div>
                <input value={this.state.searchTerm} type="text" onChange={(e) => this.handleChange(e)}/>
                <button onClick={this.handleClick}>Search!</button>
                <GiphysIndex giphys={this.props.giphys}/>
            </div>
        )
    }
}
export default GiphySearch;
