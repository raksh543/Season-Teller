import React from 'react';
import ReactDOM, { render } from 'react-dom';

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
    constructor(props){
        super(props);
    }
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), //success callback
            (err) => console.log(err)
        );
        return(<div>Latitude:</div>);
    };
};

ReactDOM.render(<App />, document.querySelector('#root'));