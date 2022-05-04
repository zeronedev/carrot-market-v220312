import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../../components/floating-button";
import Layout from "../../components/layout";

const Live: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="py-10 divide-y-[1px] space-y-4 ">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/live/${i}`}>
            <a className="pt-4 px-4">
              <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video " />
              <h1 className="text-2xl mt-2 font-bold text-gray-900">
                Galaxy S50
              </h1>
            </a>
          </Link>
        ))}
        <FloatingButton href="/live/create">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
