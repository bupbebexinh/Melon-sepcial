import React, { useState } from "react";

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
            <div style={{display: showModal ? '' : 'none' }} className="opacity-100 pointer-events-auto grid place-items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-500">
              <div 
                className="fixed bg-black bg-opacity-50 inset-0 z-1"
                onClick={(e) => setShowModal(false)}
              ></div>
              <div className="transform opacity-100 translate-y-0 w-auto my-6 mx-auto max-w-3xl transition-all duration-500 z-2">
                <div className="border-0 p-6 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-center justify-between mb-6">
                    <h5 className="text-gray-900 text-2xl font-bold mt-0 mb-0">Login</h5>
                    <button 
                      className="p-1 bg-transparent absolute top-2 right-4 text-gray-900 text-3xl leading-none outline-none focus:outline-none"
                      onClick={(e) => setShowModal(false)}
                    ><span className="text-gray-900 text-3xl block">×</span></button>
                    </div>
                    <div className="relative flex-auto mb-6">
                      <form id="loginForm">
                        <div className="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-60 sm:w-96">
                          <div className="relative">
                            <input autoComplete="on" id="email_login" name="email" type="email" className="placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-3 text-base" placeholder="Email address" required />
                            <label htmlFor="email_login" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all">Email Address*</label>
                            <div className="text-red-600">{}</div>
                          </div>
                          <div className="relative">
                            <input autoComplete="off" id="password_login" name="password" type="password" className="placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 px-3 text-base" placeholder="password" required />
                            <label htmlFor="password_login" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all">password*</label><div className="text-red-600">{}</div>
                          </div>
                        </div>
                        <button
                          className="flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-2.5 px-6 text-xs leading-normal text-white bg-green-500 hover:bg-green-700 focus:bg-green-400 active:bg-green-800 shadow-md-green hover:shadow-lg-green"
                          onClick={() => clickHandelLogin()}
                          ripple="light"
                          type="submit"
                        >Login</button>
                      </form>
                    </div>
                  <div className="flex items-center justify-end gap-4"></div>
                </div>
              </div>
            </div>
        </>
    );
}
export default ModalLogin