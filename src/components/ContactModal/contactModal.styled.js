import styled from '@emotion/styled';

export const ModalContactOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalContactWindow = styled.div`
  position: relative;
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
`;

export const ModalContactIcon = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
  cursor: pointer;
`;

export const ModalContactTitle = styled.h2`
  font-style: 24px;
  margin: 0 0 15px 0;
`;

export const ContactUiForm = styled.form`
  width: 400px;
  padding: 20px;
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`;
export const ContactLabel = styled.label`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;
export const ContactButton = styled.button`
  padding: 5px 10px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
`;
