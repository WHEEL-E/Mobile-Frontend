import React from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";
import lang from "../lang";
import { VisibleNavigation } from "../navigation/VisibleNavigation";
import { fetchFonts } from "../utilities/fetchFonts";
import { restoreUser } from "../store/actions/user";
import { linking } from "../utilities/forgetPasswordUtils";

const getCurrentLanguage = async () => {
  return await SecureStore.getItemAsync("CurrentLang");
};

const App = () => {
  const dispatch = useDispatch<any>();
  const [appReady, setAppReady] = React.useState(false);

  const prepareResources = async () => {
    const bootstrapAsync = async () => {
      const Lang = await getCurrentLanguage();
      Lang && lang.changeLanguage(Lang);
      dispatch(restoreUser());
    };

    await fetchFonts();
    await bootstrapAsync();

    setAppReady(true);

    await SplashScreen.hideAsync();
  };

  React.useEffect(() => {
    const componentDidMount = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
      prepareResources();
    };
    componentDidMount();
  }, [SplashScreen, prepareResources]);

  if (!appReady) {
    return null;
  }

  return (
    <NavigationContainer linking={linking}>
      <VisibleNavigation />
    </NavigationContainer>
  );
};

export default App;
