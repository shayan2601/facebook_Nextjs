import { useSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Login from "./login";

export default function Home() {
  const [session] = useSession();

  return (
    <div className="h-screen">
      {!session ? (
        <Login />
      ) : (
        <>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <header className=" min-w-max sticky top-0 z-50">
            <Header />
          </header>
          <main style={{ height: "91vh" }} className="flex items-start mx-auto">
            <div
              style={{ flex: 0.27 }}
              className="overflow-y-auto scrollbar-hide h-full relative "
            >
              <div className="hidden lg:inline-flex ">
                <Sidebar />
              </div>
            </div>

            <div
              className=" mx-auto overflow-y-auto h-full scrollbar-hide px-6  max-w-2xl "
              style={{ flex: 0.5 }}
            >
              <Feed />
            </div>

            <div
              className="border-4 border-red-400 hidden md:inline-flex"
              style={{ flex: 0.23 }}
            >
              <Widgets />
            </div>
          </main>
        </>
      )}
    </div>
  );
}
