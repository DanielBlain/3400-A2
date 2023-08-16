import React from 'react'

const Footer = ({ copyrightYear, author }) => {
  return (
    <footer className="App-footer">
      <h2>Copyright © {author} {copyrightYear}</h2>
    </footer>
  )
}

Footer.defaultProps = {
    copyrightYear: new Date().getFullYear(),
    author: 'Unknown',
}

export default Footer