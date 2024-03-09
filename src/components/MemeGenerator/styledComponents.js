import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const FormHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
`

export const LabelText = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 12px;
`

export const InputElement = styled.input`
  width: 300px;
  height: 35px;
  margin-bottom: 20px;
`

export const SelectElement = styled.select`
  width: 300px;
  height: 35px;
`
export const OptionElement = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  padding: 10px;
  width: 145px;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
export const MemeGeneratorContainer = styled.div`
  min-height: 700px;
  width: 700px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.bgUrl});
  margin-left: 40px;
  padding: 50px;
`
export const TextContent = styled.p`
  font-size: ${props => props.fontSize}px;
  color: red;
`
