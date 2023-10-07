import Link from "next/link";
import React from "react";

function Post() {
  return (
    <div>
      <h1>Post</h1>
      <ul>
        <li><Link href="/">Voltar...</Link></li>
        <li><Link href="/post/post1">Post1</Link></li>
        <li><Link href="/post/post2">Post2</Link></li>
      </ul>
    </div>
  );
}

export default Post;
