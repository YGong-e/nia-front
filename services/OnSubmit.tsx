import axios from 'axios';
import { url } from '../data/url';
import { IToast } from '../data/recoil/atoms';

import { checkFormData } from '../utils/CheckFormData';



export const onSubmit: any = async (data: any, setShowToast: (update: (prevState: IToast) => IToast) => void, setModalInputForm: (update: boolean) => void) =>
 {

  console.log("함수동작은되니");

  try {       
  console.log("함수동작은되니22");

    console.log('data.file[0] :' + JSON.stringify(data));

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('id', data.id);
    formData.append('team', data.team);
    formData.append('sido', data.sido);
    formData.append('sigungu', data.sigungu);
    formData.append('dong', data.dong);
    formData.append('date', data.date);
    formData.append('phoneType', data.phoneType);
    formData.append('inout', data.inout);
    formData.append('dl', data.dl);
    formData.append('ul', data.ul);
    formData.append('file', data.file[0]);

    // 서버에 데이터 전송
    const response = await axios.post(`${url}/onSubmit`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 필수적인 헤더
      },
    });

    // 서버로부터의 응답 처리
    console.log('서버 응답:', response.data.success);

    return response.data.success;
    // if(response.data.success) {
    //   setModalInputForm(false);

    // }
  } catch (error) {
    console.error('서버 요청 오류:', error);
  }
}

