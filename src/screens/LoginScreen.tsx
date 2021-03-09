import React, {useState} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

import {THEME} from '../theme';

export const LoginScreen: React.FC = ({}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const wrongLogin = () => {
    Alert.alert('Wrong Password or Username', 'Try again', [
      {
        text: 'Try',
        onPress: () => console.log('Try Pressed'),
      },
    ]);
  };

  return (
    <View style={styles.center}>
        <Text>aaa</Text>
      <View>
        <TextInput
          label="Username"
          style={styles.textInput}
          underlineColor={THEME.MAIN_COLOR}
          selectionColor={THEME.MAIN_COLOR}
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          label="Password"
          underlineColor={THEME.MAIN_COLOR}
          selectionColor={THEME.MAIN_COLOR}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.buttConteiner}>
        <Button
          style={styles.butt}
          mode="contained"
          color={THEME.MAIN_COLOR}
          onPress={wrongLogin}>
          Log In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: '10%',
  },
  textInput: {
    backgroundColor: THEME.WHITE_GREY_COLOR,
  },
  buttConteiner: {
    marginTop: '5%',
    alignItems: 'center',
  },
  butt: {
    width: '50%',
  },
});
