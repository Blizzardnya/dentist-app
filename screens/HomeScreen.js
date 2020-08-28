import React, { useState, useEffect } from 'react'
import { SectionList, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import Swipeable from '../components/Swipeable'

import { Appointment, SectionTitle, PlusButton } from '../components/index'
import { appointmentsApi } from '../utils/api'

const HomeScreen = ({ route, navigation }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const goToAddPatient = () => navigation.navigate('AddPatient')

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
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  const removeAppointment = (id) => {
    Alert.alert('Удаление приёма', 'Вы действительно хотите удалить приём?', [
      {
        text: 'Отмена',
        style: 'cancel',
      },
      {
        text: 'Удалить',
        onPress: () => {
          setIsLoading(true)
          appointmentsApi
            .remove(id)
            .then(() => {
              fetchAppointments()
            })
            .catch((err) => {
              console.log(err)
            })
            .finally(() => {
              setIsLoading(false)
            })
        },
      },
    ])
  }

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
            <Swipeable
              key={item._id}
              rightButtons={[
                <SwipeViewButton style={{ backgroundColor: '#b4c1cb' }}>
                  <Ionicons name="md-create" size={28} color="white" />
                </SwipeViewButton>,
                <SwipeViewButton
                  onPress={removeAppointment.bind(this, item._id)}
                  style={{ backgroundColor: '#f85a5a' }}
                >
                  <Ionicons name="ios-close" size={48} color="white" />
                </SwipeViewButton>,
              ]}
            >
              <Appointment item={item} />
            </Swipeable>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
        />
      )}
      <PlusButton onPress={goToAddPatient} />
    </ScheduleContainer>
  )
}

const SwipeViewButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding-left: 28px;
`

const ScheduleContainer = styled.View`
  flex: 1;
  background: #fff;
`

export default HomeScreen
