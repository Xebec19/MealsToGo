import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[1]};
  backgroundcolor: blue;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {},
})`
  padding: 16px;
  margin-bottom: ${(props) => props.theme.space[5]};
`;

const RestaurantScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <FlatList
          data={[
            { name: "Rohan" },
            { name: "Tarun1" },
            { name: "Tarun2" },
            { name: "Tarun3" },
          ]}
          renderItem={() => (
            <Spacer>
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 8 }}
        />
      </SafeArea>
    </>
  );
};

export default RestaurantScreen;
