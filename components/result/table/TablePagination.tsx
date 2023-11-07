'use client'

import { areaList } from '../../../data/AreaList';
import '../../globals.css';
import React, { useState, useEffect } from 'react';


//Recoil
import { tableDataState } from '../../../data/recoil/atoms';
import { columnsSelector } from '../../../data/recoil/Selector';
import { selector, useRecoilValue, useRecoilState } from 'recoil';


/** react-table */
import { TableState } from '@tanstack/react-table';

//lodash
// import _ from 'lodash';

/** icons */
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";



/** global filter 설정 */
interface ITableState {
  resultTable: any; // 이 부분에 useReactTable 결과로 나온 객체를 넣어주세요
}

const Pagination: React.FC<ITableState> = ({ resultTable }) => {

  return (
    <div>
      <div className="h-2" />
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className='flex  items-center gap-2'>
          <button
            className="border rounded p-1 transition duration-300 hover:bg-gray-200 text-sm xl:text-base"
            onClick={() => resultTable.setPageIndex(0)}
            disabled={!resultTable.getCanPreviousPage()}
          >
            <FaAngleDoubleLeft />
          </button>
          <button
            className="border rounded p-1 transition duration-300 hover:bg-gray-200 text-sm xl:text-base"
            onClick={() => resultTable.previousPage()}
            disabled={!resultTable.getCanPreviousPage()}
          >
            <FaAngleLeft />
          </button>
          <button
            className="border rounded p-1 transition duration-300 hover:bg-gray-200 text-sm xl:text-base"
            onClick={() => resultTable.nextPage()}
            disabled={!resultTable.getCanNextPage()}
          >
            <FaAngleRight />
          </button>
          <button
            className="border rounded p-1 transition duration-300 hover:bg-gray-200 text-sm xl:text-base"
            onClick={() => resultTable.setPageIndex(resultTable.getPageCount() - 1)}
            disabled={!resultTable.getCanNextPage()}
          >
            <FaAngleDoubleRight />
          </button>
          <div className="flex items-center gap-1 text-sm xl:text-base">
            <div>Page</div>
            <strong>
              {resultTable.getState().pagination.pageIndex + 1} of {resultTable.getPageCount()}
            </strong>
          </div>
        </div>
        <div className = 'flex items-center gap-2'>
          <div className="mt-1 sm:mt-0 flex items-center gap-1 text-sm xl:text-base">
            <span className="text-gray-600 sm:ml-1">| Go to page:</span>
            <input
              type="number"
              defaultValue={resultTable.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                resultTable.setPageIndex(page);
              }}
              className="border p-1 rounded w-12 sm:w-16 text-center text-sm xl:text-base"
            />
          </div>
          <select
            value={resultTable.getState().pagination.pageSize}
            onChange={(e) => {
              resultTable.setPageSize(Number(e.target.value));
            }}
            className="border p-1 rounded bg-white text-gray-600 text-sm xl:text-base"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <div>{resultTable.getRowModel().rows.length} Rows</div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
