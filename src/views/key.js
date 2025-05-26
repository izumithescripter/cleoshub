import React from 'react'

import { Helmet } from 'react-helmet'

import './key.css'

const Key = (props) => {
  return (
    <div className="key-container">
      <Helmet>
        <title>Key - Lovely Determined Ant</title>
        <meta property="og:title" content="Key - Lovely Determined Ant" />
      </Helmet>
      <h1>Get the key below.</h1>
      <button type="button" id="lootlabs" className="key-button button">
        Loot Labs
      </button>
    </div>
  )
}

export default Key
