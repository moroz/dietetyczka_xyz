import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import { getAllPages, getPageData } from "../lib/blog";
import { formatMarkdown } from "../lib/markdown";

interface Props {
  page: any;
  html: any;
}

const DynamicPage: React.FC<Props> = ({ page, html }) => {
  return (
    <Layout title={page.title}>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const page = await getPageData(slug);
  const html = await formatMarkdown(page.content);

  return {
    props: {
      page,
      html
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPages();

  return {
    paths: posts.map((slug) => {
      return {
        params: {
          slug
        }
      };
    }),
    fallback: false
  };
};

export default DynamicPage;
