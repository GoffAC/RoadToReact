import React, {Component} from 'react';
import './App.css';

const orList = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'something',
    url: 'https://reactjs.org/',
    author: 'Jofdsrdan asa',
    num_comments: 2,
    points: 1,
    objectID: 1,
  }
];

const isSearched = (keyWord) => (item) => item.title.toLowerCase().includes(keyWord.toLowerCase())
 
 class App extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      list:  orList,
      searchTerm: ''};
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id){
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  onSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})

  }

  render(){
    const {searchTerm, list} = this.state;
    return (
      <div className="App">
        <Search keyWord={searchTerm} onChange={this.onSearchChange} />
        <Table  list={list} keyWord={searchTerm} onDismiss={this.onDismiss}/>
      </div>
    );
  }
}



const Search = ({value, onChange}) =>
  <form>
    <input type="type" value={value} onChange={onChange} />
  </form>;


const Table = ({list, keyWord, onDismiss}) => 
  <div className='Table'>
    { list.filter(isSearched(keyWord)).map(item =>
      <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title} </a>
      </span>
      <span>{item.author} </span>
      <span>{item.num_comments} </span>
      <span>{item.points} </span>
      <span>
      <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
      </span> 
      </div>
    )}
  </div>;


const Button = ({onClick, children}) => 
  <button onClick={onClick} type='button'>{children}</button>;


export default App;