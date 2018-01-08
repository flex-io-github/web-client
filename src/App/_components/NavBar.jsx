import React from "react";
import PropTypes from "prop-types";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import '../_styles/NavBar.css'

export const NavBar = ({onChange, onSearch}) => (
    <div className="NavBar">
        <div className="logo ms-font-x1">
            <strong>Awesome App</strong>
        </div>
        <div className="searchbox">
            <SearchBox labelText="Search"
                onChange={(newValue) => console.log('SearchBox onchange fired:' + newValue)}
                onSearch={(newValue) => console.log('SearchBox onSearch fired: ' + newValue)}
            />
        </div>
    </div>
)

NavBar.propTypes = {
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
}

NavBar.defaultProps ={
    onChange: (newValue) => console.log('SearchBox onChange fired: ' + newValue),
    onSearch: (newValue) => console.log('SearchBox onSearch fired: '+ newValue),
}