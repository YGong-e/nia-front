'use client'


import React, { useState, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { showToastState } from '../../data/recoil/atoms';


export default function ToastPopup (){
  
  const [showToast, setShowToast] = useRecoilState(showToastState);


  // useEffect(() => {
  //   if (showToast) {
  //     const hideTimeout = setTimeout(() => {
  //       setShowToast((prev) => ({...prev, state: true}));
  //     }, 2000);
      
  //     return () => clearTimeout(hideTimeout);
  //   }
  // }, [showToast.state]);

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg transition-opacity duration-300 opacity-0 ${showToast.state ? 'opacity-100' : ''}`}>
      
      {showToast.state && <span>{showToast.msg}</span>}
    </div>
  );
};


