import React from 'react';
import Input from './Input' ;
import Auth from './auth.svg' ;

const Login = props => {
    return (
        <div className="base-container">
            <div className="header">LOGIN</div>
            <div className="content">
                <div className="image">
                    <img src={Auth} />
                </div>
                <div>
                    <form>
                        <Input
                        type="text"
                        label="Username"
                        id="name"
                        Placeholder="Enter your full name"
                        // value={enteredName}  
                        // onChange={nameChangeHandler}
                        />
                        <Input
                        type="text"
                        label="Password"
                        id="caption"
                        Placeholder="Be creative with the caption"
                        // value={enteredCaption}
                        // onChange={captionChangeHandler}
                        />
                    
                    </form>
                </div>
            </div>
            <div className="footer">
                <button type="submit">SUBMIT</button>
            </div>
        </div>
    ) ;

}



export default Login ;