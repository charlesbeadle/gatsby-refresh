import * as React from 'react'; 
import { Link } from 'gatsby';

const AboutPage = () => {
  return (
    <body>
      <main>
        <h1>About</h1>
        <Link to="/">Home page</Link>
      </main>
    </body>
  )
}

export default AboutPage

export const Head = () => {
  return (
    <>
      <title>Gatsby Refresher | About</title>
      <meta name="description" content="This is the about page"/>
    </>
  )
}
