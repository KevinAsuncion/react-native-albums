import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from 'axios';

class AlbumList extends Component {
    state = {
        albums: []
    }
  async componentWillMount() {
      const res = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
      this.setState({
          albums: res.data
      });
  }  
  render() {
    return (
      <View>
        {this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>)}
      </View>
    );
  }
}

export default AlbumList;
