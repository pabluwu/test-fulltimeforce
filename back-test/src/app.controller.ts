import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getCommits(): Promise<any> {
    return await this.appService.getCommits();
    // return Promise.resolve([
    //   {
    //   "id": "72ed415d254eaf088b9b6c578917ff00e2b22477",
    //   "committer": {
    //   "name": "Pablo López",
    //   "email": "lopez.pablo2305@gmail.com",
    //   "date": "2023-11-15T01:23:51Z"
    //   },
    //   "message": "Format response"
    //   },
    //   {
    //   "id": "f506bc1dca474996f04961900ec8dc7b30d65610",
    //   "committer": {
    //   "name": "Pablo López",
    //   "email": "lopez.pablo2305@gmail.com",
    //   "date": "2023-11-15T00:58:51Z"
    //   },
    //   "message": "first commit"
    //   },
    //   {
    //   "id": "b38f07f3a9b9ccfff90d7d098b8069074c31c5e9",
    //   "committer": {
    //   "name": "Pablo López",
    //   "email": "lopez.pablo2305@gmail.com",
    //   "date": "2023-11-15T00:58:07Z"
    //   },
    //   "message": "Git Ignore"
    //   }
    // ])
  }
}
