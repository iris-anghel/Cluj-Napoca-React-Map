import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
// https://www.npmjs.com/package/google-maps-react provides the 'GoogleApiWrapper', a  Higher-Order component for lazy-loading the map
import flatSnazzy from './flatSnazzy.json'
// import pin from '../gps.png'

// turn into stateless comp if state is not moved here
class ClujMap extends Component {
    render() {
     
        const { filteredLocations, onMarkerClick, selectedPlace, activeMarker, showingInfoWindow } = this.props
        // const icon = nu mai . o lasam default
        // add bounds
        
        return (
            <Map
                classname='map'
                google={this.props.google}
                initialCenter={ {lat: 46.770181, lng: 23.591578} }
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
                            address={location[0]}
                            // position={location.position
                            //     // lat: location[1],
                            //     // lng: location[2]
                            // }
                            position={{ lat: location.location.lat, lng: location.location.lng }}
                            // icon={pin}
                            onClick={onMarkerClick}
                            // animation={this.props.google.maps.Animation.DROP}
                            // animate only when selected
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
                        <p>Address:{selectedPlace.address}</p>
                        <p>Find out more at 
                            <a href="https://foursquare.com">Foursquare.com</a>
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
