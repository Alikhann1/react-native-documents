import React from 'react'
import { View , Text , TouchableOpacity , StyleSheet , ScrollView , Image } from 'react-native'
import { useDispatch , useSelector , connect } from 'react-redux';
import { addToCart } from '../store/action';

const ck = () =>  {
    const dispatch = useDispatch();
    const product = [
        {
          id : 1,
          Prodect :'rolex',
          Price : 100 ,
          ProductCode : 1000,
          four : 'Add To Cart'
  
      },
      {
        id : 2,
        Prodect :'rado',
         Price : 200 ,
        ProductCode : 2000,
        four : 'Add To Cart'
    },
    {
      id : 3,
        Prodect :'ck',
        Price : 300 ,
         ProductCode : 3000,
        four : 'Add To Cart'
  }
      ]
  return (
    <View style = {styles.ProductRootContainer}>
      <ScrollView 
      showsVerticalScrollIndicator ={false}
      showsHorizontalScrollIndicator={false}>
      {
        product.map((pro, index) => {
          return (
            <View key={index} style = {styles.ProductContainer}>
              <Image style = {styles.ProductImage} source={require('../../assets/images/image1.jpeg')}/>
              <Text style = {styles.ProductBrand}> Brand : {pro.Prodect}</Text>
              <Text style ={styles.ProductPrice}> Price : {pro.Price}</Text>
              <Text style = {styles.ProductCode}> Product Code : {pro.ProductCode}</Text>
              <TouchableOpacity style = {styles.ProducttouchButton} onPress={() => dispatch(addToCart(product[index]))}>
                <Text style = {styles.ProductButton}>{pro.four}</Text>
              </TouchableOpacity>
            </View>)
        })}
        </ScrollView>
    </View>
  )
}

export default ck;

const styles = StyleSheet.create({ 

    ProductRootContainer : {
      flex : 1,
      width : '100%',
      hight : '100%',
      backgroundColor:'#B8FFF9',
      padding : '15px'
    }
    ,
  
    ProductContainer : {
      width : '100%',
      hight : '60%',
      borderColor : 'black',
      borderWidth : '1px',
      borderRadius : '12px',
      marginBottom : '20px',
      padding : '5px'
  
    }
  ,
    ProductImage : {
      width:'100%',
      height: 200,
      borderRadius : '12px',
  
    },
  
    ProductBrand : {
      fontSize : '15px',
      fontWeight : 700,
      paddingTop : '10px'
    },
  
    ProductCode : {
      fontSize : '15px',
      fontWeight : 700
    },
  
    ProductPrice:{
      fontSize : '15px',
      fontWeight : 700
    },
  
    ProducttouchButton:{
      backgroundColor : 'red',
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      marginHorizontal : '110px',
      marginVertical : '10px',
      padding : '10px',
      borderRadius : '12px',
      borderColor : 'black',
      borderWidth : '2px',
  
  
    },
  
    ProductButton:{
      fontSize : '15px',
      fontWeight : 700
    }
  
  
  })