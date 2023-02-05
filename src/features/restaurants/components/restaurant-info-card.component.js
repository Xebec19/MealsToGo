import React from "react";
import { Card } from "react-native-paper";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { SvgXml } from "react-native-svg";
import stars from "../../../../assets/star";
import open from "../../../../assets/open";

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

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RatingPane = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

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
      <Title style={{ fontFamily: "Inter_900Black" }}>{name}</Title>
      <Section>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={stars} width={20} height={20} />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="label" style={{ color: "red" }}>
              CLOSED TEMPORARILY
            </Text>
          )}
          <View style={{ paddingLeft: 16 }} />
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <View style={{ paddingLeft: 16 }} />
          <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </RestaurantCard>
  );
};
