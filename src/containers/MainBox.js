import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    tab: 'profile'
  }

  setContent = (event) => {
    this.setState({
      tab: event.target.id
    }, console.log(this.state))
  }

  renderTab = () => {
    return this.state.tab === 'profile' ? <Profile />
      : this.state.tab === 'photo' ? <Photos />
      : this.state.tab === 'cocktail' ? <Cocktails />
      : this.state.tab === 'pokemon' ? <Pokemon />
      : <p>Hi! I shouldn't exist!</p>
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar setContent={this.setContent} tab={this.state.tab}/>
        {this.renderTab()}
      </div>
    )
  }

}

export default MainBox
