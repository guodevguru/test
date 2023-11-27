import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';

type TButton = React.PropsWithChildren & TouchableOpacityProps;

export const Button = ({ children, ...props }: TButton) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      {typeof children === 'string' ? (
        <Text style={styles.buttonText}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#003689',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});
