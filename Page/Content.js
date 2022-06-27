import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({

  });

class Content extends Component
{
    constructor(props)
    {       
       super(props)
       this.state={
        profesion: 'Etudiant',
        adresse: 'France'
       }

    }

    
    render()
    {
        return(
            <>
                <View >
                    <Text>Nom : {this.props.name}</Text>
                    <Text>Profession: {this.state.profesion}</Text>
                    <Text>Adresse: {this.state.adresse}</Text>
                </View>
            </>
        )

    }
}
export default Content