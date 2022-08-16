import React, { useState } from 'react';
import { LayoutAnimation, View } from 'react-native';
import { Input, Text, Button } from '@rneui/themed';
import { createUser, requestOTP } from './requests';
const path = 'http://localhost:5001/otp-auth-7a375/us-central1';
const axios = require('axios').default;

const SignupForm = ({
    params,
}) => {
    const [number, setNumber] = useState();
    const [code, setCode] = useState();
    const [error, setError] = useState();
    const [codeInput, setCodeInput] = useState(false);
    
    const sendNumber = async () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setCodeInput(true);
        setError();
        try {
            await axios.post(`${path}/createUser`, {number: number});
            await axios.post(`${path}/requestOtp`, {number: number});  
        } catch(e) {
            setError(e.message);
        } 
    }
    
    const sendCode = async () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        try {
            let {data} = await axios.post(`${path}/verifyOtp`, {number: number, code: code});
            firebase.auth().signInWithCustomToken(token);
        } catch(e) {
            setError(e.message);
        } 
        setError();
    }

    const action = !error ? !codeInput ? ['Send code', sendNumber] : ['Submit', sendCode] : ['Try again', sendNumber];
    
return (
    <View>
        <Text h3 style={{marginLeft: 10, marginBottom: 20}}>Sign Up</Text>
        <Input  placeholder='+123456789087' 
                label="Enter phone number" 
                secureTextEntry={true} 
                value={number}
                onChangeText={(value) => setNumber(value)}
        />
        {codeInput && <Input  placeholder='1234' 
                    label="Enter your validation code" 
                    secureTextEntry={true} 
                    value={code}
                    onChangeText={(value) => setCode(value)}
        />}
        {error && <Text h7 style={{marginLeft: 10, marginBottom: 5, color: '#ea7070'}}>{error}</Text>}
        <Button title={action[0]} 
                color="secondary" 
                style={{marginHorizontal: 10}} 
                onPress={action[1]}
        />
    </View>
)};

export default SignupForm;
