import React from 'react';
import { Image, StyleSheet, ScrollView, Text } from 'react-native';
import { TItem } from '@types';

type TItemDetail = {
  item: TItem;
};

export const ItemDetail = ({ item }: TItemDetail) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: item.imageURL }} style={styles.image} />
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.descriptionText}>{item.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333333',
  },
});
