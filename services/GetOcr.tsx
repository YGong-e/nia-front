import axios from 'axios';
import { url } from '../data/url';
import { IToast } from '../data/recoil/atoms';

import { checkFormData } from '../utils/CheckFormData';



export const getOcr: any = async (data: any, setOCRvalue: any) =>
 {

  console.log("함수동작은되니");

  try {       
    console.log('data', data);
    
    const formData = new FormData();
    formData.append('file', data);

    // 서버에 데이터 전송
    const response = await axios.post(`${url}/ocr`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 필수적인 헤더
      },
    });

    // 서버로부터의 응답 처리
    console.log('서버 응답:', response.data);
    setOCRvalue(response.data);
    

    return response.data;
  } catch (error) {
    console.error('서버 요청 오류:', error);
  }
}

