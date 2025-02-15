import { Avatar } from '@/components/Avatar'
import { UpdateRegisterForm } from '@/components/UpdateRegisterForm'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from 'react-native'

export default function Profile() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-background px-10"
    >

      <ScrollView
        className="flex-1 w-full pt-16 pb-6"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="gap-10 flex-1 justify-between w-full">

          <View className=' items-center w-full'>
            <Avatar photo="https://github.com/douglasdl.png" size='lg' />

            <UpdateRegisterForm 
              name='Douglas Dias Leal'
              phone='(90) 99999-9999'
              email='douglas_san@hotmail.com'
            />
            <TextInput />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    
  );
}