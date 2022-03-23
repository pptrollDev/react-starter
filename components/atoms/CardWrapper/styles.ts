import styled from 'styled-components';
import { WHITE } from '../../../styles/colors';

export const Wrapper = styled.div<{ borderRadius: string }>`
  background-color: ${WHITE};
  border-radius: ${(props) => props.borderRadius};
  padding: 2rem;
  box-shadow: 0 0.125rem 1.25rem rgba(17, 23, 35, 0.07);
`;
