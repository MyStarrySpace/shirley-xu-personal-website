import { ReactChild, ReactFragment, ReactPortal } from 'react'
import styles from '../../styles/ProjectList.module.css'
import ResponsiveCard from './responsivecard'
import useSWR from 'swr'
import path from 'path'

interface CardContents {
    title: string;
    body: string;
    image: any;
    index: number;
    delay: number;
}

export default function ProjectList() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data } = useSWR('/api/', fetcher);
    
    return (
      <div className={["row g-4 my-4", styles.center].join(' ')}>
        {data && data.projects.map((project: { data: { data: any; }; }, index: number) => {
            const projectData = project.data.data
            const contents: CardContents = {title: projectData.title, 
            body: projectData.excerpt, 
            image: projectData.cover_image, index: index, delay: (index * 0.2)}
            return(
                <div className="col-sm-12 col-lg-4 mt-4" key={contents.index}>
                    <ResponsiveCard {...contents} />
                </div>
            )
        })}
      </div>
    )
  }