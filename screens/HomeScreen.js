import React, { useState, useEffect } from 'react'
import { SectionList, TouchableHighlight, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import Swipeable from '../components/Swipeable'

import { Appointment, SectionTitle } from '../components/index'
import { appointmentsApi } from '../utils/api'

const HomeScreen = ({ route, navigation }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const goToAddPatient = () => navigation.navigate('AddPatient')
  const rightButtons = [
    <TouchableHighlight>
      <Text>Button 1</Text>
    </TouchableHighlight>,
    <TouchableHighlight>
      <Text>Button 2</Text>
    </TouchableHighlight>,
  ]

  const fetchAppointments = () => {
    setIsLoading(true)
    appointmentsApi
      .get()
      .then(({ data }) => {
        setData(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  return (
    <ScheduleContainer>
      {data && (
        <SectionList
          sections={data}
          keyExtractor={(item) => item._id}
          refreshing={false}
          onRefresh={() => {
            fetchAppointments()
          }}
          renderItem={({ item }) => (
            <Swipeable rightButtons={rightButtons}>
              <Appointment item={item} />
            </Swipeable>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
        />
      )}
      <PlusButton activeOpacity={0.5} onPress={goToAddPatient}>
        <Ionicons name="ios-add" size={32} color="white" />
      </PlusButton>
    </ScheduleContainer>
  )
}

const PlusButton = styled.TouchableOpacity`
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

const ScheduleContainer = styled.View`
  flex: 1;
  background: #fff;
`

export default HomeScreen
