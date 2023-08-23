import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'
import Navbar from './components/navbar'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import useSWR from 'swr';


const ArtPortfolio: NextPage = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data } = useSWR<{ images: string[] }>('/api/getImages', fetcher);
	const images = data ? data.images : [];

	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

	const fadeVariant = {
		initial: { opacity: 0 },
		enter: { opacity: 1 },
	};

	const openLightbox = (index: number) => {
		setSelectedImage(index);
		setLightboxIsOpen(true);
	};

	const closeLightbox = () => {
		setSelectedImage(null);
		setLightboxIsOpen(false);
	};

	const goNext = (e?: React.MouseEvent) => {
		e?.stopPropagation();
		if (selectedImage !== null && selectedImage < images.length - 1) {
			setSelectedImage(selectedImage + 1);
		}
	};

	const goBack = (e?: React.MouseEvent) => {
		e?.stopPropagation();
		if (selectedImage !== null && selectedImage > 0) {
			setSelectedImage(selectedImage - 1);
		}
	};

	// Keyboard event listener for arrow keys
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') goNext();
			if (e.key === 'ArrowLeft') goBack();
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [selectedImage]);

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
				{lightboxIsOpen && selectedImage !== null && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.lightbox} onClick={closeLightbox}>
						{selectedImage > 0 && (
							<motion.button
								className={`${styles.navigationButton} ${styles.back}`}
								onClick={(e) => goBack(e)}
								animate={{ x: [-10, 10, 0, 0] }}
								transition={{ loop: Infinity, duration: 2 }}
							>
								←
							</motion.button>
						)}
						<img src={`/images/art/${images[selectedImage]}`} alt={`Art ${selectedImage}`} className={styles.lightboxImage}/>
						{selectedImage < images.length - 1 && (
							<motion.button
								className={`${styles.navigationButton} ${styles.next}`}
								onClick={(e) => goNext(e)}
								animate={{ x: [10, -10, 0, 0] }}
								transition={{ loop: Infinity, duration: 2 }}
							>
								→
							</motion.button>
						)}
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