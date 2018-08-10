import React, { Component } from 'react'

// turn into stateless comp if state is not moved here
class Places extends Component {

    state = {
        showingSidebar: false
        // searchInput: ''
    }

    onSidebarToggle = () => {
        this.setState({
            showingSidebar: !this.state.showingSidebar
        })
    }

    // change state with new query
    // updateQuery = (searchInput) => {
    //     this.setState(
    //         {searchInput: searchInput}
    //     )
    // } 

    render() {

        const { filteredLocations, searchInput, onLocationClick, updateQuery } = this.props
        let list = filteredLocations.map((location) => {
            return (
                <li
                   // key={location.id}
                    key={location.name}
                    name={location.name}
                   // onClick={onLocationClick}
                    id={location.id}
                    role='link'
                    tabIndex='0'
                     onClick={e => onLocationClick(location.name)}
                    // onClick={e => onLocationClick(e.target)}
                >
                    {/* {location.title} */}
                    {location.name}
                </li>
            )
        })
    
        return (
            <div>
                {/* toggle the sidebar with the list */}
                <button 
                    className='locations-toggle'
                    onClick={this.onSidebarToggle}
                    tabIndex='0'
                    aria-label='toggle locations list icon'
                >
                </button>
                {/* conditionally render the sidebar based on state and className */}
                <div className={(this.state.showingSidebar)? "sidebar" : "sidebar-open"}>
                    <h3>Cluj-Napoca</h3>
                    <div> 
                        <input 
                            type='text'
                            placeholder='Filter locations'
                            name='searchInput'

                            role='searchbox'
                            aria-label='filter locations'
                            tabIndex='0'

                            value={searchInput}
                            onChange={e => updateQuery(e.target.value)}
                        />
                    </div>
                    <div>
                        <ul className='locations-list'>
                            {list}
                        </ul>
                        {/* error handle when no locations available */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Places