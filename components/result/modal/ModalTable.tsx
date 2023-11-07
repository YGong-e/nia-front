'use client'

import Image from 'next/image';
import { areaList } from '../../../data/AreaList';
import '../../globals.css';
import React, { useState, useEffect } from 'react';


//Recoil

import { selector, useRecoilValue, useRecoilState } from 'recoil';
import { tableDataState, tableShowModalState, showToastState } from '../../../data/recoil/atoms';
import { tableShowModalSelector } from '../../../data/recoil/Selector';
/** react-query */
import { useQuery, useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';

//lodash
import _ from 'lodash';

/** icons */
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";


//지역 리스트 받아오기
const areaJson = areaList;

/** 테이블 data받아오기 */
import { getTableData } from '@/services/GetTableData';
import { tableCols } from '../../../data/TableCols';
import { ShowList } from '@/data/ShowList';

/** 특정 데이터 삭제 설정 */
import { deleteRow } from '@/services/DeleteRow'

import { url } from '@/data/url';


const ModalTable = () => {


  const [tableData, setTableData] = useRecoilState(tableDataState);
  // const [resultTable, setResultTable ] = useRecoilState(resultTableState);
  const [tableShowModal, setTableShowModal] = useRecoilState(tableShowModalState);
  const [showToast, setShowToast] = useRecoilState(showToastState);
  const modalDataList = useRecoilValue(tableShowModalSelector);

  /** 값 변경 */

  const [showList, setShowList] = useState<any[]>([]);
  useEffect(() => {
    if (modalDataList.length != 0) {
      /**결과 값에 들어가는 리스트 */
      modalDataList
      let makeObj: any = ShowList(modalDataList[0]);
      setShowList(makeObj);
      console.log('modalDataList' + JSON.stringify(showList));
    }

  }, [tableShowModal.state]);


  /** 삭제를 위한 reactquery */
  const queryClient = useQueryClient()

  const { isLoading, isError, data: queryData, error } = useQuery({
    queryKey: ['tableData'],
    queryFn: getTableData,
    onSuccess: (data) => { console.log("아 제발"), setTableData(data), console.log("data뭐지뭐지" + JSON.stringify(data)); }

  });

  const deleteMutation = useMutation(
    () => deleteRow(modalDataList[0].keyIndex),
    {
      onSuccess: () => {
        closeModal();
        //팝업창
        setShowToast((prev: any) => ({ ...prev, state: true, err: 'pass', msg: '삭제 완료되었습니다.' }));

        setTimeout(() => {
          setShowToast((prev: any) => ({ ...prev, state: false }));
        }, 4000);
        return queryClient.invalidateQueries(['tableData']);
      },
      onError: (error) => {
        console.error('삭제 작업 실패:', error);
      },
      onSettled: () => {


      }
    }
  );

  const closeModal = () => {
    setTableShowModal({ ...tableShowModal, state: false });

  }

  const onClickDelete = async () => {
    await deleteMutation.mutate();

  }

  /**image URL */

  const imgURL = (url: string, imgName: string) => {
    return `${url}/uploads/${imgName}`
  }

  return (
    <>
      {tableShowModal.state ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 font-bold tracking-tight text-gray-900 text-lg sm:text-base lg:text-lg xl:text-xl">측정 결과(상세)</p>
                    <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
                    <p className="mt-2 leading-8 text-gray-600 text-base sm:text-sm lg:text-base xl:text-lg">{modalDataList[0].team} {modalDataList[0].name} ({modalDataList[0].id}) </p>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setTableShowModal({ ...tableShowModal, state: false })}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}


                <div className="bg-white py-4 sm:py-8">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                      <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
                        {showList && (
                          showList.map((item: any, index: any) => (
                            <div className="relative pl-16" key={item.index}>
                              <dt className="font-semibold leading-7 text-gray-900 text-base sm:text-sm lg:text-base xl:text-lg">
                                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                  </svg>
                                </div >
                                <div className='text-base sm:text-xs lg:text-sm xl:text-base'>
                                  {item.name} <br /> {item.data}
                                </div>
                              </dt>
                            </div>
                          ))
                        )}
                      </dl>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-1 lg:space-y-0">
                  {/* 각 이미지의 제목과 설명 */}
                  {/* <div className="text-center">
                    <h3 className="mt-6 text-sm text-gray-500">
                      측정결과 사진
                    </h3>
                  </div> */}
                  {/* 각 이미지 블록 */}
                  <div className="group relative flex justify-center items-center">
                    <div className="relative h-96 sm:h-32 lg:h-32 w-3/5 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 ">
                      <img src={imgURL(url,modalDataList[0].file_name)} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => { onClickDelete() }}
                  >
                    삭제
                  </button>
                  <button
                    className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => closeModal()}
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>)
};

export default ModalTable;
