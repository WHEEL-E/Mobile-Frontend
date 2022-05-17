import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
  switchMap,
} from "rxjs";
import { useTranslation } from "react-i18next";
import { AddNewConnectionProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import InputField from "../components/inputs/InputField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { getResultsPatients } from "../store/actions/addNewConnection";

const AddNewConnectionScreen = (props: AddNewConnectionProps) => {
  const { t } = useTranslation();
  const sub = new BehaviorSubject("");
  const dispatch = useDispatch<any>();

  const [value, setValue] = React.useState("");
  const [subject, setSubject] = React.useState(sub);

  const isLoading = useSelector(
    (state: RootState) => state.addNewConnectionReducer.loading
  );

  const results = useSelector(
    (state: RootState) => state.addNewConnectionReducer.data
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
        switchMap((term: string) => {
          return dispatch(getResultsPatients(term));
        })
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
          fieldStyle={{}}
          value={value}
        />
        {isLoading && <Text>LOADING</Text>}
        {results.map(({ name, profilePhoto, id }, index) => (
          <View key={index}>
            <Text>{name}</Text>
          </View>
        ))}
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
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
export default AddNewConnectionScreen;
