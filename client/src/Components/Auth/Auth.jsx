import React, {useState} from "react";
import "./Auth.scss";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Button from "../Button";

function Auth() {
    const [isAuthWindowVisible, setIsAuthWindowVisible] = useState(false)
    const [isRegisterWindowOpen, setIsRegisterWindowOpen] = useState(false)
    const [succesMessage, setSuccesMessage] = useState(null)

    return (
        <>
            <button className="auth-button" onClick={() => {
                setIsAuthWindowVisible(true)
            }}>
                <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 1.2A4.8 4.8 0 1 0 16.8 6 4.805 4.805 0 0 0 12 1.2zm0 8.6A3.8 3.8 0 1 1 15.8 6 3.804 3.804 0 0 1 12 9.8zM20 22H4v-4.5A5.506 5.506 0 0 1 9.5 12h5a5.506 5.506 0 0 1 5.5 5.5zM5 21h14v-3.5a4.505 4.505 0 0 0-4.5-4.5h-5A4.505 4.505 0 0 0 5 17.5z"/>
                    <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
            </button>
            <div className={`auth-modal__overlay auth-modal__overlay--${isAuthWindowVisible ? "visible" : "hidden"}`}>
                <div className="auth-modal__content">
                    <Button
                        text="x"
                        btnClick={()=>{
                            setIsAuthWindowVisible(false)
                            setIsRegisterWindowOpen(false)
                        }}
                        btnStyles="auth--close"
                    />
                    {succesMessage && <p className="auth--succes-message">{succesMessage}</p> }
                    {!isRegisterWindowOpen && <Login
                        setIsAuthWindowVisible={setIsAuthWindowVisible}
                        setIsRegisterWindowOpen={setIsRegisterWindowOpen}
                    />}
                    {isRegisterWindowOpen && <Registration
                        setIsRegisterWindowOpen={setIsRegisterWindowOpen}
                        setSuccesMessage={setSuccesMessage}
                    />}
                </div>
            </div>
        </>
    )
}


// Auth.propTypes = {
//
// }


export default Auth;
