// lib/generateRSS.js

import { writeFileSync } from "fs";
import { getAllPosts } from "./posts";
import RSS from "rss";
export default async function getRSS() {
  const siteURL = "https://yourdomain.com";
  const allBlogs = getAllPosts();

  const feed = new RSS({
    title: "Your Name",
    description: "your description",
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Your Name`,
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/blogs/${post.slug}`,
      date: post.date,
      description: post.excerpt,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
