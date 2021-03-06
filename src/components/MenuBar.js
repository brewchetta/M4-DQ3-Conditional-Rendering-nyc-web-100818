import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const classTab = () => {
    if (props.tab === "profile") {
      return "item active"
    } else {
      return "item"
    }
  }

  return (
    <div className="ui four item menu">
      <a className={props.tab === "profile" ? "item active" : "item"}
      id="profile"
      onClick={props.setContent}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={props.tab === "photo" ? "item active" : "item"}
      id="photo"
      onClick={props.setContent}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={props.tab === "cocktail" ? "item active" : "item"}
      id="cocktail"
      onClick={props.setContent}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={props.tab === "pokemon" ? "item active" : "item"}
      id="pokemon"
      onClick={props.setContent}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
