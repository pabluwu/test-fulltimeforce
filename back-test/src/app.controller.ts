import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('peo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getCommits(): Promise<string> {
    return await this.appService.getCommits();
  }
}
