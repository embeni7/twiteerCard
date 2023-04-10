import React, { useState } from 'react'
import './TwitterCard.css'

function TwitterCard({name, userName, initialIsFollowing}) {
  const [isFollowing, setisFollowing] = useState(initialIsFollowing)
  const textFollowing = isFollowing ? 'Seguir' : 'Siguiendo'
  const isFollowingClass = !isFollowing ? 'tw-followCard-button' : 'tw-followCard-button is-following'
  const toggleFollowing = ()=>{
    
    setisFollowing(!isFollowing);
    
  }
  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img
        className='tw-followCard-avatar'
        alt='El avatar de midudev'
        src={`https://unavatar.io/${userName}`}
      />
      <div className='tw-followCard-info'>
        <strong>{name}</strong>
        <span className='tw-followCard-infoUserName'>@{userName}</span>
      </div>
    </header>

    <aside>
      <button onClick={toggleFollowing} className={isFollowingClass}>
        <span className='tw-followCard-text'>{textFollowing}</span>
        <span className='tw-followCard-text tw-followCard-stopFollow'>Dejar de seguir</span>
      </button>
    </aside>
  </article>
  )
}

export default TwitterCard