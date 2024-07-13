import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { smoothScroll } from '@/lib/smoothScroll';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
      <Toaster />
    </AnimatePresence>
  );
}