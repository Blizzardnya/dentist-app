import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import GrayText from './styles/GrayText'
import Badge from './styles/Badge'

function getRandomColor() {
  return '#' + Math.random().toString(16).slice(2, 8)
}

const Appointment = ({ item }) => {
  const { patient, diagnosis, active, time } = item
  const navigation = useNavigation()
  const goToPatient = () => navigation.navigate('Patient', item)

  return (
    <GroupItem onPress={goToPatient}>
      <Avatar>
        <Letter>{patient.fullname[0].toUpperCase()}</Letter>
      </Avatar>
      <View style={{ flex: 1 }}>
        <FullName>{patient.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <Badge active={active}>{time}</Badge>
    </GroupItem>
  )
}

Appointment.defaultProps = {
  title: 'Untitled',
  items: [],
}

const Letter = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: white;
`

const FullName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

const Avatar = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  background-color: ${getRandomColor()};
`

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`

export default Appointment
