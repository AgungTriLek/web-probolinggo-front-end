export interface CategoryTypes {
    name: string;
    _id: string;
    __v: number;
}

export interface AllArticleTypes {
    category: CategoryTypes;
    createdAt: string;
    date: string;
    file: string;
    status: string;
    texts: string;
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

export interface AllPengumuman {
    _id: string;
    title: string;
    category: string;
    file: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface AllKecamatan {
    _id: string,
    title: string;
    category: CategoryTypes,
    file: string,
    createdAt: string;
    updatedAt: string;
    __v: number;
}
