import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
    where: {
      ...payload,
    },
  });
  console.log(user);
  /*   if (phone) {
    user = await client.user.upsert({
      create: {
        name: "Anonymous",
        phone: +phone,
      },
      update: {
        // ... in case it already exists, update
      },
      where: {
        phone: +phone,
      },
    });
  } else if (email) {
    user = await client.user.upsert({
      create: {
        name: "Anonymous",
        email,
      },
      update: {
        // ... in case it already exists, update
      },
      where: {
        email,
      },
    });
  } */
  // -------------
  /*   if (email) {
    user = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      console.log("찾지 못했음, 만들겠음.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("user를 찾았습니다.");
    if (!user) {
      console.log("찾지 못했음, 만들겠음.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
    console.log(user);
  } */

  return res.status(200).end();
}

export default withHandler("POST", handler);
