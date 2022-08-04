import React ,{ useState , useRef } from 'react'
import'./AddNewUser.css'

const AddNewUser = (props) => {

    const [fullname ,setfullname]=useState('')
    const [age ,setage]=useState('')
    const [clg ,setclg]=useState('')

    

    const AddUserHandler =(e)=>{
        e.preventDefault()
        const userdetails ={
            name:fullname ,
            age:age,
            clg:clg
        }
        props.userdetail(userdetails)
        // console.log(props);
    }

  return (
    <>
        
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            
            id="username"
            type="text"
            ref={enterusername}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            ref={enteruserage}
          />
           
           <label htmlFor="College">College</label>
          <input
            id="clg"
            type="text"
            ref={enteruserclg}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
   </>
  )
}

export default AddNewUser