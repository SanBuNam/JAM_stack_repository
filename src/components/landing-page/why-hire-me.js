import React from "react"
import Image from "gatsby-image"
import styles from "./why-hire-me.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fixed(width: 450, height: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const WhyMe = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <h3>why hire me as your freelance web developer?</h3>
      </div>

      <div>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <p>Learn more about the services I offer</p>
        <button>compare services</button>
      </div>

      <div>
        <h5>As your web developer you can count on me to:</h5>
        <ul>
          <li>Estimate the timeframe and cost upfront</li>
          <li>Email you a daily or weekly progress report</li>
          <li>Include a task overview on your sprint board</li>
          <li>Be available to speak to you during the project</li>
          <li>Handle urgent requests when you get in touch</li>
          <li>Based in CA and happy to meet in person</li>
        </ul>
        <p>
          If you are looking for a{" "}
          <span>Freelance Web Developer in Orange County</span>, an experienced
          full stack developer or simply want a few changes to your site I can
          help you. I will work closely with you to deliver projects that best
          matches your business values and objectives. If you already have a
          site, I can provide regular, ongoing maintenance and support.
        </p>
      </div>
    </div>
  )
}

export default WhyMe
