import { FlatList, View } from "react-native"
import { ProductCard } from "./ProductCard"
import sofaImg from '../assets/images/products/sofa.png'
import camisetaImg from '../assets/images/products/camiseta.png'
import kitImg from '../assets/images/products/kit.png'
import cremesImg from '../assets/images/products/cremes.png'
import cadernoImg from '../assets/images/products/caderno.png'
import carroImg from '../assets/images/products/carro.png'

const items = [
  { id: "1", name: "Sofá", image: sofaImg, price: 1200.90 },
  { id: "2", name: "Camiseta masculina", image: sofaImg, price: 35.89 },
  { id: "3", name: "Kit utensílios", image: kitImg, price: 86.79 },
  { id: "4", name: "Kit de cremes", image: cremesImg, price: 159.90 },
  { id: "5", name: "Caderno de desenho", image: cadernoImg, price: 56.00 },
  { id: "6", name: "Carro de brinquedo", image: carroImg, price: 24.60 },
  { id: "7", name: "Sofá", image: sofaImg, price: 1200.90 },
  { id: "8", name: "Camiseta masculina", image: camisetaImg, price: 35.89 }
];

export function Items() {
  return (
    <View className="flex-1">
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 4 }}
        renderItem={({ item }) => (
          <ProductCard name={item.name} image={item.image} price={item.price} />
        )}
        contentContainerStyle={{ paddingHorizontal: 0, gap: 4 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}