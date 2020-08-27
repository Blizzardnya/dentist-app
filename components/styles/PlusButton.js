import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

const PlusButton = ({ onPress }) => (
  <PlusButtonWrapper activeOpacity={0.5} onPress={onPress}>
    <Ionicons name="ios-add" size={32} color="white" />
  </PlusButtonWrapper>
)

const PlusButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  shadow-radius: 3.5px;
  elevation: 4;
`
export default PlusButton
