import React from 'react'
import styled from 'styled-components/native'

const getColor = ({ active, color }) => {
  const colors = {
    green: {
      background: 'rgba(132, 210, 105, 0.21)',
      text: '#61bb42',
    },
    active: {
      background: '#2a86ff',
      text: '#fff',
    },
    default: {
      background: '#e9f5ff',
      text: '#4294ff',
    },
  }

  if (active) {
    return colors.active
  } else if (color && colors[color]) {
    return colors[color]
  } else {
    return colors.default
  }
}

export default styled.Text`
  background: ${(props) => getColor(props).background};
  border-radius: 18px;
  color: ${(props) => getColor(props).text}
  font-weight: bold;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`
