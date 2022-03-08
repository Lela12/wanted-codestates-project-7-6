import { useContext, useState, useCallback } from 'react';
import { FooterContext } from '../App';
import SearchBox from '../components/SearchBox';
import styled from 'styled-components';
import AddressModal from '../components/AddressModal/AddressModal';

export default function StepAddress() {
  const { setActiveNext } = useContext(FooterContext);
  const [keyword, setKeyword] = useState('');
  const [detail, setDetail] = useState('');
  const [address, setAddress] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSearchModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleInput = (e) => {
    setDetail(e.target.value);
    setActiveNext(e.target.value.trim() && address);
  };
  return (
    <div>
      {isModalOpen && <AddressModal setIsModalOpen={setIsModalOpen} />}
      <SearchBox
        readOnly
        handleBoxClick={openSearchModal}
        value={keyword}
        placeholder="주소 또는 건물명으로 검색"
      />
      <BorderBox value={detail} onChange={handleInput} placeholder="상세 주소를 입력해주세요" />
    </div>
  );
}

const BorderBox = styled.input`
  margin-top: 0.6rem;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  ${(props) => props.theme.inputBorder}
`;
