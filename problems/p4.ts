import { prisma } from "./prisma";

type PG13MovieInfo = {
    releaseYear: number;
    parentalRating: string;
};

// get All Pg-13 movies, ordered by release year descending
export const getAllPG13Movies = async (): Promise<PG13MovieInfo[]> => {
    return await prisma.movie.findMany({
        orderBy: {
            releaseYear: 'desc' 
        },
        where: {
            parentalRating: 'PG-13'
        },
        select: {
            releaseYear: true,
            parentalRating: true
        }
    });
};
