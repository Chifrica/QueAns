import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 1,
  },
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 1,
  },
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 1,
  },
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 1,
  },
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    answer: 1,
  },
];

const Chemistry = () => {
    const [currentQuestions, setCurrentQuestions] = useState(questions.slice(0, 5));
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(5).fill(null));
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const scrollViewRef = useRef();
    const navigation = useNavigation();
  
    useEffect(() => {
      if (submitted) {
        calculateScore();
      }
    }, [submitted]);
  
    const calculateScore = () => {
      let totalScore = 0;
      for (let i = 0; i < currentQuestions.length; i++) {
        if (selectedAnswers[i] !== null && selectedAnswers[i] === currentQuestions[i].answer) {
          totalScore++;
        }
      }
      setScore(totalScore);
    };
  
    const handleOptionPress = (questionIndex, optionIndex) => {
      setSelectedAnswers(prevAnswers => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[questionIndex] = optionIndex;
        return updatedAnswers;
      });
    };
  
    const handleSubmit = () => {
      if (selectedAnswers.every(answer => answer !== null)) {
        setSubmitted(true);
        navigation.navigate('Correct');
      } else {
        Alert.alert('Please select an answer for all questions before submitting.');
      }
    };
  
    const handleReset = () => {
      setSelectedAnswers(new Array(5).fill(null));
      setScore(0);
      setSubmitted(false);
      setCurrentQuestions(questions.slice(0, 5));
    };
  
    const handleScroll = ({ nativeEvent }) => {
      const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
      const isBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
      setShowSubmitButton(isBottom);
    };
  
    const renderQuestions = () => {
      return currentQuestions.map((questionData, questionIndex) => (
        <View key={questionIndex} style={styles.questionContainer}>
          <Text style={styles.questionText}>{questionData.question}</Text>
          {questionData.options.map((option, optionIndex) => (
            <TouchableOpacity key={optionIndex} onPress={() => handleOptionPress(questionIndex, optionIndex)}>
              <View style={styles.optionContainer}>
                <View style={[styles.radioIcon, { borderColor: selectedAnswers[questionIndex] === optionIndex ? '#10CA0C' : 'black' }]}>
                  {selectedAnswers[questionIndex] === optionIndex && <View style={styles.radioIconSelected} />}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ));
    };
  
    const renderResults = () => (
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>You scored {score} out of {currentQuestions.length} questions.</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <View style={styles.container}>
         <Text style={styles.eng}> English Language</Text>
        <ScrollView
          style={styles.scrollView}
          onScroll={handleScroll}
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
        >
          {submitted ? renderResults() : renderQuestions()}
          <View style={styles.v_btn}>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    },
    scrollView: {
      flex: 1,
      paddingHorizontal: 10,
    },
    eng: {
      marginTop: 0,
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      color: '#FFFFFF',
      backgroundColor: '#10CA0C',
      elevation: 2
    },
    questionContainer: {
      marginBottom: 20,
    },
    questionText: {
      fontSize: 20,
      marginBottom: 10,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    radioIcon: {
      height: 12,
      width: 12,
      borderRadius: 10,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    radioIconSelected: {
      height: 12,
      width: 12,
      borderRadius: 5,
      backgroundColor: '#10CA0C',
    },
    optionText: {
      fontSize: 16,
    },
    resultsContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    resultsText: {
      fontSize: 18,
      marginBottom: 10,
    },
    v_btn: {
      paddingBottom: 20,
    },
    submitButton: {
      alignSelf: 'center',
      backgroundColor: '#10CA0C',
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 5,
      width: "80%"
    },
    submitButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
    },
    resetButton: {
      backgroundColor: '#FFA500',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    resetButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
});

export default Chemistry;