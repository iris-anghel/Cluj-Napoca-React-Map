import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
// https://www.npmjs.com/package/google-maps-react provides the 'GoogleApiWrapper', a  Higher-Order component for lazy-loading the map

class ClujMap extends Component {
    render() {
     
        const icon = 'http://maps.google.com/mapfiles/ms/icons/coffeehouse.png'
        // add bounds

        return (
            <Map
                google={this.props.google}
                initialCenter={ {lat: 46.770331, lng: 23.5852034} }
                zoom={15}
                // bounds={bounds} asta doar sa extinzi points - must add points
            >

            </Map>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDt_MPOaWNAG0N14SpXDlbnOc-c_AMcz0w'
})(ClujMap)
