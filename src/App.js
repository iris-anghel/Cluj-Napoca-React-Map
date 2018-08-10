import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import ClujMap from './components/ClujMap'
import SidebarMenu from './components/SidebarMenu'
import escapeRegExp from 'escape-string-regexp'
import './App.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            items: [],
            active: false
        }
    }
    
    componentDidMount = () => {
        this.getVenues()
        this.toggleSidebar()
        window.gm_authFailure = this.gm_authFailure
    }

    // fetching the locations from Foursquare, with the query='cafe'
    // the response with the venues was saved in the file 'response.json'
    getVenues = () => {
        fetch('https://api.foursquare.com/v2/venues/search?ll=46.770181,23.591578&query=cafe&client_id=WM2CEFFDGO2FX21ZHBVYJ5PW3SIKG3ZRU1SL3MOYHWY0U5U5&client_secret=Q24SH4OINAB3F1KVPQT2545GP2THKXCZSP2C4553JLMIECQI&v=20180803')
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error(`Request rejected with status ${response.status}`);
            }
        })
        .then(items => {
              this.setState({ items: items.response.venues });
        }).catch(error => {
          console.log('Foursquare ', error);
          alert('Foursquare locations not available. Try again later or check the JavaScript console.')
        })
    }

    // error handle when Google Maps is not loading
    // god bless the console. gm-err-containter, gm-err-content classes found
    gm_authFailure = () => {
        const gmErrContainer = document.querySelector('.gm-err-container')
        const gmErrMessageTitle = document.querySelector('.gm-err-title')
        const gmErrMessage = document.querySelector('.gm-err-message')
        const menu = document.querySelector('#menu')

        if (gmErrContainer) {
            menu.setAttribute('aria-hidden', 'true')
            menu.style.display = 'none'
            gmErrMessageTitle.innerHTML = 'Sorry, Google Maps cannot be loaded.'
            gmErrMessage.innerHTML = 'Please check the JavaScript console for technical details.'
        }
    }

    toggleSidebar = () => {
        this.setState({
            active: !this.state.active
        })
    }

    // naming (showingInfoWindow, activeMarker, selectedPlace etc) taken from google-maps-react package
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    // update query when filtering
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    // open the infoWindow and activate the marker on list click
    // again, god bless the console for the gmnoprint class
    onLocationClick = (e) => {
        let clickedMarker = [...document.querySelectorAll('.gmnoprint')]

        if (document.querySelector('.map-container')) {
            clickedMarker.find(m => m.title === e).click()
        } else {
            this.ongetVenuesError()
        }
    }
    
    // filter the locations list
    // updateQuery = (searchInput) => {
    //     this.setState({ searchInput });
    
    //     if (searchInput) {
    //         // make it case insensitive
    //         const match = new RegExp(escapeRegExp(searchInput), "i");
    //         let filteredLocations = this.state.locations.filter(location =>
    //             match.test(location.name)
    //         );
    //         if (searchInput.length === 0) {
    //             this.setState({ filteredLocations: this.state.locations });
    //         } else {
    //             this.setState({ filteredLocations});
    //         }
    //     } else {
    //         this.setState({ filteredLocations: this.state.locations });
    //     }
    // };

    render() {

        const { query, items } = this.state

        // filter the locations list
        let filteredLocations
        if (query && items) {
            // make it case insensitive
            const match = new RegExp(escapeRegExp(query), 'i')
            filteredLocations = items.filter((item) => match.test(item.name))
        } else {
            filteredLocations = items
        }

        return (
            <div className="App">
                <ErrorBoundary>
                    <SidebarMenu
                        filteredLocations={filteredLocations}
                        updateQuery={this.updateQuery}
                        onLocationClick={this.onLocationClick}
                        toggleSidebar={this.toggleSidebar}
                        active={this.state.active}
                    />

                    <ClujMap
                        filteredLocations={filteredLocations}
                        onLocationClick={this.onLocationClick}
                        onMarkerClick={this.onMarkerClick}
                        selectedPlace={this.state.selectedPlace}
                        showingInfoWindow={this.state.showingInfoWindow}
                        activeMarker={this.state.activeMarker}
                    />
                </ErrorBoundary>

                <footer>
                    <p>Powered by <a href="https://cloud.google.com/maps-platform/" target='_blank' rel="noopener noreferrer" className='footer-link'> Google Maps API</a> & <a href="https://developer.foursquare.com/places-api" target='_blank' rel="noopener noreferrer" className='footer-link'> Foursquare Places API</a></p>
                </footer>
            </div>
        )
    }
}

export default App

// some help from
// https://css-tricks.com/using-fetch/

