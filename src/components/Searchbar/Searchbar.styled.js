import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
 
`
export const FormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  cursor: pointer;

`


export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  border: 0;
`

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
   outline: none;
  padding-left: 4px;
  padding-right: 4px;

`


export const Header = styled.header`

  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
 
`