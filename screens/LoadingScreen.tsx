import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React from "react";
import { useSelector } from "react-redux";
import { VisibleNavigation } from "../navigation/VisibleNavigation";
import { fetchFonts } from "../utilities/fetchFonts";
import { useDispatch } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { restoreUser } from "../store/actions/user";
import * as SecureStore from "expo-secure-store";
import lang from "../lang";

const getCurrentLanguage = async () => {
  return await SecureStore.getItemAsync("CurrentLang");
};

const LoadingScreen = () => {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const isLoading = useSelector(
    (store: RootState) => store.user.isRestoringData
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      const Lang = await getCurrentLanguage();
      Lang && lang.changeLanguage(Lang);
      dispatch(restoreUser());
    };
    bootstrapAsync();
  }, []);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.warn(err)}
      />
    );
  }

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <VisibleNavigation />
    </NavigationContainer>
  );
};

export default LoadingScreen;
