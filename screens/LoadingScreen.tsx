import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React from "react";
import { useSelector } from "react-redux";
import { VisibleNavigation } from "../navigation/VisibleNavigation";
import { fetchFonts } from "../utilities/fetchFonts";
import * as SecureStore from "expo-secure-store";
import { restoreToken } from "../store/actions/signIn";
import { useDispatch } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";

const LoadingScreen = () => {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const isLoading = useSelector((store: RootState) => store.signIn.isLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch(restoreToken(userToken));
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
