import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
// https://www.npmjs.com/package/google-maps-react provides the 'GoogleApiWrapper', a  Higher-Order component for lazy-loading the map
import flatSnazzy from './flatSnazzy.json'

// turn into stateless comp if state is not moved here
class ClujMap extends Component {
    render() {
     
        const { filteredLocations, onMarkerClick, selectedPlace, activeMarker, showingInfoWindow } = this.props
        // maybe add bounds
        
        return (
            <Map
                classname='map'
                role='application'

                google={this.props.google}
                initialCenter={{lat: 46.770181, lng: 23.591578}}
                zoom={15}
                styles={flatSnazzy}
                // bounds={bounds} 
            >

                {/* loop over the returned locations and add markers */}
                {filteredLocations.map((location, i) => {
                    return (
                        <Marker 
                            key={i}
                            id={location.id}
                            title={location.name}
                            name={location.name}
                            // address={location[0]}
                            address={location.location.address}
                            position={{ lat: location.location.lat, lng: location.location.lng }}

                            onClick={onMarkerClick}
                            // animate only when active
                            animation={(location.name === selectedPlace.title) ? this.props.google.maps.Animation.DROP : null}
                            // animation={activeMarker ?
                            //     (location.name === activeMarker.title ? '1' : '0') : '0'}
                        />
                    )
                })}

                <InfoWindow 
                        // onOpen={this.windowHasOpened}
                        // onClose={this.onInfoWindowClose}
                        marker={activeMarker}
                        visible={showingInfoWindow}
                >
                    <div>
                        <h3>{selectedPlace.title}</h3>
                        <p>Address: {selectedPlace.address}</p>
                        <p>Find out more at 
                            <a href="https://foursquare.com" target='_blank' rel="noopener noreferrer"> Foursquare.com</a>
                        </p>
                    </div>
                </InfoWindow>

            </Map>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDt_MPOaWNAG0N14SpXDlbnOc-c_AMcz0w'
})(ClujMap)
