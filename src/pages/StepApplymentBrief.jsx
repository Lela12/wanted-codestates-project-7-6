import { rgba } from 'polished';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import { Body1, Body3, Body4, Caption2, Caption3 } from '../components/Text';
import { PHONE_AUTH_CODE_LENGTH } from '../constants/auth';
import { getRandomString } from '../utilities/random';

const PageContainer = styled.section`
  max-width: 768px;
  min-width: 360px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 32px;
`;

const AddressContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Chip = styled.div`
  background-color: ${({ theme }) => rgba(theme.buttonWhite.color, 0.1)};
  display: inline-block;
  padding: 0 8px;
  border-radius: 32px;
  width: fit-content;
  height: fit-content;
`;

const BriefContainer = styled.main`
  background-color: white;
  box-shadow: 0 0 16px rgb(0 0 0 / 5%), 0 0 5px rgb(0 0 0 / 5%);
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #f6f6f6;
`;

export default function StepApplymentBrief() {
  const [isRequested, setIsRequested] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isSendingFailed, setIsSendingFailed] = useState(false);
  const [isWrongCode, setIsWrongCode] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const authCode = useRef(null);

  const sendAuthMessage = async (phoneNumber) => {
    authCode.current = getRandomString(PHONE_AUTH_CODE_LENGTH);
    setIsSending(true);
    const res = { data: { ok: true } }; // !TEST_CODE
    // const res = await axios.post('/api/sms', {
    //   to: phoneNumber,
    //   message: `인증코드: ${authCode.current}`,
    // });
    setIsSending(false);
    if (res.data.ok) {
      setIsRequested(true);
      console.log('테스트 코드:', authCode.current); //!TEST_CODE
    } else {
      authCode.current = null;
      setIsSendingFailed(true);
    }
  };

  const verifyCode = (code) => {
    if (authCode.current === code.toUpperCase()) {
      setIsAuthorized(true);
      setIsWrongCode(false);
    } else {
      setIsWrongCode(true);
    }
  };

  return (
    <PageContainer>
      <BriefContainer>
        <Body1>신청 내역</Body1>
        <Body3>돌봄 유형</Body3>
        <DetailContainer>
          <Body4>⏰ 시간제 돌봄</Body4>
        </DetailContainer>
        <Separator />
        <Body3>돌봄 일정</Body3>
        <DetailContainer>
          <Body4>2022년 1월 12일 ~ 22년 1월 23일</Body4>
          <Body4>오전 10시부터</Body4>
          <Body4>8시간</Body4>
        </DetailContainer>
        <Separator />
        <Body3>돌봄 주소</Body3>
        <DetailContainer>
          <Body4>서울특별시 강남구 테헤란로 77길 9 (삼성동)</Body4>
          <AddressContainer>
            <Chip>
              <Caption3>지번</Caption3>
            </Chip>
            <Caption2>서울특별시 강남구 역삼동 837-11 유니온센터오피스텔</Caption2>
          </AddressContainer>
          <Body4>케어닥주공아파트 102동 1204호</Body4>
        </DetailContainer>
      </BriefContainer>
      <FormContainer>
        <Form
          onSubmit={sendAuthMessage}
          placeholder="전화번호 숫자만 입력해주세요."
          title={isRequested ? '요청 완료' : isSending ? '요청 중...' : '인증 요청'}
          filter={/[0-9]/}
          disabled={isRequested || isSending}
          message={
            isRequested && !isAuthorized
              ? `인증 코드 ${PHONE_AUTH_CODE_LENGTH}자리를 전송했습니다. 아래 입력칸에 작성해주세요.`
              : isSendingFailed
              ? '전송에 실패했습니다.'
              : ''
          }
        />
        <Form
          onSubmit={verifyCode}
          placeholder="인증 번호를 입력해주세요."
          title={isAuthorized ? '인증 완료' : '인증 확인'}
          disabled={!isRequested || isAuthorized}
          message={isWrongCode ? '잘못된 코드를 입력했습니다. 다시 한 번 확인해주세요.' : ''}
        />
      </FormContainer>
    </PageContainer>
  );
}
