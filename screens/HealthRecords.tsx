import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, StyleSheet, View } from "react-native";
import { SquareButton } from "../components/buttons/SquareButton";
import HealthRecordCard from "../components/healthRecordsComponents/HealthRecordCard";
import HealthRecordModal from "../components/healthRecordsComponents/HealthRecordModal";
import colors from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";
import { SMALL_MARGIN_VERTICAL } from "../utilities/constants/spacing";
import { HealthRecordsProps } from "../utilities/types/navigationTypes/mainNavigationTypes";

interface HealthRecord {
  id: string;
  patientId: string;
  fileUri: string;
  fileName: string;
  date: Date;
}

export const HealthRecords = (props: HealthRecordsProps) => {
  const healthRecords: HealthRecord[] = [
    {
      id: "a",
      patientId: "123",
      fileUri:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540raniadaoud%252Fwheele-mobile-frontend/DocumentPicker/3d478b2f-ea7f-4260-9c86-93c0bc533aac.pdf",
      fileName: "asthma",
      date: new Date(1999, 0, 10),
    },
    {
      id: "b",
      patientId: "123",
      fileUri:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540raniadaoud%252Fwheele-mobile-frontend/DocumentPicker/3d478b2f-ea7f-4260-9c86-93c0bc533aac.pdf",
      fileName: "asthma",
      date: new Date(),
    },
    {
      id: "c",
      patientId: "123",
      fileUri:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540raniadaoud%252Fwheele-mobile-frontend/DocumentPicker/3d478b2f-ea7f-4260-9c86-93c0bc533aac.pdf",
      fileName: "asthma",
      date: new Date(1999, 0, 10),
    },
    {
      id: "d",
      patientId: "123",
      fileUri:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540raniadaoud%252Fwheele-mobile-frontend/DocumentPicker/3d478b2f-ea7f-4260-9c86-93c0bc533aac.pdf",
      fileName: "asthma",
      date: new Date(),
    },
  ];

  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = React.useState(false);

  let number = 0;
  const colorHandler = (index: number) => {
    if (index % 2 === 0) {
      number = 1 - number;
    }
    return index % 2 == number ? colors.darkGreen : colors.lightPurple;
  };

  return (
    <View style={style.container}>
      <HealthRecordModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <FlatList
        data={healthRecords}
        keyExtractor={(info) => info.id}
        numColumns={2}
        renderItem={(info) => {
          return (
            <HealthRecordCard
              id={info.item.id!}
              fileUri={info.item.fileUri}
              title={info.item.fileName}
              backgroundColor={colorHandler(info.index)}
              date={info.item.date}
              key={info.item.id}
            />
          );
        }}
      />
      <SquareButton
        title={t("healthRecords.addRecord")}
        buttonStyle={style.buttonStyle}
        titleStyle={style.titleStyle}
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "35%",
    paddingBottom: "20%",
  },
  buttonStyle: {
    backgroundColor: colors.lightGreen,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    width: "80%",
    marginVertical: SMALL_MARGIN_VERTICAL,
    height: 70,
  },
  titleStyle: {
    fontFamily: fonts.CairoBold,
    color: "white",
    fontSize: 20,
  },
});
