import styled from 'styled-components';
import { GRAY_30, GRAY_40, GRAY_50, WHITE } from '../../../styles/colors';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead tr {
    border-bottom: 1px solid ${GRAY_40};
    background-color: ${WHITE};
    position: sticky;
    top: 0;
  }

  th {
    padding: 0.875rem 1.5rem;
    color: ${GRAY_50};
    font-size: 0.8125rem;
    font-weight: 500;
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid ${GRAY_30};
  }

  tbody tr:last-child {
    border-bottom: none;
  }

  td {
    padding: 0.75rem 1.5rem;
    font-size: 0.8125rem;
    max-width: 18.75rem;

    button {
      font-size: 0.8125rem;
      height: 1.875rem;
    }
  }
`;
