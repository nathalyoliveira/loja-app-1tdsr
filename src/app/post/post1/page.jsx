import Image from "next/image";
import Link from "next/link";
import React from "react";

function Post1() {
  return (
    <div>
      <h1>Post1</h1>
      <Link href="/post">Voltar...</Link>

      <div>
        <figure>
            <Image 
            src='/img/paisagem.jpg'
            width={300}
            height={300}
            alt="Paisagem"
            />
            <figcaption><Link href="/">Home</Link></figcaption>
        
        </figure>
      </div>
    </div>
  );
}

export default Post1;
