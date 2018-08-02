import React, { Component } from 'react'
import ClujMap from './components/ClujMap'
import Places from './components/Places'
import './App.css'

class App extends Component {
    
    render() {

        const style = {
            width: '100vw',
            height: '80vh'
        } // move to styles, add a className

        return (
            <div className="App" style={style}>
                <header className="App-header">
                    <h1 className="App-title">Cluj-Napoca Neighborhood Map</h1>
                </header>
            
                <main>
                    <ClujMap

                    />
                </main>

            </div>
        )
    }
}

export default App
