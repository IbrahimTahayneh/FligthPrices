import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather } from "@expo/vector-icons";

interface Props {
  onSearch: (searchParams: {
    from: string;
    to: string;
    departDate: Date;
    returnDate: Date;
  }) => void;
}

export default function SearchForm({ onSearch }: Props) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const onSearchPress = () => {
    onSearch({ from, to, departDate, returnDate });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Search the best prices for your next trip!
      </Text>
      <TextInput
        style={styles.input}
        value={from}
        placeholder="From"
        onChangeText={setFrom}
      />
      <TextInput
        style={styles.input}
        value={to}
        placeholder="To"
        onChangeText={setTo}
      />
      <View style={styles.datePicker}>
        <Feather name="calendar" size={26} color={"#aeb5b7"} />
        <DateTimePicker
          value={departDate}
          onChange={(event, date) => setDepartDate(date || new Date())}
          minimumDate={new Date()}
        />
        <Text style={{ fontSize: 20, color: "#EAECEC", marginLeft: 10 }}>
          |
        </Text>
        <DateTimePicker
          value={returnDate}
          onChange={(event, date) => setReturnDate(date || new Date())}
          minimumDate={departDate}
        />
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={onSearchPress}>
        <Text style={styles.textBtn}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#0A0A0A",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title: {
    color: "#0A0A0A",
    fontSize: 16,
    marginVertical: 10,
    alignSelf: "center",
    fontWeight: "600",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "#EAECEC",
    color: "#424242",
    fontSize: 16,
    marginVertical: 5,
  },
  focusedInput: {
    borderColor: "#599ad9",
  },
  searchBtn: {
    height: 50,
    backgroundColor: "#0A0A0A",
    alignItems: "center",
    alignContent: "center",
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  textBtn: {
    fontSize: 16,
    color: "#F5F5F5",
  },
  datePicker: {
    borderWidth: 1,
    borderColor: "#EAECEC",
    borderRadius: 8,
    marginVertical: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
