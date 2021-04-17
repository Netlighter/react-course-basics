function Footer() {
  return (

    <footer className="page-footer pink darken-3">
    
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Netlighter (with materialize UI)
      <a className="grey-text text-lighten-4 right" href="#!">Github</a>
      </div>
    </div>
  </footer>
  )
}

export { Footer }