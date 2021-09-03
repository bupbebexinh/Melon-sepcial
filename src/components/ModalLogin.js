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
                                <input autoComplete="on" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 px-3 text-base" placeholder="Email address" required value={this.state.fields.emailid} onChange={this.handleChange} />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address*</label>
                                <div className="text-red-600">{this.state.errors.emailid}</div>
                            </div>
                            <div className="relative">
                                <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 px-3 text-base" placeholder="password" required  value={this.state.fields.password} onChange={this.handleChange} />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">password*</label><div className="text-red-600">{this.state.errors.password}</div>
                            </div>
                        </div>
                        <Button
                            color="green"
                            // onClick={() => clickHandelLogin()}
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