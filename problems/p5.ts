import { prisma } from "./prisma";
import { Movie } from "@prisma/client";

// hint:find all stars with the movies "included" on, then good ol' javascript should finish the job
// This one should require more javascript work than the previous ones
export const getAllMoviesWithAverageScoreOverN = async (n: number): Promise<Movie[]> => {
    const moviesWithRatings = await prisma.movie.findMany({
        include: {
            starRatings: true,
        },
    });

    const moviesWithAverageAboveN = moviesWithRatings.filter((movie) => {
        const totalScore = movie.starRatings.reduce((acc, rating) => acc + rating.score, 0);
        const averageScore = movie.starRatings.length > 0 ? totalScore / movie.starRatings.length : 0;

        return averageScore > n;
    });

    return moviesWithAverageAboveN.map((movie) => ({
        ...movie,
        starRatings: undefined
    }));
};