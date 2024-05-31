import { Injectable } from '@nestjs/common';
import { SongSchema } from './songs/schemas/songs';

@Injectable()
export class AppService {
  getHello() {
   
    return SongSchema;
  }
}
