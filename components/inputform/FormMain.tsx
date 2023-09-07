'use client'

import { areaList } from '../../data/AreaList';
import '../globals.css';
import React, { useState, useEffect } from 'react';


//Recoil
import { showToastState, modalInputFormState, inputFormDataState, OCRValueState } from '../../data/recoil/atoms';
import { useRecoilState } from 'recoil';

//lodash

// import _ from 'lodash';


//시도 군구 행정동 Component
import FormArea from './area/FormArea';
import FormUser from './user/FormUser';
import FormMeasure from './measure/FormMeasure';
import FormImage from './image/FormImage';

//React-hook-form
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

//데이터 전달 이벤트
import { onSubmit } from '../../services/OnSubmit';

//전송전 확인 작업

import { onSubmitCheck } from '../../utils/OnSubmitCheck';

//오류 발생시 Toast 팝업, 전송완료시 팝업 작업
import ToastPopup from '../popup/ToastPopup';
import OnSubmitPopup from '../popup/OnSubmitPopup'

/** 당일날짜 받아오기 */
import { getTodayDate } from '@/utils/GetTodayDate';


//지역 리스트 받아오기
const areaJson = areaList;

export default function areaSelect() {

  const [showToast, setShowToast] = useRecoilState(showToastState);
  const [modalInputForm, setModalInputForm] = useRecoilState(modalInputFormState);
  const [inputFormData, setInputFormData] = useRecoilState(inputFormDataState);
  const [OCRValue, setOCRvalue] = useRecoilState(OCRValueState);
  const handleModalToggle = () => {
    setModalInputForm((prev) => !prev);
  };

  const todayDate = getTodayDate();

  // useForm 만들기
  const methods = useForm({
    defaultValues: {
      name: '',
      id: '',
      team: '선택',
      sido: '선택',   // Initial value for firstName field
      sigungu: '선택',     // Initial value for lastName field
      dong: '선택',           // Initial value for email field
      date: todayDate,
      phoneType: '',
      inout: '실외',
      dl: OCRValue.dl,
      ul: OCRValue.dl,
      file: null
    },
  });

  //Submit 버튼누르면 Recoil 값 업데이트 
  const { watch, handleSubmit } = methods;
  const watchInputData = watch();

  // const inputFormUpdate = () => {  
  //   const newData: any = _.cloneDeep(watchInputData);
  //   console.log('안에서의 값:', JSON.stringify(newData));
  //   setInputFormData(newData);
  // }





  useEffect(() => {
    console.log('Name:', watchInputData);
  }, [watchInputData]);


  return (
    <form>
      <FormProvider {...methods}>
        <FormImage />
        <FormMeasure />
        <FormArea />
        <FormUser />
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="rounded-md w-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit((data) => { onSubmitCheck(data, setShowToast, setModalInputForm) })}
          >
            추가하기
          </button>
        </div>
        {modalInputForm && <OnSubmitPopup />}
      </FormProvider>
      <ToastPopup />

    </form>
  )
}