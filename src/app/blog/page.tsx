import Link from "next/link";

const getPost = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
};

interface IgetPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const blog = async () => {
  const data: IgetPost[] = await getPost();
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1>Posts</h1>
      {data.map((elm) => (
        <div key={elm.id} className="">
          <div>
            <Link href={`/blog/${elm.id}`}>
              {elm.id}: {elm.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default blog;
