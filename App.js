import React from 'react';
import { StatusBar } from "react-native";
import Home from './src/screens/home/Home';

export default function App() {

  return (
    <>
      <StatusBar backgroundColor="#29B2DD" barStyle="light-content" />
      <Home />
    </>
  );
}