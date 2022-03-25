import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputBackButtonProps {
  color: string;
  size: number;
  onPress: () => void;
}

export const BackButton = (props: InputBackButtonProps) => {
  const { color, size, onPress } = props;

  return (
    <TouchableOpacity>
      <Ionicons name="arrow-back" color={color} size={size} onPress={onPress} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
