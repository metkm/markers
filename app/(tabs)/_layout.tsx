import { Tabs } from "expo-router"

export const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="other" />
    </Tabs>
  )
}

export default TabsLayout
