import React from 'react'

//slug will be auto pass to page route metadata as props obj
const Page = ({params}) => {
console.log(params)

  return <div>
    {`products : ${params.products}, ${JSON.stringify(params)}`}
    </div>  
}

export default Page