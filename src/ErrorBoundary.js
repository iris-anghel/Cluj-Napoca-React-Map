import React, { Component } from 'react'

class ErrorBoundary extends Component {

    state = {
        googleMapError: false 
    }

    componentDidCatch(error, info) {
        this.setState({ googleMapError: true });
        console.log(error, info);
    }

    render() {
        if (this.state.googleMapError) {
            // fallback UI
            return <h2>Something went wrong loading the map. Please check the JavaScript console for more information.</h2>;
            // or add some custom UI
        }
        return this.props.children;
      }
}

export default ErrorBoundary