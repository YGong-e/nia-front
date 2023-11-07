'use client'

import { areaList } from '../../../data/AreaList';
import '../../globals.css';
import React, { useState, useEffect } from 'react';

import TableHeader from './TableHeader';
import TablePagination from './TablePagination';
import ModalTable from '../modal/ModalTable';

//Recoil
import { tableDataState, resultTableState } from '../../../data/recoil/atoms';
import { columnsSelector } from '../../../data/recoil/Selector';
import { selector, useRecoilValue, useRecoilState } from 'recoil';


/** react-table */
import {
  getCoreRowModel, useReactTable, flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedUniqueValues,
  getPaginationRowModel,
} from "@tanstack/react-table";



/** react-query */
import { useQuery, useQueryClient } from '@tanstack/react-query';



//lodash
// import _ from 'lodash';

/** icons */
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";


//지역 리스트 받아오기
const areaJson = areaList;

/** 테이블 data받아오기 */
import { getTableData } from '@/services/GetTableData';
import { tableCols } from '../../../data/TableCols';
import { data } from 'autoprefixer';
/** global filter 설정 */


const GlobalFilter = () => {

  const [tableData, setTableData] = useRecoilState(tableDataState);
  // const [resultTable, setResultTable ] = useRecoilState(resultTableState);

  const { isLoading, isError, data: queryData, error } = useQuery({
    queryKey: ['tableData'],
    queryFn: getTableData,
    onSuccess: (data) => { setTableData(data), console.log("data" + JSON.stringify(data)); }

  });

  /**컬럼리스트불러오기 */
  const columns = tableCols;

  // useReactTable로 테이블 구조 정의
  const resultTable = useReactTable({
    data: isLoading || isError ? [] : tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getPaginationRowModel: getPaginationRowModel(),
  });



  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.log('Error occurred:', error);
    return <div>Error fetching data</div>
  };

  return (
    <div className="overflow-x-auto overflow-y-auto">
      <div className="min-w-full sm:w-full lg:w-[800px] xl:w-[1000px]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            {resultTable.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className = 'text-sm sm:text-base lg:text-lg xl:text-xl'>
                {headerGroup.headers.map((header: any) => (
                  <TableHeader header={header} key={header.id} />
                ))}
              </tr>
            ))} 
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {resultTable.getRowModel().rows.map((row) => (
              <tr key={row.id} className = 'text-sm sm:text-base lg:text-lg xl:text-xl'>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <TablePagination resultTable={resultTable} />
        <ModalTable />        
      </div>
    </div>
  );
};

export default GlobalFilter;
