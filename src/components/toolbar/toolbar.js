import React from 'react';
import './toolbar.css';

class Toolbar extends React.Component{

  constructor(props){
    super(props);


    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
      console.log(this.props.props);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

    render() {
      let sections = this.props.props;
      let menuOptions = [];
      sections.forEach((section) =>
        menuOptions.push(<li key={section.value}><a>{section.title}</a></li>)
      )
      return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
        <div className="button" onClick={this.showDropdownMenu}> Select Section </div>

          { this.state.displayMenu ? (
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
}
export default Toolbar;
