import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

export default function ModalRegist() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <p 
                className="text-bold cursor-pointer hover:underline"
                onClick={(e) => setShowModal(true)} >Regist</p>

            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Regist
                </ModalHeader>
                <ModalBody>
                  <form id="loginRegist">
                    <div className="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-60 sm:w-96">
                      <div className="relative">
                        <input autoComplete="on" id="email_regist" name="email" type="email" className="form-ipt" placeholder="Email address" required />
                        <label htmlFor="email_regist" className="form-lbl">Email Address*</label>
                      </div>
                      <div className="relative">
                        <input autoComplete="off" id="password_regist" name="password" type="password" className="form-ipt" placeholder="password" required />
                        <label htmlFor="password_regist" className="form-lbl">Password*</label>
                      </div>
                      <div className="relative">
                        <input autoComplete="off" id="password_regist2" name="password" type="password_regist2" className="form-ipt" placeholder="password_regist2" required />
                        <label htmlFor="password_regist2" className="form-lbl">Confirm Password*</label>
                      </div>
                    </div>
                    <Button
                      color="green"
                      onClick={(e) => setShowModal(false)}
                      ripple="light"
                    >
                      Register
                    </Button>
                  </form>
                </ModalBody>
                <ModalFooter>
                    
                </ModalFooter>
            </Modal>
        </>
    );
}