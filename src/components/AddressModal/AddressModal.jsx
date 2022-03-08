import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import SearchBox from '../SearchBox';
import { FIRST_EXPLANATION, BOTTOM_EXPLANATION } from '../../constants/addressPopup';
import AddressContent from './AddressContent';
import getJusoAPI from '../../api/getJusoAPI';
import ErrorPage from '../../pages/ErrorPage';

function AddressModal({ setIsModalOpen }) {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleAddressOnchange = (e) => {
    setKeyword(e.target.value);
    getJusoAPI(e.target.value).then((res) => {
      if (res !== undefined) {
        setData(res);
      }
    });
  };

  if (data === 'error') return <ErrorPage />;
  return (
    <SearchPopup>
      <Header title="주소검색" close setIsModalOpen={setIsModalOpen} />
      <SearchBox
        placeholder="주소 또는 건물명으로 검색"
        value={keyword}
        onChange={handleAddressOnchange}
      />
      <ResultBox>
        <ContentBox>
          {data?.length <= 0 ? (
            <FirstContent>{FIRST_EXPLANATION}</FirstContent>
          ) : (
            data.map(({ roadAddr, jibunAddr, zipNo }, idx) => (
              <AddressContent
                roadAddress={roadAddr}
                jibunAddress={jibunAddr}
                roadCode={zipNo}
                key={idx}
                setIsModalOpen={setIsModalOpen}
              />
            ))
          )}
        </ContentBox>
      </ResultBox>
      <Bottom.Box>
        <Bottom.Span>{BOTTOM_EXPLANATION}</Bottom.Span>
      </Bottom.Box>
    </SearchPopup>
  );
}

export default AddressModal;

const SearchPopup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.buttonWhite.backgroundColor};
  left: 0;
  top: 0;
  z-index: 20;
`;

const ResultBox = styled.div`
  display: flex;
  opacity: 1;
  box-sizing: border-box;
  align-items: stretch;
  flex-flow: column nowrap;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255);
  margin-top: 0px;
  width: calc(100% - 2px);
  min-height: 120px;
  max-height: 440px;
  overflow: hidden scroll;
`;
const ContentBox = styled.div`
  opacity: 1;
  box-sizing: border-box;
  align-items: stretch;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
`;
const FirstContent = styled.span`
  letter-spacing: 0px;
  white-space: pre-wrap;
  text-align: center;
  color: ${(props) => props.theme.buttonGray.color};
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

const Bottom = {
  Box: styled.div`
    opacity: 1;
    box-sizing: border-box;
    align-items: stretch;
    flex-flow: column nowrap;
    justify-content: flex-start;
    padding: 16px;
    display: block;
  `,
  Span: styled.span`
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: ${(props) => props.theme.buttonGray.color};
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  `,
};
