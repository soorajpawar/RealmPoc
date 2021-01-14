/*Screen to update the user*/
import React from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';
import Button from '../../components/Button';
import { getUserDetailsById, updateRecordInRealm } from '../../components/realm';
import { AlertWithOption, AlertWithoutOption } from '../../components/AlertModel'
import { SCREEN_NAMES } from '../../routes/helper';
import strings from '../../constant/strings';

export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_id: '',
      user_name: '',
      user_contact: '',
      user_address: '',
    };
  }
  searchUser = () => {
    const { input_user_id } = this.state;
    var user_details = getUserDetailsById(input_user_id)
    this.setState({
          user_name: user_details.user_name,
          user_contact: user_details.user_contact,
          user_address: user_details.user_address,
        });
  };

  successCallback = () => {
    const { navigation } = this.props;
    AlertWithOption( strings.updateUserDetails.success, () => navigation.navigate(SCREEN_NAMES.home) )
  };

  failuerCallback = () => {
    AlertWithoutOption('User Updation Failed')
  }

  updateUser = () => {
    var that = this;
    const { input_user_id,user_name, user_contact, user_address } = this.state;
    if (input_user_id) {
      if (user_name) {
        if (user_contact) {
          if (user_address) {
            const userObj= {
              user_id: input_user_id,
              user_name: user_name,
              user_contact: user_contact,
              user_address: user_address,
            }
            updateRecordInRealm(userObj, this.successCallback, this.failuerCallback)
          } else {
            AlertWithoutOption('Please fill Address')
          }
        } else {
          AlertWithoutOption('Please fill Contact Number')
        }
      } else {
        AlertWithoutOption('Please fill Name');
      }
    } else {
      AlertWithoutOption('Please fill User Id');
    }
  };

  render() {
    const { user_name, user_contact, user_address } = this.state;
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <TextInputComponent
              placeholder="Enter User Id"
              onChangeText={input_user_id => this.setState({ input_user_id })}
            />
            <Button
              title="Search User"
              customClick={this.searchUser.bind(this)}
            />
            <TextInputComponent
              placeholder="Enter Name"
              value={user_name}
              onChangeText={user_name => this.setState({ user_name })}
            />
            <TextInputComponent
              placeholder="Enter Contact No"
              value={'' + user_contact}
              onChangeText={user_contact => this.setState({ user_contact })}
              maxLength={10}
              keyboardType="numeric"
            />
            <TextInputComponent
              value={user_address}
              placeholder="Enter Address"
              onChangeText={user_address => this.setState({ user_address })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />
            <Button
              title="Update User"
              customClick={this.updateUser.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}