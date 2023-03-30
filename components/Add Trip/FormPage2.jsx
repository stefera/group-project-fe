import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {View, Text, StyleSheet, CheckBox} from "react-native"
import reactDom from "react-dom";

const FormPage2 = (()=>{

    const [checkedList, setCheckedList] = useState([])

     const preferences = [
    { id: "1", value: "Museums" },
    { id: "2", value: "Art" },
    { id: "3", value: "Culture" },
    { id: "4", value: "Nightlife" },
    { id: "5", value: "Food" },
    { id: "6", value: "Nature" },
    { id: "7", value: "Music" },
    { id: "8", value: "Sport" },
    { id: "9", value: "Spas" },
  ];

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
 
    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
    console.log(checkedList)
  };
    return (
        <View>
            {
            preferences.map((item, index) => {
                return (
                    <div key={item.id}>
                    <input
                    type ="checkbox"
                    value ={item.value}
                    onChange={handleSelect}/>
                    <label>{item.value}</label>
                    </div>
                    )
            })
            }
        </View>
    //     <View>

    //     <View style={styles.container}>
    //     <View style={styles.checkboxContainer}>
    //     <CheckBox
    //       value={checkOne}
    //       onValueChange={setCheckOne}
    //       style={styles.checkbox}
    //     />
    //     <Text style={styles.label}>preferences[0]</Text>
    //   </View>
    //   </View>
                    // </View>
            /* <div>
                <ul>
                { 
                preferences.map((preference, index) => {
                    return (
                        <li key={index}>
                        <h1>{preference}</h1>
                        </li>
                        )
                })
            }
                </ul>
                
                </div> */


    )
})



export default FormPage2;