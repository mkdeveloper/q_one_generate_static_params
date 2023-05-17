const getSinglePost = async ({ params }: { params: { postId: number } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data: IgetPost = await res.json();
  return data;
};

const Post = async ({ params }: { params: { postId: number } }) => {
  const data = await getSinglePost({ params });

  return (
    <div className="flex  justify-center items-center w-full h-[500px]">
      <div className="p-10 bg-gray-200 border-2 shadow-xl shadow-gray-400 w-1/2 rounded-xl">
        <p>
          <h2>Title:</h2> {data.title}
        </p>
        <p>
          <h2>Description: </h2>
          {data.body}
        </p>
      </div>
    </div>
  );
};

export default Post;

export async function generateStaticParams() {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: IgetPost[] = await post.json();
  const trimmedPost = data.splice(0, 10);

  return trimmedPost.map((post) => ({
    postId: post.id.toString(),
  }));
}

interface IgetPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
