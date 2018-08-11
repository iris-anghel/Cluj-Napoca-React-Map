import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import SnazzyMap from './SnazzyMap.json'

class ClujMap extends Component {

    render() {
     
        const { filteredLocations, onMarkerClick, selectedPlace, activeMarker, showingInfoWindow } = this.props

        return (
            <main className='map-container'>  
                <Map 
                    google={this.props.google}
                    initialCenter={{
                        lat: 46.770181,
                        lng: 23.591578}}
                    zoom={15}
                    styles={SnazzyMap}
                    className='map'
                    role='application'
                >   
                    {/* loop over the returned locations and add markers */}
                    {filteredLocations.map((item) => {
                        return (
                            <Marker
                                key={item.id}
                                title={item.name}
                                id={item.id}
                                onClick={onMarkerClick}
                                name={item.name}
                                address={item.location.address}
                                position={{
                                    lat: item.location.lat,
                                    lng: item.location.lng }}
                                icon={{
                                    path: this.props.google.maps.SymbolPath.CIRCLE,
                                    scale: 8,
                                    strokeColor: '#61418D'
                                }}
                                animation={(item.name === selectedPlace.title) ? this.props.google.maps.Animation.BOUNCE : null}
                            />
                        )
                    })}

                    <InfoWindow 
                        marker={activeMarker}
                        visible={showingInfoWindow}
                    >
                        <div>
                            <h3 tabIndex='0'>{selectedPlace.name}</h3>
                            <p tabIndex='0'>Address: {selectedPlace.address}</p>
                            <p className='foursquare-attribution' tabIndex='0'>
                                Informations by
                                <a href='https://foursquare.com' target='_blank' rel="noopener noreferrer"> Foursquare.com</a>
                            </p>
                        </div>
                    </InfoWindow>
                </Map>
            </main>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDt_MPOaWNAG0N14SpXDlbnOc-c_AMcz0w'
})(ClujMap)

// https://www.npmjs.com/package/google-maps-react provides the 'GoogleApiWrapper', a  Higher-Order component for lazy-loading the map