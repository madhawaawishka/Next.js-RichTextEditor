'use client';

import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles

const RichTextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null); // Define the type for editorRef
  const quillRef = useRef<Quill | null>(null); // Define the type for quillRef

  useEffect(() => {
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [        
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        },
        placeholder: 'Write something...',
      });
    }

    // Cleanup function to avoid memory leaks
    return () => {
      if (quillRef.current) {
        quillRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div ref={editorRef} style={{ height: '300px' }} />
    </div>
  );
};

export default RichTextEditor;