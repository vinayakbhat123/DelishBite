import { User_api } from '../../utils/constant'
import React from 'react'
import UserClass from './UserClass'
import Shimmer from './Shimmer';

class About extends React.Component{
  constructor(){
    super();
    this.state ={
      Users: null
    }
  }
  
  async componentDidMount(){
      try {
      const data =  await fetch(User_api);
      const json = await data.json();
      this.setState({Users:json?.users});
      // console.log(json?.users);
    } catch (error) {
      console.log("Error occured while fetching users",error);
    }
 }
  render(){
    const {Users} = this.state;
     return Users===null ? <Shimmer /> :(
    <div className='about-container p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen'>
       <h1 className='text-5xl font-extrabold mb-6 text-gray-900 text-center'>About Us:</h1>
       <h2 className='text-xl text-gray-600 mb-10 text-center'>
        <p className='leading-relaxed max-w-3xl mx-auto'>We are a food delivery service dedicated to bringing you the best meals from your favorite restaurants.
        Our mission is to make food delivery easy, convenient, and enjoyable for everyone.....</p>
        </h2>
        <h2 className='text-3xl font-bold mb-8 text-gray-800'>Our Team Members: </h2>
        <div className='user-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
       { Users.map((user,index) =>(
          <UserClass key={user.index  || index} userdata = {user}  /> 
        )) }
      </div>  
    </div>
  )
  }
}

export default About