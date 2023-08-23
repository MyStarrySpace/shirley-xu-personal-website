import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import grayMatter from 'gray-matter';
import matter from 'gray-matter';
import rehypeRaw from 'rehype-raw';
import styles from '../../styles/Project.module.css'
import { motion, useAnimation } from "framer-motion"

type ProjectPageProps = {
    content: string;
    title: string;
    cover_image: string;
};

export default function ProjectPage({ content, title, cover_image }: ProjectPageProps) {
    return (
        <div className={["container-fluid", styles.containerFluid].join(" ")}>
            <div className={styles.imageContainer}>
                <img className={["img-fluid", styles.coverImage].join(" ")} src={cover_image} alt={title} />
                <motion.div initial="initial" animate="animate" transition={{ delay: 0.2 }} variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                }}>
                    <div className={["p-4 m-3", styles.titleContainer].join(" ")}>
                        <h1 className={styles.titleText}>{title}</h1>
                    </div>
                </motion.div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col p-5">
                        <div className={styles.markdownContent}>
                            <motion.div initial="initial" animate="animate" transition={{ delay: 0.2 }} variants={{
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                            }}>
                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                    {content}
                                </ReactMarkdown>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = fs.readdirSync('public/projects').map((filename) => ({
        params: { project: filename.replace('.md', '') },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
    const filePath = path.join('public/projects', `${params?.project}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent); // Parse front matter using gray-matter
    const { title, cover_image } = data;

    return { props: { content, title, cover_image } }; // Pass title and cover_image to the component
};