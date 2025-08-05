import { Stack } from "expo-router"

export const RootLayout = () => {
  return (
    <Stack screenOptions={{ 
      headerShown: false,
    }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}

export default RootLayout
