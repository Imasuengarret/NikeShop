import React from 'react'

const Foot = ({footerAPI: {titles, links}}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <footer className='bg-theme pt-7 pb-5'>
        <div className='nike-container text-slate-200'>
          <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
            {
              titles.map((val) =>(
                <div key={val} className='grid items-center'>
                  <h1 className='text-base lg:text-lg md:text-sm uppercase font-semibold'>{val.title}</h1>
                </div>
              ))
            }
            {
              links.map((list) =>(
                <ul key={list} className=' grid items-center gap-1 mt-3 lg:-mt-0.5'>
                  {list.map((link) =>(
                    <li key={link} className='text-xs lg:text-sm'>{link.link}</li>
                  ))}
                </ul>
              ))
            }
          </div>
          <div className='mt-5 text-center'>
            <p className='text-sm'>Copyright<sup>&copy;</sup> All Right Reserved {currentYear} <span className='font-semibold'>GARRET-WEB DEVELOPER</span></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Foot
