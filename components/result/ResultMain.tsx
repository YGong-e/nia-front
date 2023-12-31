'use client'

import { areaList } from '../../data/AreaList';
import '../globals.css';
import React, { useState, useEffect } from 'react';

import Header from '../Header';
import ResultTable from './table/ResultTable';


//Recoil
import { showToastState, modalInputFormState,  tableDataState } from '../../data/recoil/atoms';
import { columnsSelector } from '@/data/recoil/Selector';
import { selector, useRecoilValue, useRecoilState } from 'recoil';



//오류 발생시 Toast 팝업, 전송완료시 팝업 작업
import ToastPopup from '../popup/ToastPopup';
import OnSubmitPopup from '../popup/OnSubmitPopup'

//지역 리스트 받아오기
const areaJson = areaList;

export default function AreaSelect() {

const [showToast, setShowToast] = useRecoilState(showToastState);

const [tableData, setTableData] = useRecoilState(tableDataState);

const columns = useRecoilValue(columnsSelector);


  return (
    <div>
      <Header/>
      <ResultTable/>      
      <ToastPopup/>
    </div>
  )
}