export interface Section {
  title: string;
  content: string[];
}

export interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  tags: string[];
  description: string;
  thumbnail: string;
  image: string;
  sections: Section[];
}

export type SearchParams = {
  [key: string]: string;
};

export type FilterAccumulator = {
  title: Blog[];
  tags: Blog[];
  description: Blog[];
};
