/*Screen to delete the user*/
import React from 'react';
import {  View } from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';
import Button from '../../components/Button';
import colors from '../../constant/colors';
import { deleteRecordInRealm } from '../../components/realm';
import { AlertWithOption, AlertWithoutOption } from '../../components/AlertModel'
import strings from '../../constant/strings';
import { SCREEN_NAMES } from '../../routes/helper';

export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
    };
  }

  successCallback = () => {
    const { navigation } = this.props;
    AlertWithOption( strings.deleteUser.success, () => navigation.navigate(SCREEN_NAMES.home) )
  };

  failuerCallback = () => {
    AlertWithoutOption('Invalid User Id')
  }

  deleteUser = () => {
    var that = this;
    const { userId } = this.state;
    deleteRecordInRealm(userId, that.successCallback, this.failuerCallback)
  };
  render() {
    return (
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <TextInputComponent
          placeholder="Enter User Id"
          onChangeText={userId => this.setState({ userId })}
        />
        <Button
          title="Delete User"
          customClick={this.deleteUser.bind(this)}
        />
      </View>
    );
  }
}