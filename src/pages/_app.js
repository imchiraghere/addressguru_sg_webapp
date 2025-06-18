import Footer from "@/layout/footer";
import Header from "@/layout/header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex justify-center">
      {/* Main container limited to max-w-[1440px] */}
      <div className="w-full max-w-[2000px] relative">
        {/* Fixed header, centered */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
          <div className="w-full max-w-[2000px]">
            <Header data={pageProps?.cities} />
          </div>
        </div>

        {/* Add padding top to avoid content going behind fixed header */}
        <div className="pt-[70px] ">
          <Component {...pageProps} />
        </div>

        {/* Footer */}
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}


