import React from 'react';
import './formLogin.css';
function Formlogin() {
    return (
        <div style={{margin:"auto; width:60%;"}}>
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder=" " />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">First name</label>
                </div>
                <div className="input-container ic2">
                    <input id="lastname" className="input" type="text" placeholder=" " />
                    <div className="cut" />
                    <label htmlFor="lastname" className="placeholder">Last name</label>
                </div>
                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short" />
                    <label htmlFor="email" className="placeholder">Email
                    </label></div>
                <button type="text" className="submit">submit</button>
            </div>


        </div>
    );
}

export default Formlogin;