import React, { useState, useEffect } from 'react'
import { SectionList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import axios from 'axios'

import { Appointment, SectionTitle } from '../components/index'

const HomeScreen = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('https://trycode.pw/c/GGS8L.json').then(({ data }) => {
      setData(data)
    })
  }, [])

  return (
    <ScheduleContainer>
      {data && (
        <SectionList
          sections={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <Appointment item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
        />
      )}
      <PlusButton activeOpacity={0.5}>
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
