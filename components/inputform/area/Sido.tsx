'use client'


import '../../globals.css';
import React, { useEffect } from 'react';

//React-hook-form
import { useFormContext, Controller } from "react-hook-form";

//시군구읍면동 리스트
import { areaList } from '../../../data/AreaList';

//Recoil
import { formLocationState, formLocationType } from '@/data/recoil/atoms';
import { useRecoilState } from 'recoil';

/**현재 위치 정보 부르기 */
import useGeoLocation from "@/services/UseGeolocation";

//지역 리스트 받아오기
const areaJson = areaList;

export default function Sido() {

    //useForm 값 넘기기
    const { control, watch, setValue, getValues } = useFormContext();

    /** 값 초기화 */

    useEffect(() => {
        
        setValue("sigungu", "선택");
        setValue("dong", "선택");

    }, [getValues]);

    /**현재 위치기반 위치 업데이트 */
    const [formLocation, setFormLocation] = useRecoilState<formLocationType>(formLocationState);
    useEffect(() => {
        let checkval = false;
        if (formLocation && !checkval) {
            console.log('formLocation.sido :', formLocation.sido, ':');          
            setValue('sido', formLocation.sido);     
            checkval = true;       
        }
    }, [formLocation]);


    return (
        <div className='mt-2'>
            <Controller
                control={control}
                name="sido"
                // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
                // field안에는 value나 onBlur와 같은 함수도 있음
                // render안의 onChange를 조작해, onChange안에 들어갈 값을
                // 선택할 수 있다.
                render={({ field }) => (
                    <select
                        id="country"
                        // name="country"
                        autoComplete="country-name"
                        defaultValue="선택"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        {...field}
                    ><option key='default'>
                            선택
                        </option>
                        {areaJson.map((item: any) => (
                            <option key = {item.sido}>{item.sido}</option>))}
                    </select>)} />
        </div>
    )
}