import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
  View,
} from "react-native";

import SearchForm from "../components/SearchForm";
import FlightOptionItem from "../components/FlightOptionItem";
import { useSearchFlight } from "../queries/useSearchFile";
import { useState } from "react";

interface SearchData {
  from: string;
  to: string;
  departDate: Date; // Change type to Date
  returnDate: Date; // Change type to Date
}

export const Home = () => {
  const [searchParams, setSearchParams] = useState<SearchData>();

  const { data: items, isLoading } = useSearchFlight({
    from: searchParams?.from || "",
    to: searchParams?.to || "",
    departDate: searchParams?.departDate || new Date(),
    returnDate: searchParams?.returnDate || new Date(),
  });

  const onSearch = (data: SearchData) => {
    setSearchParams(data);
  };

  return (
    <SafeAreaView>
      <SearchForm onSearch={onSearch} />

      {isLoading && (
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size={100} color={"gray"} />
          <Text>Searching for the best prices...</Text>
        </View>
      )}

      <FlatList
        data={items}
        renderItem={({ item }) => <FlightOptionItem flight={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
