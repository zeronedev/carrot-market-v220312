import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-300"
        rows={4}
        placeholder="질문을 입력 하세요!"
      />
      <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border-transparent rounded-md shadow-md text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Submit
      </button>
    </form>
  );
};

export default Write;
