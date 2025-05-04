import React from 'react';
import { ScrollView, Text } from 'react-native';
import AudioSliders from '../components/settings/AudioSliders';
import AccessibilitySwitches from '../components/settings/AccessibilitySwitches';

export default function OptionsScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Options</Text>
      <AudioSliders />
      <AccessibilitySwitches />
    </ScrollView>
  );
}
