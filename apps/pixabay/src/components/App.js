import React, {Component} from 'react';
import Search from './Search';
import Result from './Result';

class App extends Component {

  state = {
    term : '',
    images : [],
    page : '', 
    loading: false
  }

  searchImage = (term) => {
    this.setState({
      term : term,
      page : 1

    }, () => {
      this.requestAPI();
    })
  }

  requestAPI = async () => {
    const searchTerm = this.state.term;
    const page = this.state.page;

    const url = `https://pixabay.com/api/?key=12508540-33dee34aa3153c5cdfca76518&q=${searchTerm}&image_type=photo&pretty=true&per_page=30&page=${page}`;

    console.log(url);

    await fetch(url)
      .then(response => response.json())
      .then(result => this.setState({
        images : result.hits
      }))
  }

  previousPage = () => {
    let page = this.state.page;
    if(page===1) return null;
    page -=1;
    this.setState({
      page
    }, () =>{
      this.requestAPI();
      this.scrollIntoResult();
    })
  }

  nextPage = () => {
    let page = this.state.page;
    page +=1;
    this.setState({
      page
    }, () => {
      this.requestAPI();
      this.scrollIntoResult();
    })
  }

  scrollIntoResult = () => {
    const element = document.querySelector('#result');
    element.scrollIntoView('smooth', 'start');
  }

  render() {
    return (
      <div className='app container'>
        <div className='jumbotron'>
          <p className='lead text-center'>Image Search</p>
          <Search 
            searchImage = {this.searchImage}
          />
        </div>
        <div className='row justify-content-center'>
          <Result 
            images = {this.state.images}
            previousPage = {this.previousPage}
            nextPage = {this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
