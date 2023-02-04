import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { SvgXml } from "react-native-svg";
import stars from "../../../../assets/star";

const Title = styled.Text`
  padding: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    photos = [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    ],
    address = "Address of the restaurant",
  } = restaurant;

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const ratingArray = Array.from(new Array(Math.floor(5)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title style={{ fontFamily: "Inter_900Black" }}>{name}</Title>
      <Rating>
        {ratingArray.map(() => (
          <SvgXml xml={stars} width={20} height={20} />
        ))}
      </Rating>
      <Address>{address}</Address>
    </RestaurantCard>
  );
};
