import React from "react";

import "./SignIn.styles.scss";
import FormInput from "../form-input/FormInput.component"
import CustomButton from "../custom-button/CustomButton.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log("form submitted")
        this.setState({
            email:"",
            password:""
        })
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text"
                                name="email"
                                label="Email"
                                value={this.state.email}
                                required
                                handleChange={this.handleChange}
                                />

                    <FormInput type="password"
                                name="password"
                                label="Password"
                                value={this.state.password}
                                required
                                handleChange={this.handleChange}
                                />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} googleSignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;