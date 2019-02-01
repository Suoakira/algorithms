import React, { Component } from 'react'
import FreeCodeCampBegAlgo from "./components/codecampbeginner/CelsiusConvert"
import ThirtyDayChallenge from 'components/codecampbeginner/ThirtyDayChallenge'
// import 'semantic-ui-css/semantic.min.css'

import { Grid } from "semantic-ui-react"

class App extends Component {
  render() {
    return (

        <Grid>
          <Grid.Row>
            <Grid.Column width={16} >
              <header>Coding Sandbox</header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8} >
              <FreeCodeCampBegAlgo />
            </Grid.Column>
            <Grid.Column width={8} >
              <ThirtyDayChallenge />
            </Grid.Column>
          </Grid.Row>
        </Grid>

     
    )
  }
}

export default App
