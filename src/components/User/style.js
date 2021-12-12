import styled from "styled-components";

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  :hover{
    cursor: pointer;
    background-color: rgb(0,0,0,0.5);
    border-radius: 20px;
    transition: .2s ease-in;
    
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;
`;

export const UserPicture = styled.img`
  border-radius: 50%;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
