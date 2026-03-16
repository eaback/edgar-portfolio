import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { POSTS, getPost, pick } from "@/lib/posts";
import BlogPostContent from "@/components/sections/BlogPostContent";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: pick(post.title, locale), description: pick(post.description, locale) };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <BlogPostContent
      post={post}
      locale={locale}
      t={{
        back_to_blog: t("back_to_blog"),
        min_read: t("min_read"),
        cta_box_title: t("cta_box_title"),
        cta_box_body: t("cta_box_body"),
        cta_box_link: t("cta_box_link"),
      }}
    />
  );
}
