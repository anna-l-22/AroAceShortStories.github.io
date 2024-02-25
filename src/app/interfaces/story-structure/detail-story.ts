import { Author } from "./author";
import { DetailIdentity } from "./detail-identity";
import { Genre } from "./genre";
import { Series } from "./series";
import { Warning } from "./warning";
import { Source } from "./source";

export interface DetailStory {
    id: number;
    title: string;
    author: Author;
    source: Source;
    genres: Genre[];
    identities: DetailIdentity[];
    link?: string;    
    description: string;
    warning: Warning[];
    series?: Series;
}