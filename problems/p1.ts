import { User } from "@prisma/client";
import { prisma } from "./prisma";


// Hint: look up "orderBy"
// get an array of all users
export const getAllUsers = (): Promise<User[]> => {
    return prisma.user.findMany({
        orderBy: {
            username: 'asc'
        },
    });
};