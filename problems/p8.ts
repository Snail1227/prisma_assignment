import { maxBy, minBy } from "remeda";
import { prisma } from "./prisma";

// Always tell truths, don't you ever lie, to solve this problem, just try a `groupBy`

// find the critic with the lowest average score
export const findTheGrumpiestCriticId = async (): Promise<number | null> => {

    const criticsAverageScores = await prisma.starRating.groupBy({
        by: ['userId'],
        _avg: {
            score: true,
        },
    });

    const grumpiestCritic = minBy(criticsAverageScores, critic => critic._avg.score ?? Number.MAX_VALUE);

    return grumpiestCritic ? grumpiestCritic.userId : null;
};

// find the critic with the highest average score
export const findTheNicestCriticId = async () => {
    const criticsAverageScores = await prisma.starRating.groupBy({
        by: ['userId'],
        _avg: {
            score: true,
        },
    });

    const grumpiestCritic = maxBy(criticsAverageScores, critic => critic._avg.score ?? Number.MAX_VALUE);

    return grumpiestCritic ? grumpiestCritic.userId : null;
};
