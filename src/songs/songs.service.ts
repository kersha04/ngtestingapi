/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Song, SongCreate } from 'src/models';
import * as cuid from 'cuid';
@Injectable()
export class SongsService {

    data: Song[] = [
        { id: '1', title: 'No Sleep Till Brooklyn', artist: { name: 'Beastie Boys', label: 'Capitol' } },
        { id: '2', title: 'White Elephant', artist: { name: 'Nick Cave and Warren Ellis' }, album: 'Carnage' },
        { id: '3', title: 'O Fortuna', artist: { name: 'Cleveland Orchestra', label: 'Columbia' }, album: 'Carmina Burana' }
    ]

    getAll() {
        return this.data;
    }

    addOne(song: SongCreate) {
        const songToAdd: Song = {
            id: cuid(),
            title: song.title,
            album: song.album
        };
        if (song.artist) {
            songToAdd.artist = {
                name: song.artist
            }
        };
        this.data = [...this.data, songToAdd];
        return songToAdd;
    }
}
