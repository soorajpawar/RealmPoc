import Realm from 'realm';
import { Alert } from 'react-native';
import { SCREEN_NAMES } from '../../routes/helper';
let realm = new Realm({ path: 'UserDatabase.realm' });


const insertRecordInRealm = (user, successCallback) => {
  var ID =
  realm.objects('user_details').sorted('user_id', true).length > 0
    ? realm.objects('user_details').sorted('user_id', true)[0]
        .user_id + 1
    : 1;
    realm.write(() => {
        realm.create('user_details', {
          user_id: ID,
          user_name: user.user_name,
          user_contact: user.user_contact,
          user_address: user.user_address,
        });
        successCallback();
      });
};

const updateRecordInRealm = (user, successCallback, failuerCallback) => {
    realm.write(() => {
        var obj = realm
          .objects('user_details')
          .filtered('user_id =' +user.user_id);
        console.log('obj', obj);
        if (obj.length > 0) {
          obj[0].user_name = user.user_name;
          obj[0].user_contact = user.user_contact;
          obj[0].user_address = user.user_address;
          successCallback()
        } else {
          // alert('User Updation Failed');
          failuerCallback()
        }
      });
};

const deleteRecordInRealm = (userId, successCallback, failuerCallback) => {
    realm.write(() => {
        var ID = userId;
        if (
          realm.objects('user_details').filtered('user_id =' + userId)
            .length > 0
        ) {
          realm.delete(
            realm.objects('user_details').filtered('user_id =' + userId)
          );
          successCallback();
        } else {
          failuerCallback();
        }
      });
};

const getAllRecordFromRealm = () => {
    var user_details = realm.objects('user_details');
    return user_details;
}

const getUserDetailsById = (userId) =>{
    var user_details = realm
    .objects('user_details')
    .filtered('user_id =' + userId);
    let userObj = {
        user_name: '',
        user_contact: '',
        user_address: '',
    }
  if (user_details.length > 0) {
    userObj = {
        user_name: user_details[0].user_name,
        user_contact: user_details[0].user_contact,
        user_address: user_details[0].user_address,
    }
  } else {
    userObj = {
        user_name: '',
        user_contact: '',
        user_address: '',
    }
  }
  return userObj;
}

export {
    insertRecordInRealm,
    updateRecordInRealm,
    deleteRecordInRealm,
    getAllRecordFromRealm,
    getUserDetailsById
};
