/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';
import Button from '../../components/Button';
import { AlertWithOption, AlertWithoutOption } from '../../components/AlertModel'
import { insertRecordInRealm } from '../../components/realm';
import { SCREEN_NAMES } from '../../routes/helper';
import strings from '../../constant/strings';



export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userContact: '',
      userAddress: '',
    };
  }

  successCallback = () => {
    const { navigation } = this.props;
    AlertWithOption( strings.register.success, () => navigation.navigate(SCREEN_NAMES.home) )
  };
  
  register_user = () => {
    const { userName, userContact,userAddress } = this.state;
    if (userName) {
      if (userContact) {
        if (userAddress) {
          const userObj= {
            user_name: userName,
            user_contact: userContact,
            user_address: userAddress,
          }
          insertRecordInRealm(userObj,this.successCallback);
        } else {
          AlertWithoutOption('Please fill Address')
        }
      } else {
        AlertWithoutOption('Please fill Contact Number')
      }
    } else {
      AlertWithoutOption('Please fill Name')
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <TextInputComponent
              placeholder="Enter Name"
              onChangeText={userName => this.setState({ userName })}
            />
            <TextInputComponent
              placeholder="Enter Contact No"
              onChangeText={userContact => this.setState({ userContact })}
              maxLength={10}
              keyboardType="numeric"
            />
            <TextInputComponent
              placeholder="Enter Address"
              onChangeText={userAddress => this.setState({ userAddress })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />
            <Button
              title="Submit"
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}