'use client'

import { areaList } from '@/data/AreaList';
import '../globals.css';
import React, { useState } from 'react';
//지역 리스트 받아오기
const areaJson = areaList;

export default function AreaSelect() {

    const [areaState, setAreaState] = useState({});
    
    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">주소 정보</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">                
                <div className="sm:col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        시/도
                    </label>
                    <div className="mt-2">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            {areaJson.map((item : any) => (
                            <option key = {item.sido} >{item.sido}</option>))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}