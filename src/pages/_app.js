import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Loader from "@/components/Loader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[2000px] relative">
        {/* Fixed header */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
          <div className="w-full max-w-[2000px]">
            <Header data={pageProps?.cities} />
          </div>
        </div>

        {/* Loader overlay */}
        {loading && <Loader />}

        {/* Main content */}
        <div className="pt-[70px]">
          <Component {...pageProps} />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
