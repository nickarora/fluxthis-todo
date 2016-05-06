import React, { PropTypes } from 'react'

const App = ({ children }) =>
  <div>
    <div>{children}</div>
  </div>

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
