import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getCommits(): Promise<any> {
    const token = 'YOUR_PERSONAL_ACCESS_TOKEN';

    // pabluwu/prueba-tecnica
    const baseUrl = 'https://api.github.com';

    async function getUser() {
      try {
        const response = await fetch(`${baseUrl}/repos/pabluwu/prueba-tecnica/commits`, {
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

    const resp = getUser();
    
    return resp; 
    
  }
}
