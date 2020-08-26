import React from 'react'
import styled from 'styled-components'

const CustomButton = ({ children, color, onPress }) => {
  return (
    <ButtonWrapper onPress={onPress} color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  )
}

CustomButton.defaultProps = {
  color: '#2a86ff',
}

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props) => props.color};
  height: 45px;
`

const ButtonText = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 16px;
`

export default CustomButton
