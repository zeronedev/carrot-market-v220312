import type { NextPage } from "next";
import Layout from "../components/layout";
import Message from "../components/message";

const LiveDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4 ">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video " />
        <div className="mt-5">
          <h1 className="text-3xl mt-2 font-bold text-gray-900">Galaxy S50</h1>
          <span className="text-2xl block mt-3 text-gray-900">$140</span>
          <p className="my-6 text-gray-700">
            놀라운 기술로 완성된 전문가 수준의 카메라로 어둠 속 최고의 순간도
            놓치지 마세요. 더 큰 픽셀로 더 많은 빛을 흡수하고, 슈퍼 클리어
            글래스로 빛반사를 최소화해 대낮에 찍은 듯 선명하고 디테일이 생생하게
            살아있는 밤 사진을 찍을 수 있답니다.어둡다고 촬영을 포기하셨다면,
            이젠 포기하지 마세요. 동영상 촬영에 획기적인 도약을 이룬
            나이토그래피. 조도에 맞춰 최적의 프레임 속도로 자동 조정되어
            동영상을 더 밝게 촬영해 줍니다. 프레임의 노이즈를 제거하는 수퍼
            나이트 솔루션을 탑재한 4 nm 프로세서니까. 태양 아래서든, 별빛
            아래서든 고화질의 생생한 영상을 촬영해 보세요.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>
          <div className="py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4">
            <Message message="안녕하세요 얼마에 판매하시나요?" />
            <Message message="2만원 입니다." reversed />
            <Message message="너무 비싸요." />
          </div>
          <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
