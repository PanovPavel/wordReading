import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";
import WordShowPage from "../wordPage/word-show-page";
import {Picker} from "@react-native-picker/picker";

export default function StartPage() {
    const [speedReading, setSpeedReading] = useState(300);
    const [text, setText] = useState(`Вы ничего не ввели`);
    const [dataWord, setDataWord] = useState([]);
    const [start, setStart] = useState(false);

    function onChangeTextArea(){
        const textArea = document.querySelector(`textarea`);
        setText(textArea.value.toString());
        setStart(false);
    }
    function onClick() {
        setDataWord(text.split(` `));
        setStart(!start);
    }
    function onSelect(e) {
        const select = document.querySelector(`select`);
        console.log(select.value);
        setSpeedReading(+select.value);
        setStart(false);
    }
    function changeStateStart(){
        setStart(false)
    }

    if(start === false){
        return (
        <View style={styles.container}>
            <Text>Приложение чтения текста по словам</Text>
                <Text>Скорость отображения слов в минуту</Text>
            <Picker>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
                {/*<select*/}
                {/*    width={250}*/}
                {/*    defaultValue="Select a Province in Canada ..."*/}
                {/*    >*/}
                {/*    <option>Alberta</option>*/}
                {/*    <option>British Columbia</option>*/}
                {/*    <option>Manitoba</option>*/}
                {/*    <option>New Brunswick</option>*/}
                {/*    <option>Newfoundland and Labrador</option>*/}
                {/*    <option>Northwest Territories</option>*/}
                {/*    <option>Nova Scotia</option>*/}
                {/*    <option>Nunavut</option>*/}
                {/*    <option>Ontario</option>*/}
                {/*    <option>Prince Edward Island</option>*/}
                {/*    <option>Quebec</option>*/}
                {/*    <option>Saskatchewan</option>*/}
                {/*    <option>Yukon</option>*/}
                {/*</select>*/}
                <Text style={styles.text}>Вставьте текст из книги, который необходимо прочитать!</Text>
                {/*<StatusBar style="auto" />*/}
                <TextInput
                    value={text}
                    onChange={()=>onChangeTextArea()}
                    style={styles.textarea}
                    placeholder="введите текст"
                />
                <Text style={{width:`100%`}}>
                    <Button  onPress={()=>onClick()} title={`start`} color="#841584" />
                </Text>
            </View>
        )
    }
    if(start === true) {
        return(
            <WordShowPage dataWord={dataWord} speedWord={speedReading} changeStateStart={()=>changeStateStart()}/>
            )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
        textAlign: "center",
    },
    text:{
        marginTop: 20
    },
    textarea: {
        width: `100%`,
        height: 150,
        box: `border-box`,
        borderWidth: `2px`,
        borderRadius: 4,
        backgroundColor: `#fcfafa`,
        resize: `none`,
        justifyContent: "top",
        fontSize: `16px`,
        marginTop: 3,
        marginBottom: 3
    },
    select:{
        width: `100%`,
        textAlign: "center",
        height: `40px`,
        borderRadius: 4,

    }
});
