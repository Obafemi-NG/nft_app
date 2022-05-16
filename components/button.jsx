import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.extraLarge,
        position: "absolute",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image source={imgUrl} style={{ height: 24, width: 24 }} />
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  );
};
