import { User } from "@prisma/client";
import { prisma } from "./prisma";

export const createUserWithData = async ({
  username,
  age,
}: {
  username: string;
  age: number;
}): Promise<User> => {
  return await prisma.user.create({
    data: {
      username,
      age,
    },
  });
};