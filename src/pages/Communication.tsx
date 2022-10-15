import React from 'react'
import Header from '../components/Header'

const Communication = () => {
  return (
    <div className='background-img h-screen'>
      <Header />
      <div className="container">
        <div className='title mx-auto mt-28'>
          <h1 className='text-center text-4xl'>
            Привет, читатель! Я, создатель этого сайта.
            Если ты зашел на эту страницу, то наверное ты хочешь связаться со мной.
            Я буду рад выслушать твои предложения или жалобы по ссылке ниже.
          </h1>
          <div className='m-auto ml-80 '>
            <a href="https://vk.com/f1shka0ff" className='nav-item'>Cвязаться со мной</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Communication