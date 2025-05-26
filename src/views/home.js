import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Features24 from '../components/features24'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lovely Determined Ant</title>
        <meta property="og:title" content="Lovely Determined Ant" />
      </Helmet>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text1">Cleos Hub (Femboys Only.)</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text2">
              Clicking the continue button will redirect you to the script.
            </span>
          </Fragment>
        }
        rootClassName="features24root-class-name"
      ></Features24>
      <Link to="/key" className="home-navlink1 button">
        Get Key
      </Link>
      <img src="/img_0626-900w.png" className="home-image" />
      <Link to="/script" className="home-navlink2 button">
        Continue.
      </Link>
    </div>
  )
}

export default Home
