/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import { StyleSheet, View, Text } from "react-native";
import MyForm from "./MyForm";

const App: () => Node = () => {
  return (
    <View>
      <MyForm />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
