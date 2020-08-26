import React, { useState } from 'react'
import { View } from 'react-native'
import { Container, Content, Form, Item, Label, Input } from 'native-base'

import { CustomButton } from '../components'
import { patientsApi } from '../utils/api'

function AddPatientScreen({ route, navigation }) {
  const [values, setValues] = useState({})

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text
    setValues({
      ...values,
      [name]: text,
    })
  }

  const onSubmit = () => {
    patientsApi
      .add(values)
      .then(() => {
        navigation.navigate('Home')
      })
      .catch((err) => {
        console.log(err)
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
          <Item style={{ marginLeft: 0 }} floatingLabel>
            <Label>Имя и Фамилия</Label>
            <Input
              onChange={handleChange.bind(this, 'fullname')}
              value={values.fullname}
              autoFocus
              style={{ marginTop: 12 }}
            />
          </Item>
          <Item style={{ marginLeft: 0 }} floatingLabel>
            <Label>Телефон</Label>
            <Input
              onChange={handleChange.bind(this, 'phone')}
              value={values.phone}
              keyboardType="phone-pad"
              style={{ marginTop: 12 }}
            />
          </Item>
          <View style={{ marginTop: 30 }}>
            <CustomButton onPress={onSubmit} color="#87cc6f">
              Добавить пациента
            </CustomButton>
          </View>
        </Form>
      </Content>
    </Container>
  )
}

export default AddPatientScreen
