import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"

import ProjectList from './components/projectlist'

const Projects: NextPage = () => {
	return (
		<div>

			<div className="container-sm">
				<h1 className={[styles.projectstitle, styles.title, "py-4 mt-3 mb-3"].join(' ')}>
					Projects
				</h1>
				<ProjectList />
			</div>

		</div>
	);
}

export default Projects
