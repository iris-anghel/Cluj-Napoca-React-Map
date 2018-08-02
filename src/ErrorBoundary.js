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
            return <h1>Something went wrong loading the map</h1>;
            // or a custom component
        }
        return this.props.children;
      }

}

export default ErrorBoundary