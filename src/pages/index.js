import * as React from 'react'; 
import { Link } from 'gatsby';
import '../css/bootstrap.css';

const IndexPage = () => {
  return (
    <body className="p-4">
      <main>
        <div className="container mx-auto">
          <h1>Home</h1>
          <Link to="/about">About page</Link>
        </div>
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
