import { User } from "@prisma/client";
import { prisma } from "./prisma";

export const updateUsername = async (userId: number, newUsername: string): Promise<User> => {
    return await prisma.user.update({
        where: {
            id: userId,
        },
        data:{
            username: newUsername
        }
    })
};
