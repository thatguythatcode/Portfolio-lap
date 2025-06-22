"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
  source: MDXRemoteSerializeResult;
};

export default function MdxContent({ source }: Props) {
  return <MDXRemote {...source} />;
}
