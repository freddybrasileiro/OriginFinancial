import React from 'react';
import { Text } from '../src/components/Text';

export default {
  title: 'Text',
  component: Text,
};

export const Label = () => <Text variant="label">Text</Text>;

Label.story = {
  name: 'label',
};

export const Body1 = () => <Text variant="body1">Text</Text>;

Body1.story = {
  name: 'body1',
};

export const Body2 = () => <Text variant="body2">Text</Text>;

Body2.story = {
  name: 'body2',
};
