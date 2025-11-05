// app/blog/[id]/page.tsx
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type User = {
  id: number;
  name: string;
};

export const revalidate = 30; // ISR: Re-generate the page every 30 seconds

interface BlogDetailProps {
  params: { id: string };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { id } = params;

  // Fetch the post
  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!postRes.ok) throw new Error("Failed to fetch post");
  const post: Post = await postRes.json();

  // Fetch the author
  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  if (!userRes.ok) throw new Error("Failed to fetch author");
  const user: User = await userRes.json();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <p className="text-gray-500">
        <span className="font-semibold">Author:</span> {user.name}
      </p>
    </div>
  );
}
