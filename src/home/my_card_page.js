import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function MyCardPage({ route, navigation }) {
  const { title } = route.params;

  const [pokemons, setPokemons] = useState([]);
  const getImagePokemon = async () => {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon-form/" + title + "/"
    );
    const pokemons = await data.json();
    setPokemons(pokemons["sprites"]);
  };
  

  useEffect(() => {
    getImagePokemon();
  }, []);

  console.log(pokemons);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 25 }}>{title}</Text>

      <Image
        style={{ width: 300, height: 300, marginBottom: 15 }}
        source={{
          uri: pokemons.front_default,
        }}
      />
    </View>
  );
}

export default MyCardPage;
