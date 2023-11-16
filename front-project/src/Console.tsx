import { useState, useEffect } from 'react'
import { Card } from 'flowbite-react';

interface Committer{
  name: string;
  date: string;
  email: string;
}


interface Commit {
  id: string;
  committer: Committer;
  message: string;
}

function Console() {

  const [data, setData] = useState<Commit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/');

        const result: Commit[] = await response.json();

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      { data.map((item)=>(
        <Card className="max-w-lg mt-2">
          <h4 className="break-words text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span>Id: </span> {  item.id }
          </h4>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span>Name: </span> { item.committer.name } 
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span>Date: </span> {  item.committer.date }
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span>Commit Message: </span> { item.message }
          </p>
        </Card>
      ))}
    </div>
  )
}

export default Console
