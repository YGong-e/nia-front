import { createColumnHelper } from '@tanstack/react-table';
import { tableDataState, tableShowModalState } from './recoil/atoms';
import { selector, useRecoilValue, useRecoilState } from 'recoil';

import ShowTableModal from '../components/result/modal/ShowTableModal';

type Cols = {
    keyIndex: number
    date: string
    dong: string
    name: string 
    dl: string
    ul: string
}

const columnHelper = createColumnHelper<Cols>();
export const tableCols = [
    columnHelper.accessor("keyIndex", { header: "Index",
    cell: ({cell} : {cell: {getValue : any, id: any }}) => {            
        return <ShowTableModal cell = {cell}/> },
    enableSorting: false
 }),
    columnHelper.accessor("date", { header: "측정날짜" }),    
    columnHelper.accessor("name", { header: "이름" }),
    columnHelper.accessor("dong", { header: "읍면동" }),
];



/**아래 것은 전체 컬럼 불러오는 것 */
// type Cols = {
//     keyIndex: number
//     date: string
//     sido: string
//     sigungu: string
//     dong: string
//     name: string
//     id: string
//     team: string
//     phonetype: string
//     dl: string
//     ul: string
//     in_out: string
//     file_name: string
// }

// const columnHelper = createColumnHelper<Cols>();
// export const tableCols = [
//     columnHelper.accessor("keyIndex", { header: "Index",
//     cell: ({cell} : {cell: {getValue : any, id: any }}) => {            
//         return <ShowTableModal cell = {cell}/> },
//     enableSorting: false
//  }),
//     columnHelper.accessor("date", { header: "측정날짜" }),
//     columnHelper.accessor("sido", { header: "시도" }),
//     columnHelper.accessor("sigungu", { header: "시군구" }),
//     columnHelper.accessor("dong", { header: "읍면동" }),
//     columnHelper.accessor("name", { header: "이름" }),
//     columnHelper.accessor("id", { header: "사번" }),
//     columnHelper.accessor("team", { header: "팀명" }),
//     columnHelper.accessor("phonetype", { header: "단말기종" }),
//     columnHelper.accessor("dl", { header: "DL속도" }),
//     columnHelper.accessor("ul", { header: "UL속도" }),
//     columnHelper.accessor("in_out", { header: "실내/외" })
// ];