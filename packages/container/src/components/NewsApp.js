import React, { useRef, useEffect } from 'react';
import { mount } from 'news/NewsApp';

export default function NewsApp() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current, { basePath: '/news' });
    }
  }, []);

  return <div ref={ref} />;
}