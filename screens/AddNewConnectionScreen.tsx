import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
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
import { AddNewConnectionProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import InputField from "../components/inputs/InputField";
import { RootState } from "../store/reducers/rootReducer";
import {
  emptyList,
  getResultsPatients,
  getResultsSupervisors,
  setIsLoading,
} from "../store/actions/addNewConnection";
import { SearchList } from "../components/addConnectionComponents/SearchList";
import { Loading } from "../components/addConnectionComponents/Loading";
import { NonMatching } from "../components/addConnectionComponents/NonMatching";
import { UserTypes } from "../utilities/types/userTypes";

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

  const userType = useSelector(
    (state: RootState) => state.user.userData?.userType
  );

  const textChangeHandler = (text: string) => {
    setValue(text);
    if (subject) {
      return subject.next(text);
    }
  };

  const getResults = (text: string) => {
    if (userType === UserTypes.PATIENT) {
      dispatch(getResultsPatients(text));
    } else {
      dispatch(getResultsSupervisors(text));
    }
  };

  React.useEffect(() => {
    dispatch(emptyList());
    const observable = subject
      .pipe(
        map((s) => s.trim()),
        distinctUntilChanged(),
        filter((s) => s.length >= 2),
        debounceTime(500),
        switchMap((term) =>
          merge(of(dispatch(setIsLoading(true)), getResults(term)))
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
