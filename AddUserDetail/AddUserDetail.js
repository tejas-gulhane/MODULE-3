import React ,{useState} from 'react'
// import ShowAddedUser from './ShowAddedUser'

const AddUserDetail = (props) => {
  const [first, setfirst] = useState("")
   
  return (
    <div>
      {
      
        props.userarr.map( (newuser,index) =>{
         return  <div id={props.id}>
            <h1>{newuser.name}</h1>
            <h1>{newuser.age}</h1>
            <h1>{newuser.clg}</h1>
          </div>
        })
      }
      
    </div>
  )
}

export default AddUserDetail