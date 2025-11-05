export const dynamic = "force-dynamic"; // SSR mode

export default async function AboutPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store",
  });
  const user = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About the Author</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}
