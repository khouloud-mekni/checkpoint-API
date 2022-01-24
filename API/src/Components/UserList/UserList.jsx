import React , {useState , useEffect}from 'react';
import axios from 'axios'
import {Card} from 'react-bootstrap'
const UserList = () => {
    const [user,setUser]= useState([])
    const getData = ()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{setUser(res.data)})
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getData()
    }, [])
    return (
        <div className='Lcard'>
            {user.map((user)=>(
                <Card style={{width:'20rem',margin: '2rem' }}>
                <Card.Body>
                    
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                Username: {user.username} <br/>
                Email : {user.email}    <br/>
                Address : {user.address.street + user.address.suite}/{user.address.city}-{user.address.zipcode} <br/>
                </Card.Text>
                </Card.Body>
            </Card>
            ))}
            
        </div>
    )
};

export default UserList;
