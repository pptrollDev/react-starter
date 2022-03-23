import styled from 'styled-components';
import { GRAY_100, GRAY_60, RED_60 } from '../../../styles/colors';

export const Wrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  display: ${(props) => props.direction === 'horizontal' && 'flex'};
`;

export const LabelWrapper = styled.div<{
  direction: 'horizontal' | 'vertical';
  isSubLabel: boolean;
}>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  width: ${(props) => {
    if (props.direction === 'vertical') return;

    if (props.isSubLabel) return '344px';

    return '5.5rem';
  }};
  font-weight: bold;
  font-size: 0.8125rem;
  padding-top: ${(props) => props.direction === 'horizontal' && '0.125rem'};

  span {
    color: ${RED_60};
  }
`;

export const LabelContainer = styled.div<{
  isSubLabel: boolean;
}>`
  color: ${(props) => (props.isSubLabel ? GRAY_100 : GRAY_60)};
`;

export const SubLabelContainer = styled.div`
  margin-top: 0.25rem;
  color: ${GRAY_60};
  font-weight: 500;
`;

export const CheckboxesWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  display: ${(props) => props.direction === 'horizontal' && 'flex'};
  align-items: ${(props) => props.direction === 'horizontal' && 'center'};
  flex-wrap: wrap;
`;

export const CheckboxContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  padding: 0.1875rem 0;
  margin-right: ${(props) => props.direction === 'horizontal' && '2rem'};
`;

export const ErrorContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  margin-top: 0.25rem;
  color: ${RED_60};
  font-weight: 500;
  font-size: 0.75rem;
`;
