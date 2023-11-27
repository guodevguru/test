import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, ItemDetail } from '@components';
import { Routes, useAppRoute } from '@navigations';
import { useAppSelector } from '@store';
import { selectItemById } from '@store/slices/items';

export const DetailScreen = () => {
  const route = useAppRoute<Routes.Detail>();
  const itemId = route.params.itemId;
  const item = useAppSelector(state => selectItemById(state, itemId));

  if (!item) {
    return null;
  }
  return (
    <Container style={styles.container}>
      <ItemDetail item={item} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
