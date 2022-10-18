import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import style from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.resultImc,
    });
  };
  return (
    <View style={style.resultImc}>
      <View>
        {props.resultImc != null ? (
          <TouchableOpacity>
            <Text>Share</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>

      <Text style={style.information}>{props.messageResultImc}</Text>
      <Text style={style.numberImc}>{props.ResultImc}</Text>
    </View>
  );
}
