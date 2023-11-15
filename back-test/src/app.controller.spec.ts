import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mock } from 'node:test';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {

    const resultado = [
      {
      "id": "72ed415d254eaf088b9b6c578917ff00e2b22477",
      "committer": {
      "name": "Pablo López",
      "email": "lopez.pablo2305@gmail.com",
      "date": "2023-11-15T01:23:51Z"
      },
      "message": "Format response"
      },
      {
      "id": "f506bc1dca474996f04961900ec8dc7b30d65610",
      "committer": {
      "name": "Pablo López",
      "email": "lopez.pablo2305@gmail.com",
      "date": "2023-11-15T00:58:51Z"
      },
      "message": "first commit"
      },
      {
      "id": "b38f07f3a9b9ccfff90d7d098b8069074c31c5e9",
      "committer": {
      "name": "Pablo López",
      "email": "lopez.pablo2305@gmail.com",
      "date": "2023-11-15T00:58:07Z"
      },
      "message": "Git Ignore"
      }
    ]

    const response2 = [{"sha":"72ed415d254eaf088b9b6c578917ff00e2b22477","node_id":"C_kwDOKtkj2NoAKDcyZWQ0MTVkMjU0ZWFmMDg4YjliNmM1Nzg5MTdmZjAwZTJiMjI0Nzc","commit":{"author":{"name":"Pablo López","email":"lopez.pablo2305@gmail.com","date":"2023-11-15T01:23:51Z"},"committer":{"name":"Pablo López","email":"lopez.pablo2305@gmail.com","date":"2023-11-15T01:23:51Z"},"message":"Format response","tree":{"sha":"23f83c6fce4921d60994ef78fb452e0465ee66fc","url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/git/trees/23f83c6fce4921d60994ef78fb452e0465ee66fc"},"url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/git/commits/72ed415d254eaf088b9b6c578917ff00e2b22477","comment_count":0,"verification":{"verified":false,"reason":"unsigned","signature":null,"payload":null}},"url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/commits/72ed415d254eaf088b9b6c578917ff00e2b22477","html_url":"https://github.com/pabluwu/test-fulltimeforce/commit/72ed415d254eaf088b9b6c578917ff00e2b22477","comments_url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/commits/72ed415d254eaf088b9b6c578917ff00e2b22477/comments","author":{"login":"pabluwu","id":55241321,"node_id":"MDQ6VXNlcjU1MjQxMzIx","avatar_url":"https://avatars.githubusercontent.com/u/55241321?v=4","gravatar_id":"","url":"https://api.github.com/users/pabluwu","html_url":"https://github.com/pabluwu","followers_url":"https://api.github.com/users/pabluwu/followers","following_url":"https://api.github.com/users/pabluwu/following{/other_user}","gists_url":"https://api.github.com/users/pabluwu/gists{/gist_id}","starred_url":"https://api.github.com/users/pabluwu/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pabluwu/subscriptions","organizations_url":"https://api.github.com/users/pabluwu/orgs","repos_url":"https://api.github.com/users/pabluwu/repos","events_url":"https://api.github.com/users/pabluwu/events{/privacy}","received_events_url":"https://api.github.com/users/pabluwu/received_events","type":"User","site_admin":false},"committer":{"login":"pabluwu","id":55241321,"node_id":"MDQ6VXNlcjU1MjQxMzIx","avatar_url":"https://avatars.githubusercontent.com/u/55241321?v=4","gravatar_id":"","url":"https://api.github.com/users/pabluwu","html_url":"https://github.com/pabluwu","followers_url":"https://api.github.com/users/pabluwu/followers","following_url":"https://api.github.com/users/pabluwu/following{/other_user}","gists_url":"https://api.github.com/users/pabluwu/gists{/gist_id}","starred_url":"https://api.github.com/users/pabluwu/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pabluwu/subscriptions","organizations_url":"https://api.github.com/users/pabluwu/orgs","repos_url":"https://api.github.com/users/pabluwu/repos","events_url":"https://api.github.com/users/pabluwu/events{/privacy}","received_events_url":"https://api.github.com/users/pabluwu/received_events","type":"User","site_admin":false},"parents":[{"sha":"f506bc1dca474996f04961900ec8dc7b30d65610","url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/commits/f506bc1dca474996f04961900ec8dc7b30d65610","html_url":"https://github.com/pabluwu/test-fulltimeforce/commit/f506bc1dca474996f04961900ec8dc7b30d65610"}]},{"sha":"f506bc1dca474996f04961900ec8dc7b30d65610","node_id":"C_kwDOKtkj2NoAKGY1MDZiYzFkY2E0NzQ5OTZmMDQ5NjE5MDBlYzhkYzdiMzBkNjU2MTA","commit":{"author":{"name":"Pablo López","email":"lopez.pablo2305@gmail.com","date":"2023-11-15T00:58:51Z"},"committer":{"name":"Pablo López","email":"lopez.pablo2305@gmail.com","date":"2023-11-15T00:58:51Z"},"message":"first commit","tree":{"sha":"a7ed62c43f433849c62ae0811b1add9d1b86a10f","url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/git/trees/a7ed62c43f433849c62ae0811b1add9d1b86a10f"},"url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/git/commits/f506bc1dca474996f04961900ec8dc7b30d65610","comment_count":0,"verification":{"verified":false,"reason":"unsigned","signature":null,"payload":null}},"url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/commits/f506bc1dca474996f04961900ec8dc7b30d65610","html_url":"https://github.com/pabluwu/test-fulltimeforce/commit/f506bc1dca474996f04961900ec8dc7b30d65610","comments_url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/commits/f506bc1dca474996f04961900ec8dc7b30d65610/comments","author":{"login":"pabluwu","id":55241321,"node_id":"MDQ6VXNlcjU1MjQxMzIx","avatar_url":"https://avatars.githubusercontent.com/u/55241321?v=4","gravatar_id":"","url":"https://api.github.com/users/pabluwu","html_url":"https://github.com/pabluwu","followers_url":"https://api.github.com/users/pabluwu/followers","following_url":"https://api.github.com/users/pabluwu/following{/other_user}","gists_url":"https://api.github.com/users/pabluwu/gists{/gist_id}","starred_url":"https://api.github.com/users/pabluwu/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pabluwu/subscriptions","organizations_url":"https://api.github.com/users/pabluwu/orgs","repos_url":"https://api.github.com/users/pabluwu/repos","events_url":"https://api.github.com/users/pabluwu/events{/privacy}","received_events_url":"https://api.github.com/users/pabluwu/received_events","type":"User","site_admin":false},"committer":{"login":"pabluwu","id":55241321,"node_id":"MDQ6VXNlcjU1MjQxMzIx","avatar_url":"https://avatars.githubusercontent.com/u/55241321?v=4","gravatar_id":"","url":"https://api.github.com/users/pabluwu","html_url":"https://github.com/pabluwu","followers_url":"https://api.github.com/users/pabluwu/followers","following_url":"https://api.github.com/users/pabluwu/following{/other_user}","gists_url":"https://api.github.com/users/pabluwu/gists{/gist_id}","starred_url":"https://api.github.com/users/pabluwu/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pabluwu/subscriptions","organizations_url":"https://api.github.com/users/pabluwu/orgs","repos_url":"https://api.github.com/users/pabluwu/repos","events_url":"https://api.github.com/users/pabluwu/events{/privacy}","received_events_url":"https://api.github.com/users/pabluwu/received_events","type":"User","site_admin":false},"parents":[{"sha":"b38f07f3a9b9ccfff90d7d098b8069074c31c5e9","url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/commits/b38f07f3a9b9ccfff90d7d098b8069074c31c5e9","html_url":"https://github.com/pabluwu/test-fulltimeforce/commit/b38f07f3a9b9ccfff90d7d098b8069074c31c5e9"}]},{"sha":"b38f07f3a9b9ccfff90d7d098b8069074c31c5e9","node_id":"C_kwDOKtkj2NoAKGIzOGYwN2YzYTliOWNjZmZmOTBkN2QwOThiODA2OTA3NGMzMWM1ZTk","commit":{"author":{"name":"Pablo López","email":"lopez.pablo2305@gmail.com","date":"2023-11-15T00:58:07Z"},"committer":{"name":"Pablo López","email":"lopez.pablo2305@gmail.com","date":"2023-11-15T00:58:07Z"},"message":"Git Ignore","tree":{"sha":"0826ea1d44bfed0769ef00c860d23b57e442db58","url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/git/trees/0826ea1d44bfed0769ef00c860d23b57e442db58"},"url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/git/commits/b38f07f3a9b9ccfff90d7d098b8069074c31c5e9","comment_count":0,"verification":{"verified":false,"reason":"unsigned","signature":null,"payload":null}},"url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/commits/b38f07f3a9b9ccfff90d7d098b8069074c31c5e9","html_url":"https://github.com/pabluwu/test-fulltimeforce/commit/b38f07f3a9b9ccfff90d7d098b8069074c31c5e9","comments_url":"https://api.github.com/repos/pabluwu/test-fulltimeforce/commits/b38f07f3a9b9ccfff90d7d098b8069074c31c5e9/comments","author":{"login":"pabluwu","id":55241321,"node_id":"MDQ6VXNlcjU1MjQxMzIx","avatar_url":"https://avatars.githubusercontent.com/u/55241321?v=4","gravatar_id":"","url":"https://api.github.com/users/pabluwu","html_url":"https://github.com/pabluwu","followers_url":"https://api.github.com/users/pabluwu/followers","following_url":"https://api.github.com/users/pabluwu/following{/other_user}","gists_url":"https://api.github.com/users/pabluwu/gists{/gist_id}","starred_url":"https://api.github.com/users/pabluwu/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pabluwu/subscriptions","organizations_url":"https://api.github.com/users/pabluwu/orgs","repos_url":"https://api.github.com/users/pabluwu/repos","events_url":"https://api.github.com/users/pabluwu/events{/privacy}","received_events_url":"https://api.github.com/users/pabluwu/received_events","type":"User","site_admin":false},"committer":{"login":"pabluwu","id":55241321,"node_id":"MDQ6VXNlcjU1MjQxMzIx","avatar_url":"https://avatars.githubusercontent.com/u/55241321?v=4","gravatar_id":"","url":"https://api.github.com/users/pabluwu","html_url":"https://github.com/pabluwu","followers_url":"https://api.github.com/users/pabluwu/followers","following_url":"https://api.github.com/users/pabluwu/following{/other_user}","gists_url":"https://api.github.com/users/pabluwu/gists{/gist_id}","starred_url":"https://api.github.com/users/pabluwu/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pabluwu/subscriptions","organizations_url":"https://api.github.com/users/pabluwu/orgs","repos_url":"https://api.github.com/users/pabluwu/repos","events_url":"https://api.github.com/users/pabluwu/events{/privacy}","received_events_url":"https://api.github.com/users/pabluwu/received_events","type":"User","site_admin":false},"parents":[]}];
    it('should return JSON', async () => {
      mock.method(global,'fetch',()=>{
        return {json:()=>Promise.resolve(response2),status:200,ok:true}
      })
      expect(await appController.getCommits()).toStrictEqual(resultado);
    });

    it('Should return error 500', async () => {
      mock.method(global,'fetch',()=>{
        return {json:()=>Promise.resolve('error 500'),status:500,ok:false}
      })
      expect(await appController.getCommits()).toBe('Error 500');
    });

  });
});
