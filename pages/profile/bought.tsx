import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";

const Bought: NextPage = () => {
  return (
    <Layout canGoBack title="구매내역">
      <div className="flex flex-col space-y-5 py-10">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="아이폰 14"
            price={1250000}
            comments={15}
            hearts={9}
          ></Item>
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
