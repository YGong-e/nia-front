import axios from 'axios';
import { url } from '../data/url';
import { IToast } from '../data/recoil/atoms';

import { checkFormData } from './CheckFormData';


export const onSubmitCheck: any = async (data: any, setShowToast: (update: (prevState: IToast) => IToast) => void, setModalInputForm: (update: boolean) => void) =>
 {


  try {

    console.log("onsubmiycheck에서의 값은?" + JSON.stringify(data));
    
    
    const checkResult = checkFormData(data)[0];
    const checkMsg = checkFormData(data)[1];
    console.log('checkResult:' + checkResult);
    console.log('checkMsg:' + checkMsg);
    if (checkResult != 'pass') {
      
      setShowToast((prev: any) => ({ ...prev, state: true, err: checkResult, msg: checkMsg }));

      setTimeout(() => {
        setShowToast((prev: any) => ({ ...prev, state: false }));
      }, 2000);

      return false;
    }

    
    setModalInputForm(true);


    // const formData = new FormData();
    // formData.append('name', data.name);
    // formData.append('id', data.id);
    // formData.append('team', data.team);
    // formData.append('sido', data.sido);
    // formData.append('sigungu', data.sigungu);
    // formData.append('dong', data.dong);
    // formData.append('date', data.date);
    // formData.append('phoneType', data.phoneType);
    // formData.append('inout', data.inout);
    // formData.append('dl', data.dl);
    // formData.append('ul', data.ul);
    // formData.append('file', data.file[0]);

    // console.log(`${url}/onSubmit`);
    

    // // 서버에 데이터 전송
    // const response = await axios.post(`${url}/onSubmit`, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data', // 필수적인 헤더
    //   },
    // });

    // // 서버로부터의 응답 처리
    // console.log('서버 응답:', response.data);

    // if(response.data.success) {
    //   setModalInputForm(true);

    // }
  } catch (error) {
    console.error('서버 요청 오류:', error);
  }
}

