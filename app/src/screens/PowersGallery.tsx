import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { powers as powersData } from '../logic/powersData';

export default function PowersGallery() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Unlocked Powers</Text>
      {powersData.map((power: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <View key={power.id} style={{ marginBottom: 15, backgroundColor: '#eee', padding: 10, borderRadius: 8 }}>
          <Text style={{ fontSize: 18 }}>{power.name}</Text>
          <Text style={{ fontSize: 14, color: '#666' }}>{power.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
