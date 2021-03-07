/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongCreate } from 'src/models';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private service: SongsService) { }

    @Get()
    getSongs() {
        return {
            data: this.service.getAll()
        }
    }

    @Post()
    addSong(@Body() song: SongCreate) {
        const response = this.service.addOne(song);
        return response;
    }
}
