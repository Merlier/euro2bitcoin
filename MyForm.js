import React from "react";
import { View, TextInput, Text, Button } from "react-native";

function MyForm(props) {
  return React.createElement(
    View,
    {},
    React.createElement(TextInput, { placeholder: "Euro" }),
    React.createElement(Button, {
      title: "Convert",
      onPress: () => {},
    }),
    React.createElement(Text, [], ["... bitoin"])
  );
}

export default MyForm;
