import React from 'react'
import Header from './Header'

const Welcome = () => {
    return (
        <>
            <Header />
            <div style={{
      backgroundImage: 'url("https://source.unsplash.com/random")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#2196f3' }}>Welcome to Chitter</h1>
      <p>Chitter is a forum or social media platform that allows users to post short messages, called "peeps".</p>
      <p>Join the conversation and share your thoughts with others on Chitter!</p>
      <form action="/register">
      <button style={{
        backgroundColor: '#2196f3',
        color: 'white',
        padding: '12px',
        borderRadius: '4px'
      }} link="true">Sign up now</button>
      </form>
    </div>
    </div>
      </>
  )
}

export default Welcome