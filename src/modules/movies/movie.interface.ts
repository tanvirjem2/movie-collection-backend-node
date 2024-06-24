
// ---- Here, we will use a string, denoted by a lowercase "s" ----

export type TReview = {
    email: string;
    rating: number;
    comment: string;
}


export type TMovie = {
    title: string;
    description: string;
    releaseDate: Date;
    genre: string;
    reviews: [TReview];
    slug: string;
    viewCount: number;
    isDeleted?: boolean;
}