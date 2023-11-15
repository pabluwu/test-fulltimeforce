import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getCommits(): Promise<any> {

    const baseUrl = 'https://api.github.com';

    async function getUser() {
      try {
        const response = await fetch(`${baseUrl}/repos/pabluwu/test-fulltimeforce/commits`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('error');
      }
    }

    const resp = await getUser();

    return resp.map(element => {
      const { sha, commit } = element
      
      const { committer, message} = commit

      return { id : sha, committer , message };
    });
    

    
  }
}
