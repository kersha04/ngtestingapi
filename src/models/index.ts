/* eslint-disable prettier/prettier */
export interface TodoItem {
    id: string;
    description: string;
}

export class TodoCreate {
    description: string;
}

export interface Song {
    id: string;
    title: string;
    artist?: {
        name: string;
        label?: string;
    };
    album?: string;
}

export class SongCreate {
    title: string;
    artist?: string;
    album?: string;
}