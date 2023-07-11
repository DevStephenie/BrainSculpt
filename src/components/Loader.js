import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const LoaderComponent = ({ playing, onPlay, onStop }) => {
  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let rotateAnimation;

    if (playing) {
      rotateAnimation = Animated.loop(
        Animated.timing(rotationValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut,
          useNativeDriver: true,
        })
      );    

      rotateAnimation.start();
    } else {
      rotationValue.stopAnimation();
    }

    return () => {
      if (rotateAnimation) {
        rotateAnimation.stop();
      }
    };
  }, [playing, rotationValue]);

  const spin = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Svg width={128} height={125} viewBox="0 0 128 125" fill="none">
          <Path
            d="M90.6665 36.4579L103.275 24.1446M24.7264 100.853L37.3342 88.5402M37.3352 36.4579L24.7264 24.1446M103.275 100.853L90.6675 88.5402M99.5016 62.5001H117.333M10.6665 62.5001H28.4966M63.9998 27.8304V10.4167M63.9998 114.583V97.1712"
            stroke="#2F384C"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

export default LoaderComponent;
