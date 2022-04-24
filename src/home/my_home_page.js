import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import MyCardPage from "../home/my_card_page";

export default class MyHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pokemon: [],
      url: "https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=1295",
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({ loading: true });
    fetch(this.state.url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          pokemon: res.results,
          url: res.next,
          loading: false,
        });
      });
  };

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Descargando Pokemon!</Text>
        </View>
      );
    }
    return (
      <View>
        <FlatList
          data={this.state.pokemon}
          renderItem={({ item }) => (
            <Button
              color="red"
              title={item.name}
              onPress={() =>
                this.props.navigation.navigate("Pokemon", { title: item.name })
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
