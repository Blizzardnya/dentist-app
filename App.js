import React from 'react'
import { SectionList, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import Appointment from './components/Appointment'

export default function App() {
  const groupItems = [
    {
      time: '15:30',
      diagnosis: 'Удаление зуба',
      active: true,
      user: {
        fullName: 'Василий Васильевич',
        avatar:
          'https://sun2.beltelecom-by-minsk.userapi.com/impg/46DzvP0rlg007JFgWUOzR7DFhj8pPe8KuE4gLw/KDlUKANuDFs.jpg?size=50x0&quality=88&crop=0,0,2048,2048&sign=32b35b08d22e77b25c5d0a94bedfa2f2&ava=1',
      },
    },
    {
      time: '12:30',
      diagnosis: 'Пульпит',
      user: {
        fullName: 'Иван Иванов',
        avatar:
          'https://sun1.beltelecom-by-minsk.userapi.com/impf/c849220/v849220381/14d637/ncLWrBm482Y.jpg?size=50x0&quality=88&crop=45,45,1289,1289&sign=97cf6d380267b1a9bb6b7e60757c91ea&ava=1',
      },
    },
    {
      time: '15:30',
      diagnosis: 'Удаление зуба',
      active: true,
      user: {
        fullName: 'Василий Васильевич',
        avatar:
          'https://sun2.beltelecom-by-minsk.userapi.com/impg/46DzvP0rlg007JFgWUOzR7DFhj8pPe8KuE4gLw/KDlUKANuDFs.jpg?size=50x0&quality=88&crop=0,0,2048,2048&sign=32b35b08d22e77b25c5d0a94bedfa2f2&ava=1',
      },
    },
    {
      time: '12:30',
      diagnosis: 'Пульпит',
      user: {
        fullName: 'Иван Иванов',
        avatar:
          'https://sun1.beltelecom-by-minsk.userapi.com/impf/c849220/v849220381/14d637/ncLWrBm482Y.jpg?size=50x0&quality=88&crop=45,45,1289,1289&sign=97cf6d380267b1a9bb6b7e60757c91ea&ava=1',
      },
    },
  ]

  const DATA = [
    {
      title: 'September 14',
      data: groupItems,
    },
    {
      title: 'September 15',
      data: groupItems,
    },
  ]

  return (
    <Schedule>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={32} color="white" />
      </PlusButton>
    </Schedule>
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

const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #000;
  margin-top: 25px;
  padding: 0 20px;
`

const Schedule = styled.View`
  flex: 1;
  margin-top: 30px;
`
