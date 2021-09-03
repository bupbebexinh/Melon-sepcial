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
                  <div className="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-60 sm:w-96">
                    <div className="relative">
                      <input autoComplete="on" id="email_regist" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 px-3 text-base" placeholder="Email address" required />
                      <label htmlFor="email_regist" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address*</label>
                    </div>
                    <div className="relative">
                      <input autoComplete="off" id="password_regist" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 px-3 text-base" placeholder="password" required />
                      <label htmlFor="password_regist" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password*</label>
                    </div>
                    <div className="relative">
                      <input autoComplete="off" id="confirmPassword" name="password" type="confirmPassword" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 px-3 text-base" placeholder="confirmPassword" required />
                      <label htmlFor="confirmPassword" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password*</label>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="green"
                        onClick={(e) => setShowModal(false)}
                        ripple="light"
                    >
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}