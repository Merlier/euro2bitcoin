import React from "react";
import { View, TextInput, Text, Button } from "react-native";

function MyForm(props) {
  return (
    <View>
      <TextInput placeholder="Euro" />
      <Button title="Convert" onPress={() => {}} />
      <Text>... Bitcoin</Text>
    </View>
  );
}

export default MyForm;
