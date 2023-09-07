import axios from 'axios';
import { url } from '../data/url';


export const deleteRow: any = async (data: number) => {
  try {
    const deleteIndex = {
      id: data
    };

    const response = await axios.delete(`${url}/delete-row`, {
      data: deleteIndex, // 데이터를 요청 본문에 포함
    });
    console.log('response.data:', response.data);
    return response.data;
  } catch (error) {
    console.error('서버 요청 오류:', error);
    throw error; // 오류를 던져서 상위 코드에서 처리할 수 있도록 함
  }
}






