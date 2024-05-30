import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;
export const BrandControlsWrap=styled.div`
  display: flex;
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right:10px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`;

export const DateDisplay = styled.div`
  font-size: 16px;
  font-weight: bold;
`;