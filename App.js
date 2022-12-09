import React from 'react';
import { Image, StyleSheet, Text, ScrollView } from 'react-native';

import Congo from './assets/floresta-congo.png';
import Taiga from './assets/floresta-taiga.png';
import Amazonica from './assets/floresta-amazonica.png';
import Oceanos from './assets/oceanos.png';

export default function App() {
  return (
    <ScrollView style={ estilos.container }>
      <Text style={ estilos.titulo }>Florestas pelo mundo</Text>
      
      <Imag source={ Congo } style={ estilos.img } />
      <Text style={ estilos.margem }>Floresta do congo (África)</Text>

      <Image source={ Taiga } style={ estilos.img } />
      <Text style={ estilos.margem }>Floresta (Hemisfério Norte)</Text>

      <Image source={ Amazonica } style={ estilos.img } />
      <Text>Floresta Amazônica (América do Sul)</Text>

      <Text style={ estilos.titulo }>Oceanos pelo mundo</Text>

      <Image source={ Oceanos } style={ estilos.img } />
      <Text style={ estilos.margem }>Descrição dos Oceanos</Text>

      <Text style={ estilos.titulo }>Emmanuel Cosme Martins Bento</Text>



    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
    marginBottom: 30,
    fontStyle:'bold',
  },

  img: {
    width: 280,
    height: 95,
  },
 
  margem: {
    marginBottom: 20,
  },
});
