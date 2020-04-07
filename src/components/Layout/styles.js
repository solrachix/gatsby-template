import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.secundary };

  overflow-x: hidden;

  main{
    /* height: 100vh; */
  }

  ul::-webkit-scrollbar{
    height: 4px;
    width: 4px;
    background: ${({ theme }) => theme.colors.secundary };
  }
  ul::-webkit-scrollbar-thumb:horizontal{
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.Purple };
  }

`;

export const Footer = styled.div`
  width: 100%;
  height: 80px;

  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.text };

  border-top: 1px solid ${({ theme }) => theme.colors.tertiary };
`;