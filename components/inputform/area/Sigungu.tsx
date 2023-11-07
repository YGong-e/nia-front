'use client'


import '../../globals.css';
import React, { useState, useEffect } from 'react';
// import * as _ from 'lodash';

//React-hook-form
import { Controller, useFormContext } from "react-hook-form";

/**현재 위치 정보 부르기 */
import useGeoLocation from "@/services/UseGeolocation";

//Recoil
import { formLocationState, formLocationType } from '@/data/recoil/atoms';
import { useRecoilState } from 'recoil';

//시군구읍면동 리스트
import { areaList } from '../../../data/AreaList';
import { log } from 'console';
import { Button } from '@mui/material';

interface propsType {
    control: any;
    sidoName: string;
    setValue: any;
}

//지역 리스트 받아오기
const areaJson = areaList;

export default function sido() {

    //useForm 값 넘기기
    const { control, watch, setValue, getValues } = useFormContext();
    const sidoName = watch('sido');

    /**현재 위치기반 위치 업데이트 */
    const [formLocation, setFormLocation] = useRecoilState<formLocationType>(formLocationState);
    useEffect(() => {
        if(formLocation){
            console.log('ormLocation :',formLocation);
        setValue('sigungu', formLocation.sigungu)
        }
    }, [formLocation]);

    // 시의 데이터 바뀔때에 자동으로 리스트 업데이트
    // 'tree' 배열에서 'sido'가 '서울특별시'인 객체 추출
    let sidoFilter: any = areaList.filter((obj: any) => obj.sido === sidoName)
    // 서울특별시인 경우, 해당 객체의 'tree' 배열에서 군 이름들을 추출
    let guList: string[] = sidoFilter.map((item: any) => item.tree.map((subItem: any) => subItem.군)).flat();

    const getSido = () => {
        // 'tree' 배열에서 'sido'가 '서울특별시'인 객체 추출
        sidoFilter = areaList.filter((obj: any) => obj.sido === sidoName)
        // 서울특별시인 경우, 해당 객체의 'tree' 배열에서 군 이름들을 추출
        guList = sidoFilter.map((item: any) => item.tree.map((subItem: any) => subItem.군)).flat();
    }
    useEffect(() => {
        setValue("dong", "선택");
        getSido();
    }, [getValues]);



    return (
        <div className='mt-2'>
            <Controller
                control={control}
                name="sigungu"
                // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
                // field안에는 value나 onBlur와 같은 함수도 있음
                // render안의 onChange를 조작해, onChange안에 들어갈 값을
                // 선택할 수 있다.
                render={({ field }) => (
                    <select
                        id="country"
                        // name="country"
                        defaultValue="선택"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        {...field}
                    >
                        <option key='default'>
                            선택
                        </option>
                        {guList.map((gu) => (
                            <option key={gu}>
                                {gu}
                            </option>
                        ))}
                    </select>)} />
        </div>
    )
}