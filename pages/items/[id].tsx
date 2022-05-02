import type { NextPage } from "next";
import Layout from "../components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-10">
        <div className="mb-4">
          <div className="h-96 bg-slate-300" />
          <div className="flex cursor-pointer py-3 border-t border-orange-400 border-b items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <span className="text-2xl block mt-3 text-gray-900">$140</span>
            <p className="my-6 text-gray-700">
              놀라운 기술로 완성된 전문가 수준의 카메라로 어둠 속 최고의 순간도
              놓치지 마세요. 더 큰 픽셀로 더 많은 빛을 흡수하고, 슈퍼 클리어
              글래스로 빛반사를 최소화해 대낮에 찍은 듯 선명하고 디테일이
              생생하게 살아있는 밤 사진을 찍을 수 있답니다.어둡다고 촬영을
              포기하셨다면, 이젠 포기하지 마세요. 동영상 촬영에 획기적인 도약을
              이룬 나이토그래피. 조도에 맞춰 최적의 프레임 속도로 자동 조정되어
              동영상을 더 밝게 촬영해 줍니다. 프레임의 노이즈를 제거하는 수퍼
              나이트 솔루션을 탑재한 4 nm 프로세서니까. 태양 아래서든, 별빛
              아래서든 고화질의 생생한 영상을 촬영해 보세요.
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium hover:bg-orange-600 focus:ring-orange-500 ">
                Talk to seller
              </button>
              <button className="p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <svg
                  className="h-6 w-6 "
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-56 w-full bg-slate-300" />
                <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
                <span className="text-sm font-medium text-gray-900">$6</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
