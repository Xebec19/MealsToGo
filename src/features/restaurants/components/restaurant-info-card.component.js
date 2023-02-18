import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { SvgXml } from "react-native-svg";
import stars from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Icon,
  Title,
  Address,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Section,
  SectionEnd,
  RatingPane,
} from "./restaurant-info-card.style";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    ],
    address = "Address of the restaurant",
    isClosedTemporarily = true,
    isOpenNow = true,
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
      <Info>
        <Text variant="caption">{name}</Text>
      </Info>
      <Section>
        <Rating>
          {ratingArray.map((_, index) => (
            <SvgXml key={index} xml={stars} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="label" style={{ color: "red" }}>
              CLOSED TEMPORARILY
            </Text>
          )}
          <Spacer variant="left.medium" />
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Spacer variant="left.large" />
          <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </RestaurantCard>
  );
};
