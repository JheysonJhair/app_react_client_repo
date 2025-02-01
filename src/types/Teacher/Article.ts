export interface Article {
  id?:number;
  title: string;
  link: string;
  doi: string;
  articleType?: number;
  date: string;
  status: number;
  description?: string;
  summary?: string;
}
