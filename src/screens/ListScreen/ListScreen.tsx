import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Container, Button, ListItem } from '@components';
import { Routes, useAppNavigation } from '@navigations';
import { useAppDispatch, useAppSelector } from '@store';
import {
  fetchItems,
  selectItems,
  selectItemsStatus,
} from '@store/slices/items';
import { EStatus } from '@types';

export const ListScreen = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectItemsStatus);
  const items = useAppSelector(selectItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAddItem = () => {
    navigation.navigate(Routes.Add);
  };

  return (
    <Container safe>
      <View style={styles.listWrapper}>
        {status === EStatus.LOADING ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ListItem item={item} />}
            ListEmptyComponent={<Text style={styles.noItemText}>No Items</Text>}
          />
        )}
      </View>
      <View style={styles.footer}>
        <Button onPress={handleAddItem}>Add Item</Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  },
  list: {
    padding: 12,
    gap: 20,
  },
  footer: {
    padding: 12,
  },
  noItemText: {
    textAlign: 'center',
    fontSize: 14,
  },
});
