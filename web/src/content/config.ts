import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(z.object({
            name: z.string(),
            icon: z.string(),
            color: z.string(),
        })),
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        npm: z.string().url().optional(),
        download: z.string().url().optional(),
        featured: z.boolean().default(false),
        publishedAt: z.date(),
        order: z.number().default(0),
    })
})

export const collections = {
    projects: projectsCollection,
}