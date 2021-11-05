import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

const defBtn = ({props}) => {
    return (
      <TouchableWithoutFeedback
        style={...props.styles}
        onPress={onPressed}
      >
        <Text style={styles.btnText}>Start Game</Text>
      </TouchableWithoutFeedback>
    );
}

export default defBtn
