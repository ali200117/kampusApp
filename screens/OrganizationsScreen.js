import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { organizations } from '../midlData/midlertidigData';
import { SafeAreaView } from '../components/SafeScreen';

export default function OrganizationsScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={organizations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.org}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  org: { marginBottom: 16 },
  name: { fontWeight: 'bold' }
});
