/*Custom Alert*/
import React from 'react';
import { Alert } from 'react-native';

const AlertWithOption = (message, onPress) => {
    Alert.alert(
        'Success',
        message,
        [
          {
            text: 'Ok',
            onPress:  onPress,
          },
        ],
        { cancelable: false }
      );
};

const AlertWithoutOption = (message) => {
  alert(message);
};

export {
  AlertWithOption,
  AlertWithoutOption
}