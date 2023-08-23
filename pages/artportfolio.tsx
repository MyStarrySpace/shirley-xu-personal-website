import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useSWR from 'swr';


const ArtPortfolio: NextPage = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data } = useSWR<{ images: string[] }>('/api/getImages', fetcher);
	const images = data ? data.images : [];

	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	const openLightbox = (index: number) => {
		setSelectedImage(index);
	};

	const closeLightbox = () => {
		setSelectedImage(null);
	};


	const fadeVariant = {
		initial: { opacity: 0 },
		enter: { opacity: 1 },
	};

	const lightboxVariant = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<div>
			<div className={styles.imageGrid}>
				{images.map((image, index) => (
					<motion.div
						key={index}
						className={styles.imageCell}
						onClick={() => openLightbox(index)}
						variants={fadeVariant}
						initial="initial"
						animate="enter"
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<img
							src={`/images/art/${image}`}
							alt={`Art ${index}`}
							className={`${styles.clickableImage}`}
							onClick={() => openLightbox(index)}
						/>

					</motion.div>
				))}
			</div>

			<AnimatePresence exitBeforeEnter>
				{selectedImage !== null && (
					<motion.div
						className={styles.lightbox}
						onClick={closeLightbox}
						variants={lightboxVariant}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={{ duration: 0.5 }}
					>
						<img
							src={`/images/art/${images[selectedImage]}`}
							alt={`Art ${selectedImage}`}
							className={styles.lightboxImage}
						/>
					</motion.div>
				)}
			</AnimatePresence>

		</div>

	);
};

const Portfolio: NextPage = () => {
	return (
		<div>
			<div className="container-sm">
				<h1 className={[styles.projectstitle, styles.title, 'py-4 mt-3 mb-3'].join(' ')}>Art Portfolio</h1>
				<ArtPortfolio />
			</div>
		</div>
	);
};

export default Portfolio;