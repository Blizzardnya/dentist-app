import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Picker,
  Icon,
  Button,
} from 'native-base'
import styled from 'styled-components/native'
import DateTimePicker from 'react-native-modal-datetime-picker'

import { CustomButton } from '../components'
import { appointmentsApi } from '../utils/api'

function AddAppointmentScreen({ route, navigation }) {
  const [values, setValues] = useState({
    patient: route.params.patient._id,
  })
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false)

  const handleEventChange = (name, e) => {
    const text = e.nativeEvent.text
    setValues({
      ...values,
      [name]: text,
    })
  }

  const handleValueChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleConfirmDate = (date) => {
    setValues({
      ...values,
      date: date.toJSON().slice(0, 10),
    })

    setDatePickerVisibility.bind(false)
  }

  const handleConfirmTime = (date) => {
    setValues({
      ...values,
      time: `${('0' + date.getHours()).slice(-2)}:${(
        '0' + date.getMinutes()
      ).slice(-2)}`,
    })

    setDatePickerVisibility.bind(false)
  }

  const onSubmit = () => {
    appointmentsApi
      .add(values)
      .then(() => {
        navigation.goBack()
      })
      .catch((err) => {
        console.log(err, values)
      })
  }

  return (
    <Container
      style={{
        paddingLeft: 25,
        paddingRight: 25,
      }}
    >
      <Content>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Диагноз"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              selectedValue={values.diagnosis}
              onValueChange={handleValueChange.bind(this, 'diagnosis')}
              style={{ marginTop: 15 }}
            >
              <Picker.Item label="Пульпит" value="Пульпит" />
              <Picker.Item label="Удаление зуба" value="Удаление зуба" />
              <Picker.Item label="Парадантит" value="Парадантит" />
              <Picker.Item label="Чистка каналов" value="Чистка каналов" />
            </Picker>
          </Item>
          <Item style={{ marginLeft: 0 }} floatingLabel>
            <Label>Номер зуба</Label>
            <Input
              onChange={handleEventChange.bind(this, 'dent_number')}
              value={values.dent_number}
              keyboardType="numeric"
              autoFocus
              style={{ marginTop: 12 }}
            />
          </Item>

          <Item style={{ marginLeft: 0 }} floatingLabel>
            <Label>Цена</Label>
            <Input
              onChange={handleEventChange.bind(this, 'price')}
              value={values.price}
              keyboardType="decimal-pad"
              style={{ marginTop: 12 }}
            />
          </Item>
          <Item style={{ marginTop: 20, marginLeft: 0 }}>
            <TimeRow>
              <Button
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                bordered
                light
                onPress={setDatePickerVisibility.bind(true)}
              >
                <Text>{values.date ? values.date : 'Выберите дату'}</Text>
              </Button>
              <Button
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                bordered
                light
                onPress={setTimePickerVisibility.bind(true)}
              >
                <Text>{values.time ? values.time : 'Выберите время'}</Text>
              </Button>
              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                display="calendar"
                onConfirm={handleConfirmDate}
                onCancel={setDatePickerVisibility.bind(false)}
              />
              <DateTimePicker
                isVisible={isTimePickerVisible}
                mode="time"
                is24Hour={true}
                display="clock"
                onConfirm={handleConfirmTime}
                onCancel={setTimePickerVisibility.bind(false)}
              />
            </TimeRow>
          </Item>
          <View style={{ marginTop: 30 }}>
            <CustomButton onPress={onSubmit} color="#87cc6f">
              Добавить приём
            </CustomButton>
          </View>
        </Form>
      </Content>
    </Container>
  )
}

const TimeRow = styled.View`
  flex-direction: row;
  padding-top: 20px;
`

export default AddAppointmentScreen
