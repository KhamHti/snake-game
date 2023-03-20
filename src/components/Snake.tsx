import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/colors";
import { Coordinate } from "../types/types";

interface SnakeProps {
  snake: Coordinate[];
}

export default function Snake({ snake }: SnakeProps): JSX.Element {
  return (
    <Fragment>
      {snake.map((segment: any, index: number) => {
        const segmentStyle = {
          left: segment.x * 10,
          top: segment.y * 10,
        };
        return (
          <View key={index} style={[style.snakeContainer, segmentStyle]} />
        );
      })}
    </Fragment>
  );
}

const style = StyleSheet.create({
  snakeContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    position: "absolute",
  },
});
