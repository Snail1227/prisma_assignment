import { prisma } from "./prisma";

// get average score for a user
export const getAverageScoreForUser = async (userId: number): Promise<number | null>=> {
    const result = await prisma.starRating.aggregate({
        where: { 
            userId: userId
        },
        _avg: {
            score: true
        }
    })

    return result._avg.score;
};
