import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalSearchParams } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";
import { ActivityInstance } from "../../customtypes/types";
import { v4 as uuidv4 } from "uuid";

export default function ActivityHistory() {
  const { activityId } = useGlobalSearchParams();

  const getActivityInstances = async () => {
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_API_URL}activity_instance/${activityId}/1`
    );
    return response.data;
  };
  const {
    isLoading,
    data: activityInstances,
    error,
  } = useQuery({
    queryKey: ["activityInstances", activityId, 1],
    queryFn: getActivityInstances,
  });

  return !isLoading ? (
    <View style={styles.container}>
      <Text style={styles.headerText}>Activity History</Text>
      <DataTable style={styles.table}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title textStyle={styles.tableHeaderText}>
            Date Tracked
          </DataTable.Title>
          <DataTable.Title textStyle={styles.tableHeaderText}>
            Duration
          </DataTable.Title>
          <DataTable.Title textStyle={styles.tableHeaderText}>
            Caregiver(s)
          </DataTable.Title>
        </DataTable.Header>
        {activityInstances.map((item: ActivityInstance) => (
          <DataTable.Row style={styles.tableContent} key={uuidv4()}>
            <DataTable.Cell textStyle={styles.tableContentText}>
              {item.date.toString()}
            </DataTable.Cell>
            <DataTable.Cell textStyle={styles.tableContentText}>
              {item.time_spent}
            </DataTable.Cell>
            <DataTable.Cell textStyle={styles.tableContentText}>
              null
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <TouchableOpacity>
        <Text style={styles.moreText}>View Progress Log</Text>
      </TouchableOpacity>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 56,
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 4,
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
    alignSelf: "flex-end",
    marginVertical: 8,
  },
  tableHeaderText: {
    fontFamily: "Jost-Medium",
    fontSize: 14,
    lineHeight: 21,
    color: "#111827",
  },
  tableContentText: {
    fontFamily: "Arimo-Regular",
    fontSize: 14,
    lineHeight: 21,
  },
  tableHeader: {
    backgroundColor: "#ECEFFF",
    borderBottomColor: "#CBD0D7",
    borderBottomWidth: 1,
  },
  tableContent: {
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
  },
  table: {
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: "#FFFFFF",
  },
});
