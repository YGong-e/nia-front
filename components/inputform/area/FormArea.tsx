'use client'


import React, { useState, useEffect } from 'react';
import { areaList } from '../../../data/AreaList';
import '../../globals.css';

/**현재 위치 정보 부르기 */
import useGeoLocation from "@/services/UseGeolocation";

//React-hook-form
import { Controller, useFormContext } from "react-hook-form";

//Recoil
import { formLocationState, formLocationType } from '@/data/recoil/atoms';
import { useRecoilState } from 'recoil';


//시도 군구 행정동 Component
import Sido from './Sido';
import Sigungu from './Sigungu';
import Dong from './Dong';
import Date from './DateSelec';


//지역 리스트 받아오기
const areaJson = areaList;

export default function AreaSelect() {

    
    const { control, watch, setValue } = useFormContext();
    
    const [formLocation, setFormLocation] = useRecoilState<formLocationType>(formLocationState);   

    useGeoLocation();  
 
    //     ( async () => {
    //     const location = await useGeoLocation();    
    //     setFormLocation(location);
    //   })();
 

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">날짜/주소정보
                </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 lg:grid-cols-1">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">측정날짜</label>
                    <Date />
                </div>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">시/도</label>
                    <Sido />
                </div>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">시/군/구</label>
                    <Sigungu />
                </div>
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">읍/면/동</label>
                    <Dong />
                </div>
            </div>
        </div>


    )
}