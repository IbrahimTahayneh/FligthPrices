import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface Flight {
  airline: string;
  departAt: string;
  arriveAt: string;
  duration: string;
}

interface Props {
  flight: {
    price: string;
    to: Flight;
    from: Flight;
  };
}

export default function FlightOptionItem({ flight }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.routes}>
        <View style={styles.route}>
          <Text style={styles.timeTxt}>
            {flight.from.departAt}{" "}
            <Ionicons name="airplane" size={16} color={"gray"} />{" "}
            {flight.from.arriveAt}
          </Text>
          <Text style={styles.airline}>{flight.from.airline}</Text>
        </View>

        <View style={styles.route}>
          <Text style={styles.timeTxt}>
            {flight.to.departAt}{" "}
            <Ionicons name="airplane" size={16} color="gray" />{" "}
            {flight.to.arriveAt}
          </Text>
          <Text style={styles.airline}>{flight.to.airline}</Text>
        </View>
      </View>
      <Text style={styles.price}>{flight.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
  },
  routes: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: "gainsboro",
    gap: 10,
    paddingRight: 10,
  },
  route: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeTxt: {
    fontWeight: "bold",
    fontSize: 16,
    color: "dimgray",
    fontFamily: "Courier New",
  },
  airline: { color: "gray" },
  price: {
    width: 75,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
