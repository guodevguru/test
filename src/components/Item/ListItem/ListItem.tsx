import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { TItem } from '@types';
import { Routes, useAppNavigation } from '@navigations';
import { useAppDispatch } from '@store';
import { itemDelete } from '@store/slices/items';

type TListItem = {
  item: TItem;
};

const ListItemComponent = ({ item }: TListItem) => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    navigation.navigate(Routes.Detail, { itemId: item.id });
  };

  const handleDelete = () => {
    dispatch(itemDelete(item));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={{ uri: item.imageURL }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descriptionText} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <Text>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export const ListItem = memo(ListItemComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  image: {
    width: 100,
    height: 100,
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
