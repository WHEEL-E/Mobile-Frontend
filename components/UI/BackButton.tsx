import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputBackButtonProps {
  onPress: () => void;
}

export const BackButton = (props: InputBackButtonProps) => {
  const { onPress } = props;

  return (
    <TouchableOpacity>
      <Ionicons name="arrow-back" color="#000" size={35} onPress={onPress} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
