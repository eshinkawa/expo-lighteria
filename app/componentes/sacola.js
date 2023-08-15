import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function Sacola() {
  const icon = require('../assets/images/icon-bag.png');
  return <Image source={icon} style={styles.iconeSacola} />;
}

const styles = StyleSheet.create({
  iconeSacola: {
    width: 30,
    height: 30,
  },
});
