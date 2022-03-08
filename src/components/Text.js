import styled from 'styled-components';

export const Body1 = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  word-break: keep-all;
`;

export const Body3 = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.fontColor};
  word-break: keep-all;
`;

export const Body4 = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  word-break: keep-all;
`;

export const Caption2 = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.buttonWhite.color};
  word-break: keep-all;
`;

export const Caption3 = styled.span`
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  word-break: keep-all;
`;
