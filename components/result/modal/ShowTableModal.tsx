//Recoil

import { selector, useRecoilValue, useRecoilState } from 'recoil';
import { tableShowModalState } from '../../../data/recoil/atoms';

export default function ShowTableModal ({ cell }: { cell: { id: any, getValue: () => any }}) {
  const [tableShowModal, setTableShowModal] = useRecoilState(tableShowModalState);

  const handleButtonClick = (index : number) => {
    setTableShowModal({...tableShowModal, state : true, index : index });
  }

  return (
    <button value={cell.id} onClick={() => handleButtonClick(cell.getValue())} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      {cell.getValue()}(상세확인)
    </button>
  );
}


