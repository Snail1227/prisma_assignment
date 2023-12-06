import { Movie } from "@prisma/client";
import { prisma } from "./prisma";

// get All Pg-13 movies, ordered by release year descending
export const getAllPG13Movies = async (): Promise<Movie[]> => {
    return await prisma.movie.findMany({
        where: {
            parentalRating: 'PG-13'
        },
        orderBy: {
            releaseYear: 'desc' 
        }
    });
};
