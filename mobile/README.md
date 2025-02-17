# Marketplace

## Layout

- [Figma](https://www.figma.com/design/It4qZaWkBwox95wDjs5vLU/App-de-Marketplace?node-id=3-376&p=f&t=Bepwn9NdIPKBXXb9-0)

## Features

- [x] User register
- [ ] Image upload
- [ ] App authentication


- [ ] Show Produts page, listing each product: image, title and price.
- [ ] Must be possible to filter the products using the search field or the modal informing min/max price / category.
- [ ] Both filters must be applied to the state variable that renders the products list.
- [ ] Must be able to list and update the user data.
- [ ] The password must have a confirmation passwird verification like in the register.
- [ ] Must be able to list a specific product data: image, title, price, description, category the last 7 days views.
- [ ] Must be able to contact a seller by Whatsapp.
- [ ] Must be able to logout from the app.

## Concepts used

- React
- Components Library
- Node API integration
- Authentication
- Forms
- Files upload

## Technologies Used

### [Expo](https://docs.expo.dev/)

Create the Expo project:
```sh
npx create-expo-app@latest --template
```

Start the Project:
```sh
npx expo start
```

### GluestackUI -> [Native Wind](https://www.nativewind.dev/getting-started/expo-router)
```sh
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
npx tailwindcss init
npx expo customize metro.config.js
```

### [React Hook Form](https://www.react-hook-form.com)
```sh
npm install react-hook-form
```

### [Axios](https://axios-http.com)
```sh
npm install axios
```

### [Zod](https://zod.dev)
```sh
npm install zod
npm install @hookform/resolvers
```

## Icons
- [Huge Icons](https://hugeicons.com/icons?style=Stroke&type=Rounded)
```sh
npm install @hugeicons/react-native @hugeicons/core-free-icons react-native-svg
```