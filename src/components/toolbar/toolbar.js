import React from 'react';
import './toolbar.css';

function Toolbar(props){

    let sections = props.props;
    let menuOptions = [];
    sections.forEach((section) =>
      menuOptions.push(<li key={section.value}>{section.title}</li>));

    return (
      <div  className="dropdown" >
      <div className="button" onClick={props.showDropdownMenu}> Select Section </div>

        { props.state.displayMenu ? (
          <ul>
            {menuOptions}
          </ul>
        ):
        (
          null
        )}
    </div>

  );
}
export default Toolbar;
