import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const PowerButton = ({ label, onPress, disabled }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  disabled: {
    backgroundColor: '#95a5a6',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PowerButton;
