import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type TInput = TextInputProps & {
  error?: string;
};

export const Input = ({ error, ...props }: TInput) => {
  return (
    <View style={styles.wrapper}>
      <TextInput {...props} style={[props.style, styles.input]} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    padding: 12,
    borderRadius: 4,
  },
  errorText: {
    fontSize: 12,
    color: '#FF0000',
  },
});
