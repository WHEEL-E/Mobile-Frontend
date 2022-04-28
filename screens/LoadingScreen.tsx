import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React from "react";
import { useSelector } from "react-redux";
import { VisibleNavigation } from "../navigation/VisibleNavigation";
import { fetchFonts } from "../utilities/fetchFonts";
import { useDispatch } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { restoreUser } from "../store/actions/user";

const LoadingScreen = () => {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const isLoading = useSelector(
    (store: RootState) => store.user.isRestoringData
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
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
