import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react';
// import React, { Component, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg px-5 py-3 ${styles.navbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          
        </a> {/* TODO: Add logo */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={["navbar-toggler-icon", styles.navbarTogglerIcon].join(' ')}></span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`collapse navbar-collapse show`}
              id="navbarNav"
            >
              <ul className={[`navbar-nav`, styles.navbarinline].join(' ')}>
                <li className="nav-item px-2">
                  <Link href="/">
                    <a className={styles.link}>Home</a>
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link href="/aboutme">
                    <a className={styles.link}>About Me</a>
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link href="/contact">
                    <a className={styles.link}>Contact Me</a>
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link href="/projects">
                    <a className={styles.link}>Projects</a>
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link href="/artportfolio">
                    <a className={styles.link}>Art Portfolio</a>
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