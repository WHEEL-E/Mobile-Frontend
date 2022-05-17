import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
  merge,
  of,
  switchMap,
} from "rxjs";
import { useTranslation } from "react-i18next";
import { AddNewConnectionProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import InputField from "../components/inputs/InputField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import {
  getResultsPatients,
  setIsLoading,
} from "../store/actions/addNewConnection";
import { Ionicons } from "@expo/vector-icons";
import { SearchList } from "../components/addConnectionComponents/SearchList";
import { Loading } from "../components/addConnectionComponents/Loading";
import { NonMatching } from "../components/addConnectionComponents/NonMatching";

const AddNewConnectionScreen = (props: AddNewConnectionProps) => {
  const { t } = useTranslation();
  const sub = new BehaviorSubject("");
  const dispatch = useDispatch<any>();

  const [value, setValue] = React.useState("");
  const [subject] = React.useState(sub);

  const isLoading = useSelector(
    (state: RootState) => state.addNewConnectionReducer.loading
  );

  const nonMatching = useSelector(
    (state: RootState) => state.addNewConnectionReducer.noMatching
  );

  const textChangeHandler = (text: string) => {
    setValue(text);
    if (subject) {
      return subject.next(text);
    }
  };

  React.useEffect(() => {
    const observable = subject
      .pipe(
        map((s) => s.trim()),
        distinctUntilChanged(),
        filter((s) => s.length >= 2),
        debounceTime(500),
        switchMap((term) =>
          merge(
            of(dispatch(setIsLoading(true))),
            dispatch(getResultsPatients(term))
          )
        )
      )
      .subscribe();
    return () => {
      observable.unsubscribe();
      subject.unsubscribe();
    };
  }, [subject]);

  return (
    <View style={styles.container}>
      <ImageBackground
        testID="backgroundImage"
        source={require("../assets/images/cloud-background.png")}
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
        <InputField
          autoComplete="off"
          onChangeText={textChangeHandler}
          placeHolder="who are you looking for"
          fieldStyle={{ width: "80%" }}
          value={value}
        />
        {isLoading && <Loading />}
        {nonMatching && <NonMatching />}
        <SearchList />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop: "35%",
    paddingBottom: "20%",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
export default AddNewConnectionScreen;
