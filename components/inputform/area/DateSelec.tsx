'use client'


import '../../globals.css';
import React, { useState, useEffect } from 'react';
// import * as _ from 'lodash';

//React-hook-form
import { Controller, useFormContext } from "react-hook-form";

//시군구읍면동 리스트
import { areaList } from '../../../data/AreaList';
import { log } from 'console';

//date-picker
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // react-datepicker 스타일을 불러옵니다.

//날짜선택 UI 변경
import "./customDatePickerWidth.css";


//지역 리스트 받아오기
const areaJson = areaList;

export default function sido() {


  //useForm 값 넘기기
  const { control, watch, setValue } = useFormContext();


  return (
    <div>
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <div className="customDatePickerWidth">
            <DatePicker
              {...field}
              id="datePicker"
              selected={field.value ? new Date(field.value) : null}
              onChange={(date: Date) => field.onChange(date.toISOString().split("T")[0])}
              dateFormat="yyyy-MM-dd"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-300 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
        )}
      />
    </div>
  )
}