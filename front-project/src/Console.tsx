import { useState } from 'react'
import { Card } from 'flowbite-react';



function Console() {
  return (
    <div>
      <Card href="#" className="max-w-md">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span>Name: </span>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span>Date: </span>
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span>Commit Message: </span>
        </p>
      </Card>
    </div>
  )
}

export default Console
