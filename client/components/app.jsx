import React, { PropTypes } from 'react'

import { Grid } from 'react-bootstrap'

const App = ({ children }) =>
  <div>
    <Grid>{children}</Grid>
  </div>

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
