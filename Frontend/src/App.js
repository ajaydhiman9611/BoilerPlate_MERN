import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse : ""
    }
  }

  callAPI(){
    fetch("http://localhost:9000/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            apiResponse: result
          });
        }
      )
  }

  componentWillMount() {
    this.callAPI();
  }


  render(){
    console.log(`Got you man : ${this.state.apiResponse}`);
    return (
      <div className="App">
        Hi Users: 
        <p>
          {this.state.apiResponse?.map(i=>
            "Name :"+i.name +"    Email: "+ i.email
          )}
        </p>
      </div>
    );
  }  
}

export default App;
