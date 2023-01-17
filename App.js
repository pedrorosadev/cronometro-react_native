import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: 0,
      textButtonComecar: "COMEÇAR",
      ultimoTempo: null,
    };

    this.timer = null;

    this.cronometrar = this.cronometrar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  cronometrar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ textButtonComecar: "COMEÇAR" });
    } else {
      this.timer = setInterval(() => {
        this.setState({
          numero: this.state.numero + 0.1,
        });
      }, 100);

      this.setState({ textButtonComecar: "PARAR" });
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimoTempo: this.state.numero,
      numero: 0,
      textButtonComecar: 'COMEÇAR',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.cronometro}
          source={require('./assets/cronometro.png')}
        />
        <Text style={styles.timer}> {this.state.numero.toFixed(2)} </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.button} onPress={this.cronometrar}>
            <Text style={styles.textButton}>
              {this.state.textButtonComecar}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.limpar}>
            <Text style={styles.textButton}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View styles={styles.areaUltimoTempo}>
              <Text styles={styles.textUltimoTempo}>
                  {this.state.ultimoTempo > 0 ? `Último Tempo: ` + this.state.ultimoTempo.toFixed(2) + 's': ''}
              </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00aeef",
    alignItems: "center",
    justifyContent: "center",
  },

  timer: {
    marginTop: -160,
    color: "#FFF",
    fontSize: 65,
    fontWeight: "bold",
  },

  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },

  areaUltimoTempo: {
    marginTop: 40,
  },

  textUltimoTempo: {
    fontSize: 25,
    fontFamily: 'italic',
    color: '#FFF',
  }
});

export default App;
