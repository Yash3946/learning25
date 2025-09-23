import React from 'react'

export const Table = (props) => {
    //{header:["id","name"...],data:[]}
    console.log(Object.values(props.data[0]))
    console.log(props.data)
  return (
    <div>
        <table className='table'>
            <thead>
                {
                    props.header?.map((h)=>{
                        return<th>{h}</th>
                    })
                }
            </thead>
            <tbody>
                   {
                      props.data.map((row)=>{
                        //{"id":1,name:"",price:"",rating:}
                        //[1,"",100,7.9]
                        return <tr style={{backgroundColor:"pink"}}>
                            {
                                //[1,"",100,7.9
                                Object.values(row).map((d)=>{
                                    return <td>{d}</td>
                                })
                            }
                        </tr>
                      })
                   }
            </tbody>
        </table>
    </div>
  )
}