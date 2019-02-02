import React, { Component } from 'react'
import FreeCodeCampBegAlgo from "./components/codecampbeginner/CelsiusConvert"
import ThirtyDayChallenge from "./components/HackerRank/ThirtyDayCallenge"

import { Header } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'

import { Grid } from "semantic-ui-react"

class App extends Component {
  render() {
    return (

        <Grid>
          <Grid.Row>
            <Grid.Column width={16} >
            <Header size="huge">Coding Sandbox</Header>
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
