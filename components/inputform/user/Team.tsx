'use client'


import '../../globals.css';
import React, { useState } from 'react';

//React-hook-form
import { useFormContext, Controller } from "react-hook-form";

//팀리스트 데이터 불러오기

import { teamList } from '../../../data/TeamList';

export default function Sido() {

    //useForm 값 넘기기
    const { control, setValue } = useFormContext();


    return (
        <div className="mt-2">
        <Controller
            control={control}
            name="team"
            // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
            // field안에는 value나 onBlur와 같은 함수도 있음
            // render안의 onChange를 조작해, onChange안에 들어갈 값을
            // 선택할 수 있다.
            render={({ field }) => (
                <select
                    id="team"
                    // name="country"
                    autoComplete="team-name"
                    defaultValue="선택"
                    className="block w-full h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    { ...field }
                >
                    {teamList.map((item: string, index: any) => (
                        <option key = {index}>{item}</option>))}
                </select>)} />
                </div>
    )
}