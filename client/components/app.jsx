/* eslint-disable new-cap, react/prefer-es6-class */
import React, { PropTypes } from 'react'
import * as Stores from '../stores'
import { Grid } from 'react-bootstrap'

const App = React.createClass({
  propTypes: {
    children: PropTypes.node.isRequired,
  },
  mixins: [
    Stores.TodosStore.mixin,
  ],
  getStateFromStores() {
    return {
      todos: Stores.TodosStore.todos(),
    }
  },
  render() {
    return (
      <div>
        <Grid>{React.cloneElement(this.props.children, { ...this.state })}</Grid>
      </div>
    )
  },
})

export default App
