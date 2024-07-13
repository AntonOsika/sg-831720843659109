import { useEffect } from 'react';
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { smoothScroll } from '@/lib/smoothScroll';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}