import React from 'react'

const Footer = ({ copyrightYear, author }) => {
  return (
    <footer className="App-footer">
      <p>
        <h2>Copyright © {author} {copyrightYear}</h2>
      </p>
    </footer>
  )
}

Footer.defaultProps = {
    copyrightYear: new Date().getFullYear(),
    author: 'Unknown',
}

export default Footer