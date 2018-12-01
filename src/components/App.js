import React, { Component } from "react";
import { View } from "react-native";
import Header from "./Header";
import AlbumList from "./AlbumList";

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Albums" />
        <AlbumList />
      </View>
    );
  }
}
