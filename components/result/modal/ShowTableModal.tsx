//Recoil

import { selector, useRecoilValue, useRecoilState } from 'recoil';
import { tableShowModalState } from '../../../data/recoil/atoms';

export default function ShowTableModal ({ cell }: { cell: { id: any, getValue: () => any }}) {
  const [tableShowModal, setTableShowModal] = useRecoilState(tableShowModalState);

  const handleButtonClick = (index : number) => {
    setTableShowModal({...tableShowModal, state : true, index : index });
  }

  return (
    <button value={cell.id} onClick={() => handleButtonClick(cell.getValue())}>
      {cell.getValue()}
    </button>
  );
}


