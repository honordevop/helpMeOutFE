import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
