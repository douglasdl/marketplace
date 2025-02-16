import { StatusBar } from 'expo-status-bar'
import { Platform, Text, View } from 'react-native'

export default function Filter() {
  return (
    <View>
      <Text>Filter</Text>
      <View/>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}