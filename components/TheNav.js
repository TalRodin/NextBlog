import Link from 'next/link';

const TheNav = () => (
  // <div>
  //   <Link href="/">
  //     <a>Home</a>
  //   </Link>
  //   <Link href="/about">
  //     <a>About</a>
  //   </Link>
  // </div>
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link href="/">
          <a className="navbar-item">Home</a>
        </Link>
        <Link href="/about">
          <a className="navbar-item">About</a>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
export default TheNav;
