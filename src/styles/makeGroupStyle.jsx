// src/styles/makeGroupStyle.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  margin: 20px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%; /* 가로 폭 조정 */
  max-width: 400px; /* 최대 폭을 설정하여 중앙 정렬 효과 */
  
  label {
    margin-bottom: 5px;
    text-align: left; /* 레이블을 왼쪽 정렬 */
  }
  
  input, textarea {
    width: 100%; /* 가로 폭 조정 */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: left; /* 텍스트를 왼쪽 정렬 */
  }

  textarea {
    resize: none; /* 크기 조정 불가 */
  }
`;

export const ImageSelection = styled.div`
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  margin-bottom: 5px;
  width: 100%;
`;

export const FileInputBox = styled.div`
  display: flex;
  align-items: center; /* 중앙 정렬 */
  justify-content: center; /* 중앙 정렬 */
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 5px; /* 간격 추가 */
  width: 100%;
`;

export const PublicCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
