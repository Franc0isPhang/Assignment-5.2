import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [likes, setLikes] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Likes:', likes);
    setShowSummary(true);
  };

  const closeModal = () => {
    setShowSummary(false);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Name:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text>Age:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <Text>Likes:</Text>
      <TextInput
        style={{ height: 80, borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
        value={likes}
        onChangeText={(text) => setLikes(text)}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />

      {/* Summary Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSummary}
        onRequestClose={closeModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ padding: 16, backgroundColor: 'white', borderRadius: 8 }}>
            <Text>Summary:</Text>
            <Text>My name is {name}</Text>
            <Text>I am {age} years old</Text>
            <Text>I like {likes}</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;