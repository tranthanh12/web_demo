import React from 'react'
import Banner from './Banner'
import Overview from './Overview'
import Vision from './Visis'
import Board from './Board'

const index = () => {
  return (
    <div className='body'>
        <main>
            <Banner></Banner>
            <Overview></Overview>
            <Vision></Vision>
            <Board></Board>
        </main>
    </div>
  )
}

export default index