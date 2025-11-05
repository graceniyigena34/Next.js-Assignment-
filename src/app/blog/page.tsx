// app/blog/page.tsx
export const revalidate = false; // SSG: generate once at build time

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function BlogPage() {
  // Fetch posts from mock API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }
  const posts: Post[] = await res.json();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border rounded p-4 hover:shadow-md transition">
            <a
              href={`/blog/${post.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </a>
            <p className="text-gray-700 mt-2">
              {post.body.substring(0, 100)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

