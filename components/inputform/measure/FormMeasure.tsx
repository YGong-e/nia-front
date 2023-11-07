'use client'

import React, { useState, useEffect } from 'react';

import { areaList } from '../../../data/AreaList';
import '../../globals.css';


//React-hook-form
import { Controller, useFormContext } from "react-hook-form";

//recoil 
import { useRecoilState } from 'recoil';
import { OCRValueState } from '@/data/recoil/atoms';

//팀 대상 Component
import Inout from './Inout';





//지역 리스트 받아오기
const areaJson = areaList;

export default function AreaSelect() {

    const { control, watch, setValue } = useFormContext();

    //recoil값 받아오기 
    const [OCRvalue, setOCRvalue] = useRecoilState(OCRValueState);

    const inputTitle = [{
        key: 'dl',
        title: 'DL속도',
        placeholder: 'DL속도입력',
    },
    {
        key: 'ul',
        title: 'UL속도',
        placeholder: 'UL속도입력',
    }
        , {
        key: 'phoneType',
        title: '단말 기종',
        placeholder: '단말기종 입력',
    },];


    //recoil 값 변경시 react hook form값 자동업데이트

    useEffect(() => {
        setValue('dl', OCRvalue.dl)
        setValue('ul', OCRvalue.ul)
    }, [OCRvalue]);



    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">측정결과 입력</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 lg:grid-cols-1">
                {
                    inputTitle.map((item:any, index: any) => (
                        <div key ={index}>
                            <Controller
                                control={control}
                                name={item.key}
                                // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
                                // field안에는 value나 onBlur와 같은 함수도 있음
                                // render안의 onChange를 조작해, onChange안에 들어갈 값을
                                // 선택할 수 있다.
                                render={({ field }) => (

                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            {item.title}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                id="first-name"
                                                className="block w-full h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                {...field}
                                            />
                                        </div>
                                    </div>)} /></div>
                    ))}
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">실내/실외</label>

                    <Inout />
                </div>
            </div>
        </div>


    )
}