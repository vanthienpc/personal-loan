import WebFontLoader from 'webfontloader';
import { createGlobalStyle, keyframes } from 'styled-components';

WebFontLoader.load({
  google: {
    families: ['IBM Plex Sans Condensed:400,500,600,700'],
  },
});

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const GlobalStyled = createGlobalStyle`
  body {
    font-family: 'IBM Plex Sans Condensed', serif;
    background-color: #f0f2f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .ant-layout {
    height: 100vh;
    animation: ${fadeInAnimation} ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .ant-layout-header {
    text-align: center;
    background: #00d367;
  }
  
  .ant-layout-header h1 {
    color: #ffffff;
  }
  
  .ant-layout-content {
    padding: 50px 50px 0 50px;
  }
  
  .ant-layout-footer {
    text-align: center;
  }

  .ant-btn-primary,
  .ant-btn-primary:hover,
  .ant-btn-primary:visited,
  .ant-btn-primary:active,
  .ant-btn-primary:focus {
    border-color: #00d367;
    background-color: #00d367;
  }

  .ant-btn-primary:hover {
    opacity: 0.8;
  }

  .ant-spin-spinning {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;
