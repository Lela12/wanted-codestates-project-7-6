const commonStyle = {
  borderRadius: '4px',
};
const buttonStyle = {
  border: 'none',
  borderRadius: commonStyle.borderRadius,
  fontWeight: 'bold',
};

const theme = {
  mainColor: '#FF8450',
  subColor: '#FFCFB5',
  fontColor: '#5B5555',
  fontGray: '#D3D2D2',
  backgroundGray: '#F6F6F6',
  borderColor: '#EEEEEE',
  inputBorder: {
    //테두리가 있는 input
    border: '1px solid #EEEEEE',
    borderRadius: commonStyle.borderRadius,
    padding: '1rem',
  },
  inputGray: {
    // 회색 배경 input
    border: 'none',
    backgroundColor: '#F6F6F6',
    borderRadius: commonStyle.borderRadius,
  },
  buttonMain: {
    //메인 색상 button
    ...buttonStyle,
    backgroundColor: '#FF8450',
    color: 'white',
  },
  buttonWhite: {
    //흰색 button
    ...buttonStyle,
    border: 'none',
    color: '#7D7878',
    backgroundColor: 'white',
  },
  buttonGray: {
    // 회색 button
    ...buttonStyle,
    backgroundColor: '#E2E2E2',
    color: '#B6B3B3',
  },
  headerHeight: '56px',
  footerHeight: '64px',
};

export default theme;
