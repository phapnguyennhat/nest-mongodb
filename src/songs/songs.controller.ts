import { Body, Controller, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from 'src/dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService){}

  @Post()
  create(@Body() createSongDTO: CreateSongDTO){
    
  }
}
