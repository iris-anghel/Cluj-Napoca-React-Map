import React, { Component } from 'react'

class SidebarMenu extends Component {

    render() {

        const { filteredLocations, query, toggleSidebar, onLocationClick, updateQuery, active } = this.props

        let list = filteredLocations.map((item) => {
            return (
                <li
                    key={item.name}
                    id={item.id}
                    onClick={e => onLocationClick(item.name)}
                    role='link'
                    tabIndex='0'
                    className='venues-list'
                >
                    {item.name}
                </li>
            )
        })
    
        return (
            <div>
                <button 
                    id='menuToggle'
                    tabIndex='0'
                    aria-label='toggle locations'
                    onClick={toggleSidebar}>
                </button>

                <ul 
                    id='menu'
					// conditionally render the sidebar based on state
                    className={active ? 'hidden' : 'visible'}
                >
                    {/* this should be moved and restyled */}
                    <h1 className='app-title'>Cluj-Napoca</h1>
                    <div>
                        <input
                            className='filter-locations'
                            type='text'
                            placeholder='Filter locations'
                            value={query}
                            onChange={e => updateQuery(e.target.value)}
                            role='searchbox'
                            aria-label='filter-locations'
                            tabIndex='0'
                        />
                    </div>
                    {list}
                </ul>
            </div>
        )
    }
}

export default SidebarMenu

// help from
// https://www.youtube.com/watch?v=N1J7Q1qJPQM React with Google Maps
// https://www.youtube.com/watch?v=MEzcDiA6shM Venue Finder