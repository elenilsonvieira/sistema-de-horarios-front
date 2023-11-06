import styled from 'styled-components';

export const Main = styled.div`
    padding: 5px 0;
    width: 100%;
    color: #797979;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
`;

export const Form = styled.form`
    width: 100%;
    max-height: 370px;
    overflow: auto;
    margin-bottom: 10px;
    padding-bottom: 10px;
`;
export const ConfirmationModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #ccc;
  padding: 10px; 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px; 
  width: 100%;
  text-align: center;
`;

export const ConfirmationMessage = styled.p`
  font-size: 16px; 
  margin-bottom: 15px; 
`;

export const ConfirmationButton = styled.button`
  background-color: green;
  color: white;
  padding: 8px 16px; 
  border: none;
  cursor: pointer;
  margin: 5px;
`;

export const CancelButton = styled(ConfirmationButton)`
  background-color: red;
`;
