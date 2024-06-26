import React, { useState } from 'react';
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from "@expo/vector-icons";
import category from '../../../backend/data/category.json';
import subject from '../../../backend/data/subject.json';
import courses from '../../../backend/data/courses.json';
import { useNavigation } from '@react-navigation/native';

const QA = () => {
    const [categoryValue, setCategoryValue] = useState(null); // State to hold the selected category value
    const [subOrCourseValue, setSubOrCourseValue] = useState(null); // State to hold the selected subject or course value
    const [isFocus, setIsFocus] = useState(false); // State to manage focus state of dropdowns
    const navigation = useNavigation(); // Hook for navigation

    // Handle change in category selection
    const handleCategoryChange = (item) => {
        setCategoryValue(item.value); // Set the selected category value
        setSubOrCourseValue(null); // Reset the subject or course value when category changes
    };

    // Handle the submit button press
    const handleSelection = () => {
        // Navigate to different screens based on selected category and subject/course
        if (categoryValue === '1' && subOrCourseValue === '1') {
            navigation.navigate('EnglishQuestion');
        } else if (categoryValue === '2' && subOrCourseValue === '2') {
            navigation.navigate('MathQuestion');
        } else if (categoryValue === '3' && subOrCourseValue === '3') {
            navigation.navigate('ChemistryQuestion');
        } else if (categoryValue === '4' && subOrCourseValue === '4') {
            navigation.navigate('PhysicsQuestion');
        } else {
            Alert.alert('Invalid selection'); // Show alert if selection is invalid
        }      
    };

    // Render the second dropdown based on selected category
    const renderSecondDropdown = () => {
        if (categoryValue === '1') {
            return (
                <View>
                    <Text style={styles.label}>Subject selection</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={subject} // Data for subjects
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select Subject' : '...'}
                        searchPlaceholder="Search..."
                        value={subOrCourseValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setSubOrCourseValue(item.value); // Set the selected subject value
                            setIsFocus(false); // Reset focus state
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                </View>
            );
        } else if (categoryValue === '2') {
            return (
                <View>
                    <Text style={styles.label}>Courses selection</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={courses} // Data for courses
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select Course' : '...'}
                        searchPlaceholder="Search..."
                        value={subOrCourseValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setSubOrCourseValue(item.value); // Set the selected course value
                            setIsFocus(false); // Reset focus state
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                </View>
            );
        }
        return null; // Return null if no category is selected
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
            <SafeAreaView style={styles.container}>
                <Image 
                    source={require('../../../assets/qa_header.png')}
                    style={styles.img}
                />

                {/* Category selection */}
                <Text style={styles.label}>Category selection</Text>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={category} // Data for categories
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select Category' : '...'}
                    searchPlaceholder="Search..."
                    value={categoryValue}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => handleCategoryChange(item)} // Handle category change
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocus ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                        />
                    )}
                />   

                {/* Render second dropdown based on category selection */}
                {renderSecondDropdown()}

                {/* Submit button */}
                <TouchableOpacity onPress={handleSelection} style={styles.touchable}>
                    <Text style={styles.touchable_text}>SUBMIT</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    img: {
        top: 0,
        resizeMode: 'contain',
        alignSelf: 'center',
        margin: 30,
        height: '40%',
    },
    dropdown: {
        margin: 10,
        height: 40,
        width: '90%',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 15,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        zIndex: 999,
        paddingHorizontal: 15,
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    touchable: {
        borderRadius: 100,
        paddingTop: 8,
        paddingBottom: 8,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#10CA0C'
    },
    touchable_text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default QA;
