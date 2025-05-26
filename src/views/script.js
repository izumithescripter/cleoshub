import React from 'react'

import { Helmet } from 'react-helmet'

import './script.css'

const Script = (props) => {
  return (
    <div className="script-container">
      <Helmet>
        <title>Script - Lovely Determined Ant</title>
        <meta property="og:title" content="Script - Lovely Determined Ant" />
      </Helmet>
      <h1>Script:</h1>
      <span className="script-text2">
        loadstring(game:HttpGet(&quot;https://raw.githubusercontent.com/izumithescripter/Cleos-Hub/refs/heads/main/Loader.lua&quot;))()
      </span>
    </div>
  )
}

export default Script
