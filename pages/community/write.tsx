import type { NextPage } from "next";
import Button from "../components/button";
import Layout from "../components/layout";
import TextArea from "../components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="게시물 작성">
      <form className="p-4 space-y-4 ">
        <TextArea placeholder="질문을 입력 하세요!" required />
        <Button text="확인" />
      </form>
    </Layout>
  );
};

export default Write;
