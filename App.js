import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore === 10) {
        Alert.alert('Selamat!!!!!', 'Team A Menang!!!!!');
      }
    } else {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore === 10) {
        Alert.alert('Selamat!!!!', 'Team B Menang!!!!');
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A') {
      setScoreTeamA(scoreTeamA > 0 ? scoreTeamA - 1 : 0);
    } else {
      setScoreTeamB(scoreTeamB > 0 ? scoreTeamB - 1 : 0);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Score Futsal</Text>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team A</Text>
        <Text style={styles.score}>{scoreTeamA}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => increaseScore('A')} />
          <Button title="-" onPress={() => decreaseScore('A')} />
        </View>
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team B</Text>
        <Text style={styles.score}>{scoreTeamB}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => increaseScore('B')} />
          <Button title="-" onPress={() => decreaseScore('B')} />
        </View>
      </View>

      <Button title="Reset Scores" onPress={resetScores} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 36,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default App;
