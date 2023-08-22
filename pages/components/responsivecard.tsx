import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import Link from 'next/link'

interface CardContents {
    title: string;
    body: string;
    image: any;
    index: number;
    delay: number;
    projectName?: string;
}

export default function ResponsiveCard(contents: CardContents){
    const [ref, inView] = useInView({ threshold: 0.2,})
  
    const controls = useAnimation();
  
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  
    return (
        <motion.div initial="hidden" animate={controls} variants={{
                hidden: {opacity: 0}, 
                visible: {opacity: 1, transition: { duration: 0.2, when: "beforeChildren", delay: contents.delay}}
            }}>
<div ref={ref} className={[styles.projectcard, 'card h-100 mb-4'].join(' ')}>
                <div className="row">
                    <div className={[styles.cardfill, 'col-xs-12 col-sm-4 col-lg-12'].join(' ')}>
                        <Image src={contents.image} alt={contents.title} className={styles.cardimg} width="100%" height="75%" layout="responsive"/>
                    </div>
                    <div className={[styles.cardtext, 'col-xs-12 col-sm-8 col-lg-12 mt-4 mb-4'].join(' ')}>
                        <h5 className={[styles.cardtitle, 'card-title mt-0 mb-0 px-3'].join(' ')}>{contents.title}</h5>
                        <div className={['card-body px-4', styles.cardbody].join(' ')}>{contents.body}</div>
                        {contents.projectName && (
                            <div className="read-more-link"> {/* Add the "Read More" button if there is a project name to link to */}
                                <Link href={`/projects/${contents.projectName}`}>
                                <button className={["btn p-3 mt-1", styles.readmorebtn].join(' ')}>Read More</button>
                                </Link>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </motion.div> 
    )
}
  