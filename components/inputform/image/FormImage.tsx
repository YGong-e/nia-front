'use client'


import '../../globals.css';
import React from 'react';
// import * as _ from 'lodash';

//React-hook-form
import { Controller, useFormContext } from "react-hook-form";

//getOcr
import { useRecoilState } from 'recoil';
import { OCRValueState } from '@/data/recoil/atoms';
import { getOcr } from '@/services/GetOcr';

export default function Sido() {

  //recoil값 받아오기 
  const [OCRvalue, setOCRvalue] = useRecoilState(OCRValueState);

  //useForm 값 넘기기
  const { control, register, setValue } = useFormContext();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      getOcr(file, setOCRvalue);

      console.log(OCRvalue);
    }
  }

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">측정결과 이미지파일 첨부</h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-1 lg:grid-cols-1">
        <input
          type="file"
          id="file"
          {...register('file')}
          onChange={handleImageChange}
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>
    </div>)

}