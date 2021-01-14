/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { deleteRecordInRealm, getAllRecordFromRealm } from '../../components/realm';
import colors from '../../constant/colors';
import strings from '../../constant/strings';
import Images from '../../images';
import styles from './styles';
import { AlertWithOption, AlertWithoutOption } from '../../components/AlertModel'
import { SCREEN_NAMES } from '../../routes/helper';

export default class ViewAllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    this.state = {
      FlatListItems: getAllRecordFromRealm(),
    };
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: colors.black }} />
    );
  };

  successCallback = () => {
    const { navigation } = this.props;
    AlertWithOption( strings.deleteUser.success, () => navigation.navigate(SCREEN_NAMES.home) )
  };

  failuerCallback = () => {
    AlertWithoutOption('Invalid User Id')
  }

  deleteUser = (userId) => {
    var that = this;
    deleteRecordInRealm(userId, that.successCallback, this.failuerCallback)
  };

  alerForConfirm = (userId) => {
    AlertWithOption( strings.deleteUser.deleteMessage, () =>  this.deleteUser(userId) )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: colors.white, padding: 20 }}>
               <TouchableOpacity onPress={()=>this.alerForConfirm(item.user_id)}>
                <Image source={Images.delete} style={styles.imageView}></Image>
              </TouchableOpacity> 
              <Text>{`${strings.tableFields.id} :`} {item.user_id}</Text>
              <Text>{`${strings.tableFields.name} :`} {item.user_name}</Text>
              <Text>{`${strings.tableFields.contact} :`} {item.user_contact}</Text>
              <Text>{`${strings.tableFields.address} :`} {item.user_address}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}