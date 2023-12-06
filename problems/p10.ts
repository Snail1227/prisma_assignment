import { prisma } from "./prisma";

// Deleting a thing, only works swell, if things that reference it are deleted as well
export const deleteAllUsersWithAgeUnderN = async (n: number): Promise<number> => {
    const result = await prisma.user.deleteMany({
        where: {
            age: {
                lt: n,
            }
        }
    });

    return result.count; // Returns the count of deleted user records
};