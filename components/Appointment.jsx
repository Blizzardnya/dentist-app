import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const Appointment = ({ user, diagnosis, active, time }) => {
  return (
    <GroupItem>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullName}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  )
}

Appointment.defaultProps = {
  title: 'Untitled',
  items: [],
}

const GroupDate = styled.Text`
  background: ${(props) => (props.active ? '#2a86ff' : '#e9f5ff')};
  border-radius: 18px;
  color: ${(props) => (props.active ? '#fff' : '#4294ff')}
  font-weight: bold;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`

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
