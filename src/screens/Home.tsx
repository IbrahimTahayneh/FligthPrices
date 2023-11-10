import { View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SearchForm from "../components/SearchForm";
import FlightOptionItem from "../components/FlightOptionItem";
import dummyData from "../../data.json";
export const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <SearchForm />
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <FlightOptionItem flight={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
