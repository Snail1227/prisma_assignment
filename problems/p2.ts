import { User } from "@prisma/client";
import { prisma } from "./prisma";

// We want to grab the first N youngest users
// hint: The garden has leaves, I think you should rake, to give me an answer, first you should "take"
export const getNYoungestUsers = (howManyUsersToGrab: number): Promise<User[]> => {
    return prisma.user.findMany({
        take: howManyUsersToGrab,
        orderBy: {
            age: 'asc',
        },
    })
}