/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {AppBarComponent} from "./src/components/AppBarComponent";

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <AppBarComponent />
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut commodi expedita fugiat laboriosam maxime minus pariatur quisquam, voluptatum? Autem dolor dolorum facere facilis, magnam nisi omnis repellendus saepe tempore?</Text>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
