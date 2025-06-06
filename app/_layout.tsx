import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, Head } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-reanimated';
import { Image, Platform, Text } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { AppProvider } from '@/contexts/AppContext';
import { CoffeeModal } from '@/components/CoffeeModal';
import { coffeeAlert, useCoffeeAlertProvider } from '@/utils/coffeeAlert';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { visible, message, type, buttons, hideModal } = useCoffeeAlertProvider();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (Platform.OS === 'web') {
        const isAndroid = /Android/i.test(navigator.userAgent);
        if (isAndroid) {
          coffeeAlert('Aviso: Esta pagina web é destinado a dispositivos IOS. Por favor, use o aplicativo para acessar o sistema.', 'warning');
          router.replace('/telas_extras/sobre');
          return;
        } }
        try {
          const userToken = await AsyncStorage.getItem('userToken');
          if (!userToken) {
          router.replace('/acesso');
        } else {
          router.replace('/(tabs)');
          //router.replace('/telas_extras/sobre');
          }
      } catch (error) {
        console.error('Erro ao verificar o status de login:', error);
        router.replace('/acesso');
      }
    };

    if (loaded) {
      SplashScreen.hideAsync();
      checkLoginStatus();
    }
  }, [loaded]);

  useEffect(() => {
    if (Platform.OS === 'web') {
      document.title = 'Cafézão da Computação';
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="acesso/index" options={{ headerShown: false }} />
          <Stack.Screen name="acesso/register" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
          <Stack.Screen name="telas_extras/pagamento" options={{ headerShown: false }} />
          <Stack.Screen name="telas_extras/notifications" options={{ headerShown: false }} />
          <Stack.Screen name="telas_extras/estatisticas" options={{ headerShown: false }} />
          <Stack.Screen name="telas_extras/super_admin" options={{ headerShown: false }} />
          <Stack.Screen name="telas_extras/tema" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)/admin" options={{ headerShown: false }} />
          <Stack.Screen name="telas_extras/avisos" options={{ headerShown: false }} />
          <Stack.Screen name="telas_extras/financeiro" options={{ headerShown: false }} />
          <Stack.Screen name="telas_extras/sobre" options={{ headerShown: false }} />
          <Stack.Screen name="telas_extras/payment_selection" options={{ headerShown: false }} />
          <Stack.Screen name="jogos" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <CoffeeModal
          visible={visible}
          message={message}
          type={type}
          buttons={buttons}
          onClose={hideModal}
        />
      </ThemeProvider>
    </AppProvider>
  );
}
