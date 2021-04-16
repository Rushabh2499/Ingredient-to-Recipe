import React, { useState } from 'react'
import { Form, FormControl, Button, Container}  from 'react-bootstrap'
import { useHistory} from 'react-router-dom'


export default function Search(){
  const [searchTerm,setSearchTerm] = useState('')
  const history = useHistory();
  const handleChange = (event)=>{
    setSearchTerm(event.target.value)
  }


  const handleClick = () =>{
    setSearchTerm(encodeURIComponent(searchTerm));
    history.push({
      pathname: '/recipes',
      search : `searchTerm=${searchTerm}`,
      state: { mode : 'Recipe'}});
  }


    return(
      <>
      <Container className="d-flex align-items-center justify-content-center" style={{padding:'0 0 0 0'}}
      >
            <div className="w-100" style={{maxWidth:"400px" , padding:"20px"}}>
        <Form  inline className="form-center">
          <FormControl type="text" placeholder="Search" value={searchTerm}
           className="mr-sm-2 inp" name="searchTerm" onChange={handleChange}/>
          <Button type="button" variant="outline-success" onClick={handleClick} >Search</Button>
        </Form>
        </div>
        </Container>

        </>
    )
}