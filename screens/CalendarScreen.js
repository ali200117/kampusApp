import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { events } from '../midlData/midlertidigData';
import { SafeAreaView } from '../components/SafeScreen';

export default function CalendarScreen() {
  const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date));

return (
    <SafeAreaView>
      <FlatList
        data={sortedEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.date}>{item.date}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { marginBottom: 12 },
  date: { fontWeight: 'bold' }
});
