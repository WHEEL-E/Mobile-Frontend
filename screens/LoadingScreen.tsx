import { NavigationContainer } from "@react-navigation/native";
import { VisibleNavigation } from "../navigation/VisibleNavigation";
import { fetchFonts } from "../utilities/fetchFonts";
import { useDispatch } from "react-redux";
import { restoreUser } from "../store/actions/user";
import React from "react";
import * as SplashScreen from "expo-splash-screen";

const App = () => {
  const dispatch = useDispatch<any>();
  const [appReady, setAppReady] = React.useState(false);

  const prepareResources = async () => {
    const bootstrapAsync = async () => {
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
    <NavigationContainer>
      <VisibleNavigation />
    </NavigationContainer>
  );
};

export default App;
