import { Injectable } from '@nestjs/common';
import variables from './configuration';

@Injectable()
export class AppService {
  async getCommits(): Promise<any> {

    const { BASE_URL, USER, PROJECT } = variables;

    
    try {
      const response = await fetch(`${BASE_URL}/repos/${USER}/${PROJECT}/commits`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.map(element => {
        const { sha, commit } = element
        const { committer, message} = commit
        return { id : sha, committer , message };
      });

    } catch (error) {
      return 'Error 500';
    }
   
  }
}
