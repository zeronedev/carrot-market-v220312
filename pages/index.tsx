import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-5">
      <input
        type="text"
        required
        placeholder="Username"
        className="border p-1 peer border-gray-400 rounded-md"
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500 ">
        이 입력은 유효하지 않습니다
      </span>
      <span className="hidden peer-valid:block peer-valid:text-teal-500">
        멋진 사용자 이름
      </span>
      <span className="hidden peer-hover:block peer-hover:text-amber-500">
        안녕하세요
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;
