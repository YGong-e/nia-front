import axios from 'axios';
import { url } from '../data/url';


export const getTableData: any = async () =>
 {  
  try {
    console.log("시작은되나");
    
    const response = await axios.get(`${url}/getTableData`);
    console.log('response.data:', response.data);
    return response.data;
  } catch (error) {
    console.error('서버 요청 오류:', error);
    throw error; // 오류를 던져서 상위 코드에서 처리할 수 있도록 함
  }

 
  } 






