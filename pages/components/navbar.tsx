import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import navstyles from '../../styles/NavBar.module.css'
import Link from 'next/link'
import { useState } from 'react';
// import React, { Component, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg px-5 py-3 ${navstyles.navbar}`}>
      <div className="container-fluid">
        <div className={`navbar-brand ${navstyles.navbarBrand}`}>
          {/* Add your logo or branding here if needed */}
        </div>
        <button className={`navbar-toggler ${navstyles.navToggler}`} type="button" onClick={toggleMenu}>
          <span className={`navbar-toggler-icon ${navstyles.navbarTogglerIcon}`}></span>
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`navbar-collapse show ${navstyles.navbarinline}`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className={`nav-item px-2 ${navstyles.navItem}`}>
                  <Link href="/">
                    <a className={navstyles.link}>Home</a>
                  </Link>
                </li>
                <li className={`nav-item px-2 ${navstyles.navItem}`}>
                  <Link href="/aboutme">
                    <a className={navstyles.link}>About Me</a>
                  </Link>
                </li>
                <li className={`nav-item px-2 ${navstyles.navItem}`}>
                  <Link href="/contact">
                    <a className={navstyles.link}>Contact Me</a>
                  </Link>
                </li>
                <li className={`nav-item px-2 ${navstyles.navItem}`}>
                  <Link href="/projects">
                    <a className={navstyles.link}>Projects</a>
                  </Link>
                </li>
                <li className={`nav-item px-2 ${navstyles.navItem}`}>
                  <Link href="/artportfolio">
                    <a className={navstyles.link}>Art Portfolio</a>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;