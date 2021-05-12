import React from 'react'
//import { Link } from 'gatsby'
import { Link, navigate } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import wemalogo from '../img/Wemalabs-35.svg'
import Login, { signIn } from '../components/Login'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      user: false,
      logout : this.logout.bind(this),
    }
  }

  logout() {
    signIn.authClient.signOut().catch((error) => {
      console.error('Sign out error: ' + error)
    }).then(() => {
      localStorage.setItem('isAuthenticated', 'false');
      this.setState({user: false});
      navigate('/');
    });
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={wemalogo} alt="WemaLogo" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
              <Link className="navbar-item" to="/products">
                products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              {/*
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
            </div>
            <div className="navbar-end has-text-centered">
            
              <div className="navbar-item dropdown" to="/account" >Account
                <ul>
            
                  <li> <Link to="/account">My Account</Link>{' '}</li>
                  <li> <Link to="/account/settings">Settings</Link>{' '}</li>
                  <li> <Link onClick={this.logout}>Logout</Link>{' '}</li>
                </ul>
              </div>
            
              <a
                className="navbar-item"
                href="https://github.com/MCWEMA/gatsby-starter-hello-world"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
