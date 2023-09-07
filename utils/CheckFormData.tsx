
export const checkFormData = (data: any) => {

    if (!data.date) {
      console.log('false');
      return ['dateErr', '측정 날짜를 선택해주세요.'];
    }
  
    else if (data.sido === '선택') {
      console.log('false');
      return ['sidoErr', '시/도(명)를 선택해주세요.'];
  
    }
  
    else if (data.sigungu === '선택') {
      console.log('false');
      return ['sigunguErr', '시/군/구(명)을 선택해주세요.'];
    }
  
    else if (data.dong === '선택') {
      console.log('false');
      return ['dongErr', '동(명)을 선택해주세요.'];
    }
  
    else if (!data.name) {
      console.log('false');
      return ['nameErr', '이름을 입력해주세요.'];
    }
  
    else if (data.id.length != 7) {
  
      return ['idErr', '사번을 7자리로 입력해주세요.'];
    }
  
    else if (data.team === '선택') {
      console.log('false');
      return ['teamErr', '팀명을 선택해주세요.'];
  
    }
    else if (!data.phoneType) {
      console.log('false');
      return ['phoneTypeErr', '측정 기종을 입력해주세요.'];
    }
  
    else if (!data.dl) {
      console.log('false');
      return ['dlErr', 'DL 속도를 입력해주세요.'];
    }
  
    else if (!data.ul) {
      console.log('false');
      return ['ulErr', 'UL 속도를 입력해주세요.'];
    }
  
    else if (!data.file || data.file.length === 0) {
      console.log('false');
      return ['fileErr', '사진 첨부해주세요.'];
    }
  
    else {
      return ['pass', 'pass'];
    }
  
  
  }