
import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2 : 1,
        }

    }
    render(){
        const {userdata} = this.props;
        const {firstName,phone,birthDate,lastName,age,image} = userdata;
        return (
            <div className="user-card">
            {/* <h2>count:{this.state.count}</h2> */}
            {/* <h2>count2:{this.state.count2}</h2> */}
            {/* <button onClick={() => this.setState({count : this.state.count + 1})}>Increment Count</button> */}
            {/* <button onClick={() => this.setState({count2 : this.state.count2 + 1})}>Increment Count2</button> */}
            <img src={image} alt="user-image" />
            <h2>FirstName:{firstName}</h2>
            <h2>LastName:{lastName}</h2>
            <h2>birthDate:{birthDate}</h2>
            <h2>Age:{age}</h2>
            <h2>Contact:{phone}</h2>
            <h2>Email:{firstName}@gmail.com</h2>
        </div>
        )
    }
}

export default UserClass;