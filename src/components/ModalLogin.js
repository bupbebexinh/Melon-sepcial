import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

const ModalLogin = ({setLogin}) => {
    const [showModal, setShowModal] = React.useState(false);

    function clickHandelLogin() {
        setLogin(true);
        setShowModal(false);
    }

    return (
        <>
            <p 
                className="text-bold cursor-pointer hover:underline"
                onClick={(e) => setShowModal(true)} >Login</p>

            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <form id="loginForm">
                        <div className="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-60 sm:w-96">
                            <div className="relative">
                                <input autoComplete="on" id="email" name="email" type="email" className="form-ipt" placeholder="Email address" required />
                                <label htmlFor="email" className="form-lbl">Email Address*</label>
                                <div className="text-red-600">{}</div>
                            </div>
                            <div className="relative">
                                <input autoComplete="off" id="password" name="password" type="password" className="form-ipt" placeholder="password" required />
                                <label htmlFor="password" className="form-lbl">password*</label><div className="text-red-600">{}</div>
                            </div>
                        </div>
                        <Button
                            color="green"
                            onClick={() => clickHandelLogin()}
                            ripple="light"
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>
                  
                </ModalBody>
                <ModalFooter>
                    
                </ModalFooter>
            </Modal>
        </>
    );
}
export default ModalLogin