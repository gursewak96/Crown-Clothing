import React from "react";

import "./SignUp.styles.scss";
import CustomeButton from "../custom-button/CustomButton.component";
import FormInput from "../form-input/FormInput.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName:"",
            email:"",
            password: '',
            confirmPassword:""
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
        } catch (error) {
            console.log(error)
        }

        this.setState({
            displayName:"",
            email:"",
            password: '',
            confirmPassword:""
        })
    }

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput
                        type="text"
                        value={displayName}
                        name="displayName"
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        value={email}
                        name="email"
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        value={password}
                        name="password"
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        value={confirmPassword}
                        name="confirmPassword"
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomeButton type="submit">Sign Up</CustomeButton>
                </form>
            </div>
        )
    }
}

export default SignUp;