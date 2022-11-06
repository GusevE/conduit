export interface Author {
    bio: any;
    following: boolean;
    image: string;
    username: string;
  }
  
  export interface Articles {
    author: Author;
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: string[];
    title: string;
    updatedAt: string;
  }

  export interface Comment {
    author: Author
    body: string;
    createdAt: string;
    id: number;
    updatedAt: string;
  }