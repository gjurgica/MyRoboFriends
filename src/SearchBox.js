import React from 'react';

const SerachBox = ({searchField,searchChange}) => {
    return(
        <div className="pa2">
            <input className="pa2 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search Robots..."
            onChange={searchChange}/>
        </div>
    );
}

export default SerachBox;