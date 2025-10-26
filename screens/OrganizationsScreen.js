import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function OrganizationsScreen(){
    return(
            <View style={styles.container}>
              <Text>OrganizationsScreen</Text>
            </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
});