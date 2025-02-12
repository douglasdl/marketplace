import { FilterPopup } from "@/components/FilterPopup";
import { Heading } from "@/components/Heading";
import { Items } from "@/components/Items";
import { Link } from "expo-router";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";

export default function Home() {
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  return (
    <SafeAreaView className="bg-background w-full h-screen items-center flex-1">
      <Heading onOpenFilter={() => setShowFilterPopup(true)} />
      <View className="p-6 flex-1">
        <Items />

        {/* <Link href="/login">Login</Link> */}
        {/* <Link href="/register">Register</Link> */}
        {/* <Link href="/_sitemap">Sitemap</Link> */}
      </View>
      {
        showFilterPopup && 
        <FilterPopup 
          onClose={() => setShowFilterPopup(false)} 
          onFilter={() => setShowFilterPopup(false)} 
        />
      }
    </SafeAreaView>
  );
}