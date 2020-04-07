import styled from 'styled-components';
import { Link } from "gatsby";
import { GoSearch, GoMarkGithub } from 'react-icons/go';
import { FaLinkedin, FaSun } from 'react-icons/fa';

export const Container = styled.div`
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.secundary };

  /* border-bottom: 0.5px solid ${({ theme }) => theme.colors.placeholder }; */
  margin-bottom: 1.45rem;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;

  margin: 0;
  /* margin-right: 10px; */
`;

export const Title = styled(Link)`
  text-decoration: none;

  margin: 0;
  margin-left: 10px;

  color: ${({ theme }) => theme.colors.text };
`;

export const Div = styled.div`
  /* margin: 0 auto; */
  /* width: 100%; */
  /* max-width: 960px; */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1.45rem 1.0875rem;
`;

export const Search = styled.input`
  max-width: 100%;
  width: 250px;

  height: 30px;

  padding: 10px;
  padding-left: 40px;

  background: ${({ theme }) => theme.colors.tertiary };
  color: ${({ theme }) => theme.colors.placeholder };

  font-size: 14px;

  outline: none;
  border: none;
  border-radius: 5px;

  :focus{ 
    border: 1px solid ${({ theme }) => theme.colors.Purple };
    background: ${({ theme }) => theme.colors.secundary };
  }

  z-index: 9;
`;

export const Lupa = styled(GoSearch)`
  position: relative;

  left: -69%;

  color: ${({ theme }) => theme.colors.Purple };

  z-index: 10;
`;




// ---------------------------------- ICONES ---------------------------------------

export const Github = styled(GoMarkGithub)`
  color: ${({ theme }) => theme.colors.text };

  cursor: pointer;
`;

export const Linkedin = styled(FaLinkedin)`
  color: ${({ theme }) => theme.colors.text };

  margin: 10px;

  cursor: pointer;
`;

export const Sun = styled(FaSun)`
  color: ${({ theme }) => theme.colors.text };

  cursor: pointer;
`;