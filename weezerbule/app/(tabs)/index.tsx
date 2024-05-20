import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Button, ScrollView, Image } from 'react-native';

const App = () => {

  const [number, setNumber] = useState(1);

  const changenumber = () => {
    if (number < 5) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };

  return (
//
    <View>
  
  <Pressable onPress={() => changenumber()}>
        
        <Text
      
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen
          }>
        This is my clicky thingy. this is click {number}
        </Text>
      </Pressable>
      <Button
        title="You could just use THIS button but why do that"
        onPress={() => changenumber()}
      />

 <ScrollView>
 {/* <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change cartoon network so I can have the pokemon anime back on it.
      </Text>
    </View> */}
     <View style={styles.container}>
      <Text style={styles.paragraph}>
      
      sorry I was trying to get the images in but they just won't work for me. Thank you for the great class Mr.Krebs and thanks for making me learn to love coding :) -Marcus / Marke
      </Text>
    </View>
     <View style={styles.container2}>
      <Text style={styles.paragraph}>
      
      Wii U is a home videogame console from Nintendo thats brimming with games and experiences you can enjoy alone or with friends and family. It comes with a unique controller that redefines the dynamic of playing games together: the Wii U GamePad.
      </Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      
      Weezer is an American rock band formed in Los Angeles, California, in 1992. Since 2001, the band has consisted of Rivers Cuomo, Patrick Wilson, Brian Bell, and Scott Shriner. 
      </Text>
    </View>
    <View style={styles.container3}>
      <Text style={styles.paragraphgold}>
      
      The Arsenal Football Club is an English professional football club based in Holloway, North London. Arsenal compete in the Premier League, the top flight of English football
      </Text>
    </View>
    <View style={styles.container4}>
      <Text style={styles.paragraph}>
      
      Kirby is an action-platform video game series developed by HAL Laboratory and published by Nintendo. The series centers around the adventures of a bubblegum pink round hero named Kirby as he fights to protect and save his home on the distant Planet Popstar from a variety of threats
      </Text>
    </View>
         <View style={styles.container}>
    </View>
    </ScrollView>
    </View>
  );
};

// Output (like HTML) ends here

//need to export the Component.
export default App;

//Styling -- Like CSS starts here.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00A6FB',
    padding: 75,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 35,
  },
  container3: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#D33349',
    padding: 70,
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFB8D1',
    padding: 75,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphred: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9C0D38',
  },
  paragraphgreen: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#747DC0',
  },

  paragraph2: {
    margin: 14,
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  paragraphgold: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#DDCB95',
  },
});