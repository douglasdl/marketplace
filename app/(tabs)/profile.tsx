import { Avatar } from '@/components/Avatar'
import { Button, Text, TextInput, View } from 'react-native'

export default function Profile() {
  return (
    <View className='bg-background items-center p-10'>
      <Avatar photo="https://github.com/douglasdl.png" size='lg' />

      <Text>Nome</Text>
      <TextInput />
      
      <Text>Telefone</Text>
      <TextInput />

      <Text>Acesso</Text>
      
      <Text>E-mail</Text>
      <TextInput />
      
      <Text>Senha atual</Text>
      <TextInput />
      
      <Text>Nova senha</Text>

      <Button title='Atualizar cadastro' />
      <TextInput />
    </View>
  );
}