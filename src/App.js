import React from 'react';
import './App.css';
import {ThemeContext, themes} from './theme-context'
import ThemedButton from './themed-button'

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      theme: themes.light
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  toggleTheme () {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light: themes.dark
    }))
  }


  render () {
    return (
      <div>

        <h1>Hi, Travis Ci Test branch</h1>
        <ThemeContext.Provider value ={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton children={'Test'}/>
        </section>
      </div>
    )
  }
}

export default App;

