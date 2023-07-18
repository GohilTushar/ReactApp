import React from "react";
import Common from "./Common";
import web from '../src/images/s2.svg'

const About = () => {
  return (
    <>
     <Common name=<h1>Welcome to <strong className="brand-name">About Page</strong></h1>
      visit='/contact'
      btname='Contact'
      image={web}
      />
    </>
  )
}
export default About;
