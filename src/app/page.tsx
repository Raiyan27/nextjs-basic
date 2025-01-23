import Card from "@/components/Card";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <>
      <div className="max-w-screen-2xl mx-auto p-4">
        <h1 className="my-16 text-7xl text-center font-bold">Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              body={post.body}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
