import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";
import {styles} from './style-word-show-page'

export default function WordShowPage(props){
    const [word, setWord] = useState('');
    const [numberWord, setNumberWord] = useState(0)
    useEffect(() => {
        const data = props.dataWord;
        const interval = setInterval(()=>{
            if(data[numberWord] === undefined){
              clearInterval(interval);
              return;
            }
            console.log(data[numberWord]);
            setWord(data[numberWord])
            setNumberWord(numberWord + 1);
        }, 1000/(props.speedWord/60))
        return ()=>{
            clearInterval(interval);
        }
    });

    function onClick() {
        console.log("click");
        props.changeStateStart();
    }
    return(
        <View style={{width: `100%`, height: `100vh`, backgroundColor: `black`}}>
            <View style={styles.containers}>
                <Text>{word}</Text>
            </View>
            <View style={styles.button}>
                <Button onPress={()=>{onClick()}} title={`stop`} color="black" />
            </View>
        </View>
    )
}
