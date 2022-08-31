import * as React from 'react'; 
import { Link } from 'gatsby';
import '../css/bootstrap.css';

const AboutPage = () => {
  return (
    <body className="p-4">
      <main>
        <div className="container mx-auto">
          <h1>About</h1>
          <Link to="/">Home page</Link>
        </div>
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
