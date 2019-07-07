import React from 'react';
import ReactDOM from 'react-dom'



class App extends React.Component {

    // constructor function is first to be called, setting state!

    constructor(props) {
        // must include super, refrence to parents constructor function
        super(props);

        // setting the state object, can refernce this in any function within component. This is the only teim we do direct assignment.
        this.state = { lat: null };

        // get user current location
        window.navigator.geolocation.getCurrentPosition(
            // Success
            (position) => {
                // call setState to update state! never directly update state
                this.setState({ lat: position.coords.latitude })
            },
            // failure
            (err) => console.log(err)
        );


    }

    // must define render!
    render() {
        return <div>Latitude: {this.state.lat} </div>
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