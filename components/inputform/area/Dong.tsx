'use client'


import '../../globals.css';
import React, { useState, useEffect } from 'react';
// import * as _ from 'lodash';

//React-hook-form
import { Controller, useFormContext } from "react-hook-form";

//Recoil
import { formLocationState, formLocationType } from '@/data/recoil/atoms';
import { useRecoilState } from 'recoil';

/**현재 위치 정보 부르기 */
import useGeoLocation from "@/services/UseGeolocation";

//시군구읍면동 리스트
import { areaList } from '../../../data/AreaList';
import { log } from 'console';



//지역 리스트 받아오기
const areaJson = areaList;

export default function Sido() {

    //useForm 값 넘기기
    const { control, watch, setValue, getValues } = useFormContext();
    const sigunguName = watch('sigungu');
    const sidoName = watch('sido');

    /**현재 위치기반 위치 업데이트 */
    const [formLocation, setFormLocation] = useRecoilState<formLocationType>(formLocationState);
    useEffect(() => {
        let checkVal = false;
        if (formLocation && !checkVal) {
            console.log('formLocation.dong :', formLocation.dong);
            setValue('dong', formLocation.dong)
            checkVal = true;
        }
    }, [formLocation]);




    // 시군구의 데이터 바뀔때에 자동으로 리스트 업데이트    
    let targetData = areaList.find((item: any) => item.sido === sidoName);
    //   && item.tree.find((subItem:any) => subItem.군 === props.sigunguName));
    // console.log('dong데이터확인:' + JSON.stringifytargetData);

    let dongList = targetData?.tree.find((item: any) => item.군 === sigunguName)?.tree.map((subItem: any) => subItem.구) || [];

    const getSido = () => {
        targetData = areaList.find((item: any) => item.sido === sidoName);
        dongList = targetData?.tree.find((item: any) => item.군 === sigunguName)?.tree.map((subItem: any) => subItem.구) || [];
        console.log('동리스트' + dongList);
    }

    useEffect(() => {
        let checkval = false;
        if(!checkval) {
            checkval = true;
        getSido();
        }
    }, [getValues]);

    getSido();

    return (
        <div className='mt-2'>
            <Controller
                control={control}
                name="dong"
                // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
                // field안에는 value나 onBlur와 같은 함수도 있음
                // render안의 onChange를 조작해, onChange안에 들어갈 값을
                // 선택할 수 있다.
                render={({ field }) => (
                    <select
                        id="country"
                        defaultValue="선택"
                        // name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        {...field}
                    > <option key='default'>
                            선택
                        </option>
                        {dongList.map((dong: string) => (
                            <option key={dong}>
                                {dong}
                            </option>
                        ))}
                    </select>)} />
        </div>
    )
}