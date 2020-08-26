import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { Foundation, Ionicons } from '@expo/vector-icons'

import { GrayText, CustomButton, Badge } from '../components/index'

function PatientScreen({ route, navigation }) {
  const { patient, diagnosis, date, time, price } = route.params

  return (
    <View style={{ flex: 1 }}>
      <PatientContainer>
        <PatientFullName>{patient.fullname}</PatientFullName>
        <GrayText>{patient.phone}</GrayText>

        <PatientButtons>
          <FormulaButtonView>
            <CustomButton>Формула зубов</CustomButton>
          </FormulaButtonView>
          <PhoneButtonView>
            <CustomButton color="#84d269">
              <Foundation name="telephone" size={24} color="white" />
            </CustomButton>
          </PhoneButtonView>
        </PatientButtons>
      </PatientContainer>

      <PatientAppointments>
        <AppointmentCardContainer>
          <AppointmentCard>
            <MoreButton>
              <Ionicons name="md-more" size={24} color="rgba(0, 0, 0, 0.4)" />
            </MoreButton>
            <AppointmentCardRow>
              <Ionicons name="md-medical" size={24} color="#a3a3a3" />
              <AppointmentCardLabel>
                Зуб: <Text style={{ fontWeight: 'bold' }}>12</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <Foundation name="clipboard-notes" size={24} color="#a3a3a3" />
              <AppointmentCardLabel>
                Диагноз: <Text style={{ fontWeight: 'bold' }}>{diagnosis}</Text>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow
              style={{ marginTop: 15, justifyContent: 'space-between' }}
            >
              <Badge style={{ flex: 1 }} active>
                {date} - {time}
              </Badge>
              <Badge style={{ marginLeft: 50 }} color="green">
                {price} P
              </Badge>
            </AppointmentCardRow>
          </AppointmentCard>
        </AppointmentCardContainer>
      </PatientAppointments>
    </View>
  )
}

const MoreButton = styled.View`
  position: absolute;
  right: 25px;
  top: 25px;
`

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`
const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 3.5px;
  margin-top: 3.5px;
`

const AppointmentCard = styled.View`
  shadow-color: gray;
  shadow-opacity: 0.4;
  shadow-radius: 3.5px;
  elevation: 0.8;
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
`

const AppointmentCardContainer = styled.View`
  padding: 25px;
`

const PatientAppointments = styled.View`
  flex: 1;
  background: #f8fafd;
`

const PhoneButtonView = styled.View`
  width: 45px;
  margin-left: 10px;
`

const FormulaButtonView = styled.View`
  flex: 1;
`

const PatientButtons = styled.View`
  margin-top: 20px;
  flex-direction: row;
`

const PatientFullName = styled.Text`
  font-weight: bold;
  font-size: 28px;
  line-height: 30px;
  margin-bottom: 3px;
`

const PatientContainer = styled.View`
  background: #fff;
  padding: 25px;
  padding-bottom: 35px;
`

export default PatientScreen
