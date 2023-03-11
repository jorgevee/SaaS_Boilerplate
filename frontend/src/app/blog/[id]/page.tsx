import { GET_SINGLE_BLOG, client } from "../../graphql/quries";

export default async function singleBlog({ params }: any) {
  const { blogs } = await client.request(GET_SINGLE_BLOG, { slug: params.id });
  return (
    <div className="max-w-2xl mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">
        {blogs.data[0].attributes.title}
      </h1>
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: blogs.data[0].attributes.content,
          }}
        />
      </div>
    </div>
  );
}
