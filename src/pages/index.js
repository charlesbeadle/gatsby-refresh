import * as React from 'react'; 
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <body>
      <main>
        <h1>Home</h1>
        <Link to="/about">About page</Link>
      </main>
    </body>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>Gatsby Refresher | Home</title>
      <meta name="description" content="This is the home page"/>
    </>
  )
}
