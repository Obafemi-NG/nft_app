import { View, Image, Text } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS } from "../constants";

const NFTcard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        marginBottom: SIZES.extraLarge,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        ...SHADOWS.dark,
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
      </View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default NFTcard;
