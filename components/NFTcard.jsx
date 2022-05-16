import { View, Image, Text } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton } from "./button";

const NFTcard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        marginBottom: SIZES.extraLarge,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        ...SHADOWS.medium,
      }}
    >
      <View style={{ height: 250, width: "100%" }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>
      {/* <Text>{data.name}</Text> */}
    </View>
  );
};

export default NFTcard;
