import { Heading } from "@/components/Heading";
import { Items } from "@/components/Items";
import { Link } from "expo-router";
import { SafeAreaView, Text, TextInput, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="bg-background w-full h-screen items-center flex-1">
      <Heading />
      <View className="p-6 flex-1">
        <Items />

        {/* <Link href="/login">Login</Link> */}
        {/* <Link href="/register">Register</Link> */}
        {/* <Link href="/_sitemap">Sitemap</Link> */}
      </View>
    </SafeAreaView>
  );
}