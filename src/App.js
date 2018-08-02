import React, { Component } from 'react'
import ClujMap from './components/ClujMap'
import Places from './components/Places'
import './App.css'

class App extends Component {

    state = {
        locations: [],
        searchInput: '',
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }  
    
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

// 'https://api.foursquare.com/v2/venues/search?ll=46.770331,23.5852034&query=cafe&client_id=WM2CEFFDGO2FX21ZHBVYJ5PW3SIKG3ZRU1SL3MOYHWY0U5U5&client_secret=Q24SH4OINAB3F1KVPQT2545GP2THKXCZSP2C4553JLMIECQI&v=20180731'

