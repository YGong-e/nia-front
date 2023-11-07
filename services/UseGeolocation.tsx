import { useEffect } from 'react';
import axios from 'axios';
/** Recoil */
//Recoil
import { geoLocationState, adminDivisionState, formLocationState, formLocationType } from '@/data/recoil/atoms';
import { useRecoilState } from 'recoil';

const KAKAO_MAP_API_KEY = '846aac33246283abdf58dae285603275';

const useGeolocation = () => {
  const [location, setLocation] = useRecoilState(geoLocationState);
  const [adminDivision, setAdminDivision] = useRecoilState(adminDivisionState);  
  const [formLocation, setFormLocation] = useRecoilState<formLocationType>(formLocationState);   

  // 성공에 대한 로직
  const onSuccess = (location: { coords: { latitude: number; longitude: number; }; }) => {
    console.log(';location.coords.longitude', location.coords.longitude);

    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }
    })
  }

  // 에러에 대한 로직
  const onError = (error: { code: number; message: string; }) => {
    setLocation({
      loaded: true,
      error,
    })
  }

  /**위경도 불러오는 함수*/
  const getlatlng = async () => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      })
    }
    await navigator.geolocation.getCurrentPosition(onSuccess, onError);


  }


  const getAdministrativeDivision = async () => {
    console.log('location', location);


    try {
      const response = await axios.get<any>(
        `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${location.coordinates?.lng}&y=${location.coordinates?.lat}`,
        {
          headers: {
            Authorization: `KakaoAK ${KAKAO_MAP_API_KEY}`,
          },
        }
      );
      const document = response.data.documents;
      const documents = document.filter((item:any) => item.region_type == 'H')
   
      console.log('documents',documents);
      


      if (documents && documents.length > 0) {
        const region = documents[0];
        const administrativeDivisionInfo: any = {
          sido: region.region_1depth_name,
          sigungu: region.region_2depth_name,
          dong:  region.region_3depth_name
        };
        setFormLocation(administrativeDivisionInfo);
      } else {
        const administrativeDivisionInfo: any = {
          sido: '선택',
          sigungu: '선택',
          dong:  '선택'
        };

        setFormLocation(administrativeDivisionInfo);
      }
    } catch (error) {
      console.error('Error fetching administrative division:', error);
      const administrativeDivisionInfo: any = {
        sido: '선택',
        sigungu: '선택',
        dong:  '선택'
      };

      setFormLocation(administrativeDivisionInfo);
    }
  };

  //

  useEffect(() => {
    getlatlng();
    if (location.loaded) {
      getAdministrativeDivision();
    }
  }, [location])

  return adminDivision;
}

export default useGeolocation;