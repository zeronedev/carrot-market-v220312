import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className="px-4 py-10 space-y-4">
        <Input name="name" label="Name" type="text" required />
        <Input
          name="price"
          label="가격"
          type="text"
          kind="price"
          placeholder="0"
          required
        />
        <TextArea name="description" label="설명" />
        <Button text="Go Live" />
      </form>
    </Layout>
  );
};

export default Create;
