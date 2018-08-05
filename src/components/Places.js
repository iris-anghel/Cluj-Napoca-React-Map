import React, { Component } from 'react'

// turn into stateless comp if state is not moved here
class Places extends Component {

    state = {
        showingSidebar: false,
        searchInput: ''
    }

    onSidebarToggle = () =>
        this.setState({
            showingSidebar: !this.state.showingSidebar
        })

    // change state with new query
    updateQuery = (searchInput) => {
        this.setState(
            {searchInput: searchInput}
        )
        // this.props.filteredLocations(searchInput);
    } // tre sa filtreze prin locatii 

    clearQuery = () => {
        this.setState(
            {searchInput: ''}
        )
    } // asta nu l/am folosit inca

    render() {

        const { filteredLocations, searchInput, onLocationClick } = this.props
        let list = filteredLocations.map((location, i) => {
            return (
                <li
                    key={i}
                    onClick={onLocationClick}
                    // onClick={e => onLocationClick(location.name)}
                >
                    {/* {location.title} */}
                    {location.name}
                    {/* asa era la myReads */}
                    {/* this.state.shownBooks.map((shownBooks) => {
                            shownBooks.shelf = "none"
                            this.props.books.map((book) => {
                                shownBooks.id === book.id ? shownBooks.shelf = book.shelf : ""}
                            )
                    }) */}
                </li>
            )
        })
    
        return (
            <div>
                <button 
                    className='locations-toggle'
                    onClick={this.onSidebarToggle}
                >
                </button>
                <div className={(this.state.showingSidebar)? "sidebar" : "sidebar-open"}>
                    <h3>Cluj-Napoca</h3>
                    <div> 
                        <input 
                            type='text'
                            placeholder='Filter locations'
                            name='searchInput'
                            value={searchInput}
                            // onClick={updateQuery}
                            onChange={e => this.updateQuery(e.target.value)}
                        />
                        <button type='submit'>Go</button>
                        {/* nu are nimic atasat */}
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