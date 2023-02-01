import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

styled(Searchbar)`
  padding: 16;
`;

styled(RestaurantInfoCard)`
flex: 1,
    padding: 16,
    backgroundColor: "dodgerblue",
`;

const RestaurantScreen = () => {
  return (
    <>
      <SafeArea>
        <View>
          <Searchbar />
        </View>
        <View>
          <RestaurantInfoCard />
        </View>
      </SafeArea>
    </>
  );
};

export default RestaurantScreen;
