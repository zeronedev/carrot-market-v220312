import type { NextPage } from "next";
import Layout from "../components/layout";
import Message from "../components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="zeronedev">
      <div className="py-10 pb-16 px-4 space-y-4">
        <Message message="안녕하세요 얼마에 판매하시나요?" />
        <Message message="2만원 입니다." reversed />
        <Message message="너무 비싸요." />
        <form className="fixed py-2 bg-white  bottom-0 inset-x-0">
          <div className="flex relative items-center">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500 "
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
