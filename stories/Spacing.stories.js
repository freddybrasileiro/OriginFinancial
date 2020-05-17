import React from 'react';
import { Spacing } from '../src/components/Spacing';

export default {
  title: 'Spacing',
  component: Spacing,
};

const BlackBox = () => <div style={{height:"14px", backgroundColor: "black"}}/>;
const Wraper = ({children}) => <><BlackBox/>{children}<BlackBox/></>;

export const _4px = () => <Wraper><Spacing vertical={1} /></Wraper>;
_4px.story = { name: '4px' };

export const _8px = () => <Wraper><Spacing vertical={2} /></Wraper>;
_8px.story = { name: '8px' };

export const _12px = () => <Wraper><Spacing vertical={3} /></Wraper>;
_12px.story = { name: '12px' };

export const _16px = () => <Wraper><Spacing vertical={4} /></Wraper>;
_16px.story = { name: '16px' };
