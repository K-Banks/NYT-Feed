import React from 'react';
import './toolbar.css';

function Toolbar(props){

    let sections = props.props;
    let menuOptions = [];
    sections.forEach((section) =>
      menuOptions.push(<li key={section.value} onClick={() => {getSelectedSection(section)}}>{section.title}</li>));

    function getSelectedSection(section) {
      props.changeSelectedSection(section)
    }

    if (props.state.queryStatus) {
      return (
        <div className="toolbar-container">
          <div className="dropdown">
            <div className="button" onClick={props.showDropdownMenu}> {props.state.selectedSection.title} </div>
        </div>
          <div className="button toggle">Loading...</div>
        </div>
      )
    } else {
      return (
        <div className="toolbar-container">
          <div className="dropdown">
            <div className="button" onClick={props.showDropdownMenu}> {props.state.selectedSection.title} </div>

            { props.state.displayMenu ? (
              <ul>
                {menuOptions}
                </ul>
            ):
            (
              null
            )}
        </div>
          <div className="button toggle" onClick={props.toggle}>
            {props.state.liveFeed ? (
              'Click for Top Stories'
            ) : (
              'Click for Recent Stories'
            )}
          </div>
        </div>
    );
  }
}
export default Toolbar;
