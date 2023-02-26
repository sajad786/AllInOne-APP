
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState , useRef} from 'react'
import Sectionlist from 'react-native-tabs-section-list'
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const listRef = useRef()

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=40')
      .then(res => res.json())
      .then((res) => {
        // console.log(res, "resss")
        let filterArray = res?.products?.map((val, i) => {
          return {
            title: val?.title,
            data: val?.images,
            id: val?.id,
          }
        })
        console.log(filterArray, "resss")
        setProducts(filterArray)
      });
  }, [])

  const onPressTitle = useCallback((index)=>{
    console.log(listRef,"listReffff")
    if(!!listRef.current){
      listRef.current.sectionList.current.scrollToLocation({
        sectionIndex:index,
        itemIndex:0,
        animated:true
      })

    }

  },[products])

  const renderSectionTabs = useCallback((props) => {
    console.log(props,"propsss")
    return (
      <TouchableOpacity onPress={()=>onPressTitle(props.index)} style={{marginBottom:16, marginLeft:12}} >
        <Text style={{fontWeight:'bold', color:props.isActive?'red':'black'}} >{props.title}</Text>
      </TouchableOpacity>
    )
  },[products],)

  const renderSectionItems = useCallback(({ item, index }) => {
    return (
      <View style={styles.itemStyle} >
        <Text style={{color:'white',fontWeight:'bold'}} >{index}</Text>
      </View>
    )
  },[products],)

  const itemSeparatorComponent = useCallback(() => {
    return (
      <View style={{ height: 8, }} >
        </View>
    )
  }, [products])

  const renderSectionHeader = useCallback(({section: {title}}) => {
    return (
      <View style={{height:30}} >
        <Text>{title}</Text>
      </View>
    )
  }, [products])

  const getItemLayout = sectionListGetItemLayout({
    getItemHeight:(rowData,sectioIndex, rowIndex) => 100,
    getSectionHeaderHeight:() => 30, // these heights should be same as given to sectionList
    getSeparatorHeight:() => 8,
    getSectionFooterHeight:() => 40,
  })


  return (

    <View style={styles.container} >
      <SafeAreaView style={{ flex: 1}} >
        <Sectionlist
          stickySectionHeadersEnabled={false}
          ref={listRef}
          sections={products}
          renderTab={renderSectionTabs}
          renderItem={renderSectionItems}
          ItemSeparatorComponent={itemSeparatorComponent}
          renderSectionHeader={renderSectionHeader}
          renderSectionFooter={()=><View style={{height:40}} />}
          getItemLayout={getItemLayout}
          extraData={products} // used if data tab and data mismatches or goes back
          keyExtractor={(_, index)=>index.toString()}
        />
      </SafeAreaView>
    </View>

  )
}

export default ProductList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,

  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textDecorationLine: 'underline'
  },
  itemStyle:{
    height:100,
    borderRadius:6,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center',
  }
})