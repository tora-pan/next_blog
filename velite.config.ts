import { defineConfig, defineCollection, s } from 'velite'

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const computedFields = <T extends { slug: string}>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/")
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().optional(),
      date: s.isodate(),
      content: s.mdx(),
      excerpt: s.excerpt(),
      cover: s.image(),
      published: s.boolean().default(true),
      metadata: s.metadata()
    })
    .transform(computedFields)
})

export default defineConfig({
    root: "content",
    output: {
      data: ".velite",
      assets: "public/static",
      base: "/static/",
      name: "[name]=[hash:6].[ext]",
      clean: true,
    },
    collections: { posts },
    mdx: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
})