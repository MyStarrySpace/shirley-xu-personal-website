import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Component, useState } from 'react';
import { motion, useAnimation } from "framer-motion"

const ServicesDropdown: NextPage = () => {

  const [isOpen, setIsOpen] = useState(0);
  const dropDownClass = isOpen ? styles.dropdownmenuopen : styles.dropdownmenuclosed;
  const controls = useAnimation();


  return (
    <li className="nav-item px-2">
      <div className={["dropdown"].join(' ')} onClick={() => 
          {setIsOpen(! isOpen)}
        }>
        <a className={["nav-link dropdown-toggle", styles.link].join(' ') } href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true">My Services</a>
        <motion.div initial="initial" animate='animate' transition={{ delay: 0.2 }} variants={{ 
                    initial: { opacity: 0, "maxHeight": 0}, 
                    animate: { opacity: 1, "maxHeight": 280}, 
                  }}>
            <div className={[styles.dropdownmenu, dropDownClass].join(' ')} aria-labelledby="dropdownMenuButton">
              <div className="nav-item px-2">
                <Link href="/">
                  <a className={[styles.link].join(' ')}>UI Design and Development</a>
                </Link> 
              </div>
              <div className="nav-item px-2">
                <Link href="/">
                  <a className={[styles.link].join(' ')}>Full-Stack Development</a>
                </Link> 
              </div>
              <div className="nav-item px-2">
                <Link href="/">
                  <a className={[styles.link].join(' ')}>Illustration</a>
                </Link> 
              </div>
            </div>
          </motion.div>
      </div>
    </li>
  );

}

class CollapsedDropdown extends Component {

  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = this.state.isOpen ? styles.menuopen : styles.menuclosed;
    return (
      <>
        <div>
          <div>
            <a href="javascript:void(0);"  className={["icon", styles.navexpandicon].join(' ')} onClick={this.toggleOpen}>
              <i className="fa fa-bars"> </i>
            </a>
          </div>
          <div className={menuClass} id="navbarsExample07XL">
            <ul className={["navbar-nav", styles.navbarinline].join(" ")}>
              <li className="nav-item px-2">
                <Link href="/">
                  <a className={[styles.link].join(' ')}>Home</a>
                </Link>   
              </li>
              <li className="nav-item px-2">
                <Link href="/aboutme">
                  <a className={[styles.link].join(' ')}>About Me</a>
                </Link> 
              </li>
              <li className="nav-item px-2">
                <Link href="/contact">
                  <a className={[styles.link].join(' ')}>Contact Me</a>
                </Link> 
              </li>
              <ServicesDropdown />
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const Navbar: NextPage = () => {
  return (
    <nav className={["navbar navbar-expand px-5 py-3", styles.navbar].join(' ')}>
      <div className="container-fluid">
        <CollapsedDropdown />
      </div>
    </nav>
  )
}

export default Navbar