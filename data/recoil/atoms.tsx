import { atom, atomFamily, selector } from "recoil";

export interface addressType {
  sido: string,
  sigungu: string,
  dong: string
}


export const addressRecoil = atom<addressType[]>({
  key: 'inputState',
  // key의 값은 항상 고유값이어야 합니다.

  default: [{
    sido: '',
    sigungu: '',
    dong: ''
  },]
});





// export interface IInputFormDataTypes {

// }


// export const inputFormDataState = atom<any>({
//   key: 'inputFormDataState',
//   default: {}
// });


// //전체 InputForm 데이터 
export interface IInputFormDataTypes {
  name: string;
  id: string;
  team: string;
  sido: string;   // Initial value for firstName field
  sigungu: string;     // Initial value for lastName field
  dong: string;           // Initial value for email field
  date: string;
  phoneType: string;
  inout: string;
  dl: number;
  ul: number;
  file: File | Blob | File[] | null;
}

//recoil state 생성
export const inputFormDataState = atom<IInputFormDataTypes>({
  key: 'inputFormDataState',
  default: {
    name: '',
    id: '',
    team: '선택',
    sido: '선택',   // Initial value for firstName field
    sigungu: '선택',     // Initial value for lastName field
    dong: '선택',           // Initial value for email field
    date: '선택',
    phoneType: '',
    inout: '실외',
    dl: 0,
    ul: 0,
    file: null
  }
});


//전체 InputForm 데이터 Toast 관련

export interface IToast {
  state: boolean;
  err: string;
  msg: string;
}

export const showToastState = atom<IToast>({
  key: 'showToast',
  default: {
    state: false,
    err: 'pass',
    msg: ''
  }
});

/** inputform modal 띄우는 창 올라왔을때 결과 */

export const modalInputFormState = atom<boolean>({
  key: 'modalInputForm',
  default: false
});


//전체 TableData

// export interface ITableData {
//   keyIndex: number;
//   name: string;
//   id: string;
//   team: string;
//   sido: string;   // Initial value for firstName field
//   sigungu: string;     // Initial value for lastName field
//   dong: string;           // Initial value for email field
//   date: string;
//   phoneType: string;
//   inout: string;
//   dl: number;
//   ul: number;
//   file: string;

// }

export const tableDataState = atom<any>({
  key: 'tableData',
  default: false
});


/** react table 선언 */

export const resultTableState = atom<any>({
  key: 'resultTable',
  default: false
});

/** react table modal */

export interface ITableShowModal {
  state: boolean;
  index: number;
}

export const tableShowModalState = atom<ITableShowModal>({
  key: 'tableShowModal',
  default: {
    state: false,
    index: 0
  }
});

/** OCR 값 불러오기 */
export const OCRValueState = atom<any>({
  key: 'OCRValue',
  default: {
    dl: 0,
    ul: 0
  }
});

/** geoLocation */

interface geoLocationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}


export const geoLocationState = atom<geoLocationType>({
  key: 'geoLocation',
  default: {
    loaded: false,
    coordinates: { lat: 0, lng: 0, }
  }

})


/** 카카오API 기반 행정동 추출 */

export const adminDivisionState = atom<any>({
  key: 'adminDivision',
  default: false
});


/** 위치 정보 받아온후 값 받아오기 */

export interface formLocationType {
  sido: string,
  sigungu: string,
  dong: string,
  check: boolean
}


export const formLocationState = atom<formLocationType>({
  key: 'formLocation',
  default: {
    sido: '',
    sigungu: '',
    dong: '',
    check: false
  }

})

/** 위치 정보 받아온후 값 받아오기 */



export const headerNameState = atom<any>({
  key: 'headerName',
  default: ''

})

