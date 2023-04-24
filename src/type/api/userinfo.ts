import { Post } from "./post";

export type UserInfo = {
    /* user型内のデータ */
    id: number;
    name: string;
    username: string;
    password: string; /* phone */
    /* post型内のデータ */
    tweets: Post[];
}
