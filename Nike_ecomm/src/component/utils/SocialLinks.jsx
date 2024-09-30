import React from 'react'

const SocialLinks = ({icon}) => {
  return (
    <div>
      <img src={icon} alt="icon/social" className=' h-5 w-5 flex items-center cursor-pointer lg:w-8 lg:h-8 transition-all duration-200 hover:scale-110' />
    </div>
  )
}

export default SocialLinks
