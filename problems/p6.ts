import { Movie } from "@prisma/client";
import { prisma } from "./prisma";

// find all movies that a user has watched
export const findAllMoviesThatAUserWatched = async (userId: number): Promise<Movie[]> => {
    const starRating = await prisma.starRating.findMany({
        where: {
            userId: userId
        },
        include: {
            movie: true
        }
    })

    return starRating.map(rating => rating.movie);
};
