import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {

    // constructor function is first to be called, setting state! Best not to load data in constructor, use componentDidMount instead.

    // constructor(props) {
    //     // must include super, refrence to parents constructor function
    //     super(props);

    //     // setting the state object, can refernce this in any function within component. This is the only teim we do direct assignment.
    //     this.state = { lat: null, errorMessage: '' };
    // }


    // alternate way to initalize state.

    state = { lat: null, errorMessage: '' };

    // lifecycle Methods

    componentDidMount() {
        // get user current location
        window.navigator.geolocation.getCurrentPosition(
            // Success
            position => this.setState({ lat: position.coords.latitude }),
            err =>  this.setState({ errorMessage: err.message })
          
        );
    }

    componentDidUpdate() {
        console.log('component just updated!');
    }


    // must define render!
    render() {

        // conditional rendering.
        
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
            
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request"/>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)

// whats happening here!
// 1) JS file is loaded by browser
// 2) Instance of App component is created
// 3) App component 'constructor' function is called
// 4) State object is created and assisned to the 'this.state' property
// 5) Call the geolocation service
// 6) React calls the components render method
// 7) App returns jsxAttribute. gets rendered as HTML
// 8) result of geolocation shown!
// 9) update the statte object iwth a call to 'this.setState'
// 10) React detects updated state
// 11) React calls the render method again
// 12) React method returns some (updated) JSX
// 13) React take the JSX and updates the content on the screen!