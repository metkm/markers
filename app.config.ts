import { ExpoConfig } from  'expo/config'

const config: ExpoConfig = {
  "name": "markers",
  "slug": "markers",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "userInterfaceStyle": "light",
  "newArchEnabled": true,
  "scheme": "markers",
  "splash": {
    "image": "./assets/splash-icon.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "ios": {
    "supportsTablet": true
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    "edgeToEdgeEnabled": true,
    "package": "com.sibyl.markers",
    "config": {
      "googleMaps": {
        "apiKey": process.env.EXPO_PUBLIC_MAP_API
      }
    }
  },
  plugins: [
    "expo-router"
  ],
  "web": {
    "favicon": "./assets/favicon.png"
  }
}

export default config
