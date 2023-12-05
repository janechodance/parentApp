import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";

export default function ActivityHistory() {
  const items = [
    {
      key: 1,
      dateTracked: "6/15/23",
      duration: "10 minutes",
      caregiver: "Max",
    },
    {
      key: 2,
      dateTracked: "4/6/23",
      duration: "20 minutes",
      caregiver: "Max and Tina",
    },
    {
      key: 3,
      dateTracked: "1/12/23",
      duration: "15 minutes",
      caregiver: "Max and Lee",
    },
  ];
  return (
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
        {items.map((item) => (
          <DataTable.Row style={styles.tableContent} key={item.key}>
            <DataTable.Cell textStyle={styles.tableContentText}>
              {item.dateTracked}
            </DataTable.Cell>
            <DataTable.Cell textStyle={styles.tableContentText}>
              {item.duration}
            </DataTable.Cell>
            <DataTable.Cell textStyle={styles.tableContentText}>
              {item.caregiver}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <TouchableOpacity>
        <Text style={styles.moreText}>View Progress Log</Text>
      </TouchableOpacity>
    </View>
  );
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
