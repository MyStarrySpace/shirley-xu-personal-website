// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type ResponseData = {
  projects: any,
  status: string
}

export default async (req:NextApiRequest, res:NextApiResponse<ResponseData>) => {
  const project_files = fs.readdirSync(path.join('public/projects'))

  const project_slugs = project_files.map(filename => {
    const slug = filename.replace('.md', '')
    const fileMd = fs.readFileSync(path.join('public/projects', filename), 'utf-8')
    const data = matter(fileMd)

    return {
      slug,
      data
    }
  })

  res.status(200).json({ 
    projects: project_slugs,
    status: "OK" 
  });
};