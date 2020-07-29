import React from 'react';
import ReactDOM, { render } from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App =() =>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position), //success callback
//         (err) => console.log(err)
//     );
//     return(
//         <div>Hi there</div>
//     );
// };

class App extends React.Component{
    state ={ lat: null, errorMessage: ''};
    // constructor(props){
    //     super(props);

    //     //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
    //     this.state = {lat : null, errorMessage: ''};


    // }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setStates!!!
                this.setState({lat: position.coords.latitude})

                //we did not!!!
                //this.state.lat = position.coords.latitude XXXXXXXXXXXX
            }, //success callback
            (err) => {
                this.setState({ errorMessage: err.message })
            }   //failure callback
        );
    }

    //a helper method to wrap content in borders
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }else if(this.state.lat && !this.state.errorMessage){
        // return <div>Latitude: {this.state.lat}</div>
        return <SeasonDisplay lat={this.state.lat} />
        }else{ 
            return (
                <Spinner message="Please accept location request" />
            );
        };
        
        // return(
        //     <div>
        //         Latitude:{this.state.lat} {this.state.errorMessage}
        //     </div>
        // );
    }

    render(){
        return(
       <div classNamr="border red">
           {this.renderContent()}
        </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector('#root'));