import { ReactChild, ReactFragment, ReactPortal } from 'react';
import styles from '../../styles/ProjectList.module.css'
import useSWR from 'swr';

export default function ProjectList() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data } = useSWR('/api/', fetcher);
    const projects = data.projects.map((project: { data: { title: any; }; }) => {
        return(
            <h1>
                {project.data.title}
            </h1>
        )
        
    })

    console.log(data.projects)
    return (
      <div className={["row g-4 my-4", styles.center].join(' ')}>
        {data && data.projects.map((project: { data: { data: any; }; }) => {
            const projectData = project.data.data
            return(
                <div className={["col-sm-12 col-lg-4 p-4", styles.projectcard].join(' ')}>
                    <div className={"row"}>
                        <div className={"col-sm-3 col-lg-12"}>
                            <img src={projectData.cover_image} alt={projectData.title} width="300px" height="300px"></img>
                        </div>
                        <div className={"col-sm-9 col-lg-12"}>
                            <h2>{projectData.title}</h2>
                            <p>{projectData.date}</p>
                            <p>{projectData.excerpt}</p>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    )
  }