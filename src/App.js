import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import ClujMap from './components/ClujMap'
import Places from './components/Places'
import escapeRegExp from 'escape-string-regexp'
import './App.css'

class App extends Component {

    state = {
        locations: [
            {
                id: "4bf82bbf5efe2d7f78486a34",
                location: {lat: 46.76975241095234, lng: 23.587478621861074}
            }, // L'Atelier Cafe
            {
                id: "4e4b613645dd5144016bad33",
                location: {lat: 46.76929120562718, lng: 23.58935528326409} 
            }, // Tolouse Café-Brasserie
            { 
                id: "4bd56d3acfa7b713bfba25da",
                location: {lat: 46.76709044134929, lng: 23.5883123569531}
            }, // Café Bulgakov
            {
                id: "4cdc58bb9dd55941ff87dc2e",
                location: {lat: 46.770516027164184, lng: 23.609046259804103}
            }, // Legends Bar & Café
            {
                id: "4b76b981f964a520d15a2ee3",
                location: {lat: 46.769814872931285, lng: 23.59371026133131} 
            }, // Le Général Café-Pub
            {
                id: "4e1b25ba183850770fd0b46a",
                location: {lat: 46.77184121646896, lng: 23.58751655466925}
            }, // Caro Central Cafe
            { 
                id: "4cd423a004c2236a3e3ad1c7",
                location: {lat: 46.76380130801904, lng: 23.57688772855973}
            }, // Solas Cafe
            {
                id: "4b969517f964a52065d634e3",
                location: {lat: 46.76875253006966, lng: 23.588036372309755}
            } // Zorki Photo Cafe
        ],
     
        showingInfoWindow: false,
        // showingSidebar: false,
        activeMarker: {},
        selectedPlace: {}
    } 
    
    // fetching the locations from Foursquare, with the query='cafe'
    // the response with the venues was saved in the file 'response.json'
    componentDidMount() {

        const url='https://api.foursquare.com/v2/venues/search?ll=46.770181,23.591578&query=cafe&client_id=WM2CEFFDGO2FX21ZHBVYJ5PW3SIKG3ZRU1SL3MOYHWY0U5U5&client_secret=Q24SH4OINAB3F1KVPQT2545GP2THKXCZSP2C4553JLMIECQI&v=20180803';
        
        fetch(url)
            .then(response => response.json())
            .then(data => {    
                let locations = data.response.venues;
            this.setState({ locations });
            }).catch(error => {
                console.log('Foursquare ', error);
                alert('Foursquare locations not available. Try again later.');
            })  
    } // end componentDidMount

    // naming (showingInfoWindow, activeMarker, selectedPlace etc) taken from google-maps-react package
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onLocationClick = (event) => {
        // what happens when we click a location
        console.log(event)
    } 


    render() {

        const {query, locations} = this.state

        let filteredLocations
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            // filter the locations array, case insensitive
            filteredLocations = locations.filter((location) => match.test(location.name))
        } else {
            filteredLocations = locations
        }

        return (
            <div className="App">
                
            
                <main>
                    <ErrorBoundary>
                        <ClujMap
                            // locations={this.state.locations}
                            filteredLocations={filteredLocations}
                            showingInfoWindow={this.state.showingInfoWindow}
                            activeMarker={this.state.activeMarker}
                            selectedPlace={this.state.selectedPlace}
                            onMarkerClick={this.onMarkerClick} 
                            onLocationClick={this.state.onLocationClick}
                        />

                        <Places
                            // locations={this.state.locations}
                            filteredLocations={filteredLocations}
                            selectedPlace={this.state.selectedPlace}
                            activeMarker={this.state.activeMarker}
                            //  de astea 2 nu is sigura
                            updateQuery={this.updateQuery}
                            onLocationClick={this.onLocationClick}
                            onSidebarToggle={this.onSidebarToggle}
                        />
                    </ErrorBoundary>
                </main>

            </div>
        )
    }
}

export default App

// 'https://api.foursquare.com/v2/venues/search?ll=46.770181,23.591578&query=cafe&client_id=WM2CEFFDGO2FX21ZHBVYJ5PW3SIKG3ZRU1SL3MOYHWY0U5U5&client_secret=Q24SH4OINAB3F1KVPQT2545GP2THKXCZSP2C4553JLMIECQI&v=20180803'

