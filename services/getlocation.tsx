import { useEffect } from 'react';
import axios from 'axios';
/** Recoil */
import { adminDivisionState, geoLocationState, formLocationState } from '@/data/recoil/atoms';
import { useRecoilState } from 'recoil';

const KAKAO_MAP_API_KEY = 'd9e91764e48ded3ecf48b8497b18610f';



interface KakaoMapResponse {
  documents: {
    address: {
      region_1depth_name: string;
      region_2depth_name: string;
      region_3depth_name: string;
    };
  }[];
}

const getlocation = () => {
  const [adminDivision, setAdminDivision] = useRecoilState(adminDivisionState);
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationState);
  // const [formLocation, setFormLocation] = useRecoilState(formLocationState);


  const getAdministrativeDivision = async () => {
    try {
        const response = await axios.get<KakaoMapResponse>(
          `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${geoLocation.coordinates?.lng}&y=${geoLocation.coordinates?.lat}`,
          {
            headers: {
              Authorization: `KakaoAK ${KAKAO_MAP_API_KEY}`,
            },
          }
        );
      const documents = response.data.documents;

      if (documents && documents.length > 0) {
        const region = documents[0].address;
        const administrativeDivisionInfo: any = {
          code: region.region_3depth_name,
          name: `${region.region_1depth_name} ${region.region_2depth_name} ${region.region_3depth_name}`,
        };
        setAdminDivision(administrativeDivisionInfo);
      } else {
        setAdminDivision(null);
      }
    } catch (error) {
      console.error('Error fetching administrative division:', error);
      setAdminDivision(null);
    }
  };

  useEffect(() => {
    getAdministrativeDivision();
  }, []);

  return (
    <div>
      {adminDivision ? (
        <div>
          <p>Administrative Division Code: {adminDivision.code}</p>
          <p>Administrative Division Name: {adminDivision.name}</p>
        </div>
      ) : (
        <p>No administrative division found.</p>
      )}
    </div>
  );
};

export default getlocation;