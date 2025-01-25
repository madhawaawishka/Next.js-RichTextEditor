'use client';
import dynamic from 'next/dynamic';
import React, { useRef,useState } from 'react';
const RichTextEditor = dynamic(() => import('@/app/component/RichTextEditot'), { 
  ssr: false 
});

// Define the RichTextEditorHandle type
type RichTextEditorHandle = {
  getContent: () => string;
};




export default function Home() {
  const editorRef = useRef<RichTextEditorHandle>(null); // Ref for RichTextEditor
  const [editorContent, setEditorContent] = useState<string>(''); // State to store the editor content

  const handleGetContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent(); // Get the editor content
      setEditorContent(content); // Update the state with the content
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center font-bold my-5 text-xl">Rich Text Editor</h1>
      <div>
        <RichTextEditor ref={editorRef} />
      </div>
      <button
        onClick={handleGetContent}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded flex "
      >
        Show Content
      </button>
      <div className="mt-4">
        <h2 className="font-bold text-lg">Editor Content:</h2>
        <div
          className="border p-4 rounded bg-gray-50"
          dangerouslySetInnerHTML={{ __html: editorContent }}
        />
      </div>
    </div>
  );
}