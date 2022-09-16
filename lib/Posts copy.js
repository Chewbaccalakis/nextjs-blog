export function getAllPosts() {
    const posts = getSlugs()
      .map((slug) => {
        return getFrontMatter(slug);
      })
      .filter((post) => post != null || post != undefined) // Filter post if it is not published
      .sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) return -1;
        if (new Date(a.date) < new Date(b.date)) return 1;
        return 0;
      });
    return posts;
}