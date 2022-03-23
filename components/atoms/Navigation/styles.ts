import styled from 'styled-components';
import { GRAY_30, GRAY_60, GRAY_70, GRAY_80, WHITE } from '../../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
`;

export const SidebarWrapper = styled.div`
  padding: 1.125rem 0;
  width: 12rem;
  height: calc(100vh - 2.25rem);
  background-color: ${GRAY_80};
  color: white;
  flex-shrink: 0;
`;

export const LogoWrapper = styled.div``;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.625rem;
`;

export const NavigationWrapper = styled.div<{ isFocus: boolean }>`
  padding: 0 0.375rem;

  .navigationContainer {
    display: flex;

    button {
      border: none;
      border-radius: 0.5rem;
      padding: 0.875rem 1rem;
      width: 100%;
      background-color: ${(props) => (props.isFocus ? WHITE : GRAY_80)};
      color: ${(props) => (props.isFocus ? GRAY_80 : WHITE)};
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 0.875rem;
      cursor: pointer;

      img {
        margin-right: 0.5rem;
        width: 1rem;
      }
    }
  }
`;

export const ChildNavigationWrapper = styled.div<{ isFocus: boolean }>`
  margin-top: 0.25rem;

  button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 0 0.75rem 2.25rem;
    width: 100%;
    background-color: ${(props) => (props.isFocus ? GRAY_70 : GRAY_80)};
    color: ${(props) => (props.isFocus ? WHITE : GRAY_60)};
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 0.75rem;
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.div`
  width: calc(100vw - 12rem);
  padding: 0 2rem;
  overflow-x: scroll;
`;

export const HeadContainer = styled.div`
  padding-top: 1.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 67.5rem;

  img {
    margin-right: 0.375rem;
    width: 1.5rem;
  }

  .userSpan {
    border-right: 1px solid ${GRAY_30};
    padding-right: 0.625rem;
    font-weight: bold;
    font-size: 0.75rem;
    color: ${GRAY_80};
  }

  .hospitalSpan {
    padding-left: 0.625rem;
    font-weight: bold;
    font-size: 0.75rem;
    color: ${GRAY_80};
  }
`;

export const ContentContainer = styled.div`
  padding-top: 1.25rem;
  position: relative;
  min-width: 67.5rem;
  height: calc(100vh - 4rem);
  overflow: scroll;
`;
