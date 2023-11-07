import { selector } from 'recoil';
import { tableShowModalState, tableDataState } from './atoms';

// import _ from 'lodash';

// 변환된 데이터를 반환하는 selector 정의
export const columnsSelector = selector({
  key: 'columnsSelector',
  get: () => [
    {
      id: 'keyIndex',
      Header: 'keyIndex',
      accessor: 'keyIndex',
      canFilter: true,
    },
    {
      id: 'date',
      Header: 'Date',
      accessor: 'date',
      canFilter: true,
    },
    {
      id: 'sido',
      Header: 'Sido',
      accessor: 'sido',
      canFilter: true,
    },
    {
      id: 'sigungu',
      Header: 'Sigungu',
      accessor: 'sigungu',
      canFilter: true,
    },
    {
      id: 'dong',
      Header: 'Dong',
      accessor: 'dong',
      canFilter: true,
    },
    {
      id: 'name',
      Header: 'Name',
      accessor: 'name',
      canFilter: true,
    },
    {
      id: 'id',
      Header: 'Id',
      accessor: 'id',
      canFilter: true,
    },
    {
      id: 'team',
      Header: 'Team',
      accessor: 'team',
      canFilter: true,
    },
    {
      id: 'phoneType',
      Header: 'PhoneType',
      accessor: 'phonetype',
      canFilter: true,
    },
    {
      id: 'dl',
      Header: 'DL',
      accessor: 'dl',
      canFilter: true,
    },
    {
      id: 'ul',
      Header: 'UL',
      accessor: 'ul',
      canFilter: true,
    },
    {
      id: 'in_out',
      Header: 'In_out',
      accessor: 'in_out',
      canFilter: true,
    },
    {
      id: 'file_name',
      Header: 'File_name',
      accessor: 'file_name',
      canFilter: false,
    },
  ],
});


export const tableShowModalSelector = selector({
  key: 'tableShowModalSelector',
  get: ({get}) => {
    const tableShowModal = get(tableShowModalState);
    const tableData = get(tableDataState);
    
    return tableData.filter((item:any) => item.keyIndex == tableShowModal.index)
    

  }
})
