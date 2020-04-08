import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    list-style:none;
    text-decoration:none;
    margin:0;padding:0;
    text-align:left;
    border:0;
    color:#23292e;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    outline:0;
    font-size:1rem;
    font-family:'CircularStd'
  }

  button{
    cursor: pointer;
  }

  /* Condiment -> latin */
  @font-face {
    font-family: 'Condiment';
    font-style: normal;
    font-weight: 400;
    src: local('Condiment'), local('Condiment-Regular'), url(https://fonts.gstatic.com/s/condiment/v7/pONk1hggFNmwvXALyH6irIP5.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }


  /* Baloo -> latin */
  @font-face {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Baloo 2 Regular'), local('Baloo2-Regular'), url(https://fonts.gstatic.com/s/baloo2/v1/wXKrE3kTposypRyd51jcAA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;