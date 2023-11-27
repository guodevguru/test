import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { SafeAreaView, Edges } from 'react-native-safe-area-context';

type TContainer = React.PropsWithChildren &
  ViewProps & {
    safe?: boolean;
    edges?: Edges;
  };

export const Container = ({
  safe = false,
  edges,
  children,
  ...props
}: TContainer) => {
  if (safe) {
    return (
      <SafeAreaView
        {...props}
        style={[props.style, styles.container]}
        edges={edges}>
        {children}
      </SafeAreaView>
    );
  } else {
    return (
      <View {...props} style={[props.style, styles.container]}>
        {children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
