export const TOTAL_STEP = 4;

export const STEPS = Object.freeze([
  { stepName: '돌봄 유형', stepTitle: '돌봄 유형을 설정해주세요' },
  { stepName: '돌봄 스케줄', stepTitle: '돌봄 스케줄을 설정해주세요' },
  { stepName: '돌봄 주소', stepTitle: '돌봄 주소를 입력해주세요' },
  {
    stepName: '신청 완료',
    stepTitle: '인증하신 휴대폰 번호로 케어코디 프로필을 받아보실 수 있어요 ☺️',
  },
]);

STEPS.forEach(Object.freeze);
