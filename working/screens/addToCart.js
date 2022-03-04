import { isEmpty } from '@firebase/util';
import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { useSelector } from 'react-redux';
const addToCart = () => {


  let data;
  let total = 0;
  data = useSelector((state) => state.cartItem)
  data.forEach(val => {
    total = total + val.Price;
    console.log('total', total);
  });
  console.log(data);

  return (
    <View style={styles.ProductRootContainer}>
      {data == '' ? <View style={styles.Empty}>
        <Text style={styles.EmptyText}>Cart Is Empty</Text></View> :

        <View style={styles.InnerContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {
              data.map((pro, index) => {
                return (
                  <View key={index} style={{ width: '100%', height: '50%' }}>
                    <View>
                      <Image style={styles.ProductImage} source={require('../assets/images/image1.jpeg')} />
                    </View>
                    <View>
                      <Text style={{ color: 'red' }}> {pro.Prodect}</Text>
                      <Text style={{ color: 'red' }}>{pro.Price}</Text>
                      <Text style={{ color: 'red' }}>{pro.ProductCode}</Text>
                      <TouchableOpacity onPress={() => index}>
                        <Text style={{ color: 'red' }}>{pro.four}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>)
              })}
          </ScrollView>
        </View>}

      {/* <View style={{ width: '100%', height: '20%' }}>

        {data == ''
          ? <Text></Text>
          : <Text>
            {total}
          </Text>}

      </View> */}

    </View>
  )
}



export default addToCart;

const styles = StyleSheet.create({

  ProductRootContainer: {
    display: 'flex',
    justifyContent : 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#B8FFF9',
    padding: '15px'
  },

  InnerContainer : {
    display : 'flex',
    flexBasis : '100%'
  },

  Empty: {
    display: 'flex',
    hight: '100%',
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ProductImage: {
    width: '100px',
    hight: '100px'
  },
  EmptyText : {
    fontSize : '25px',
    fontWeight : 800
  }

})