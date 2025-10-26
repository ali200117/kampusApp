import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { events } from '../midlData/midlertidigData';
import { SafeAreaView } from '../components/SafeScreen';

export default function FeedScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.date} – {item.category}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { backgroundColor: '#eee', 
    padding: 12, 
    marginBottom: 12, 
    borderRadius: 8 },
  title: { fontSize: 16,
     fontWeight: 'bold' },
     
  desc: { marginTop: 4 }
});
