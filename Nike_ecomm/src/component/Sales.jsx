import React from 'react'
import Title from './Title'
import Item from './Item'

const Sales = ({ifExists,endpoint: {title, items}}) => {
    // console.log(endpoint);
    
  return (
    <div className='nike-container '>
      <div>
        <Title title={title}/>
        <div className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-col-1 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-4 md:grid-cols-2'}`}>
            {
                items?.map((item, i) =>(

                    <Item {...item} key={i} ifExists={ifExists}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Sales
