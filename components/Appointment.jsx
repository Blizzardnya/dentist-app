import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import GrayText from './styles/GrayText'
import Badge from './styles/Badge'

const Appointment = ({ item }) => {
  const { user, diagnosis, active, time } = item
  const navigation = useNavigation()
  const goToPatient = () => navigation.navigate('Patient', item)

  return (
    <GroupItem onPress={goToPatient}>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
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

const FullName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`

export default Appointment
