import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Input } from '@components';
import { useAppNavigation } from '@navigations';
import { EStatus, TItemFormValues } from '@types';
import { useAppDispatch, useAppSelector } from '@store';
import { addItem, selectItemsStatus } from '@store/slices/items';

export const AddScreen = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectItemsStatus);

  const initialValues: TItemFormValues = {
    title: '',
    description: '',
    imageURL: '',
  };

  const onSubmit = async (values: TItemFormValues) => {
    await dispatch(addItem(values));
    navigation.goBack();
  };

  return (
    <Container style={styles.container}>
      <Formik<TItemFormValues>
        initialValues={initialValues}
        validationSchema={Yup.object({
          title: Yup.string().required('Required'),
          description: Yup.string().required('Required'),
          imageURL: Yup.string().required('Required'),
        })}
        onSubmit={values => onSubmit(values)}>
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <>
            <Input
              placeholder="Title"
              value={values.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              error={errors.title}
            />
            <Input
              placeholder="Description"
              multiline
              numberOfLines={4}
              style={styles.descriptionInput}
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              error={errors.description}
            />
            <Input
              placeholder="Image URL"
              value={values.imageURL}
              onChangeText={handleChange('imageURL')}
              onBlur={handleBlur('imageURL')}
              error={errors.imageURL}
            />
            <Button
              onPress={() => handleSubmit()}
              disabled={status === EStatus.LOADING}>
              Add
            </Button>
          </>
        )}
      </Formik>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 16,
  },
  descriptionInput: {
    height: 160,
  },
});
