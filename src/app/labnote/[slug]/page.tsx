import { getNoteBySlug, getNoteSlugs } from "@/lib/mdx";
import { serialize } from "next-mdx-remote/serialize";
import PageTitle from "@/components/shared/PageTitle";
import MdxContent from "@/components/ui/MdxContent";

type Props = {
  params: Promise<{ slug: string }>; // params is now async
};

export async function generateStaticParams() {
  const slugs = await getNoteSlugs();

  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params; // ✅ Explicitly await params

  const note = await getNoteBySlug(slug);
  const mdxSource =
    typeof note.content === "string"
      ? await serialize(note.content)
      : note.content;

  return (
    <main className="min-h-screen bg-black text-green-300 px-6 py-12 font-mono">
      <div className="max-w-3xl mx-auto space-y-6">
        <PageTitle title={note.meta.title} />
        <article className="prose prose-invert prose-sm sm:prose-base text-green-200 max-w-none">
          <MdxContent source={mdxSource} />
        </article>
      </div>
    </main>
  );
}
