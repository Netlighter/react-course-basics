function Header() {
  return (
    <nav className="pink darken-3">
      
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">MovieSeries</a>
        
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
      
    </nav>
  )
  
}

export { Header }