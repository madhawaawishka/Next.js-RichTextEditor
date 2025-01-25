'use client';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@/app/component/RichTextEditot'), { 
  ssr: false 
});


export default function Home() {
  return (
    <div>
      <h1 className="text-center font-bold my-5">RichTextEdior That you Need</h1>     
      <div>
        <RichTextEditor/>
      </div>
    </div>
  );
}
