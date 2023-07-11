import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ListCard = ({title, items}) => {
  return (
    <View className="flex justify-start w-full mt-3">
        <Text className="text-[#999] text-xs text-start w-full font-medium ">{title}</Text>
        <View className="w-full flex items-center bg-white shadow-sm my-3 p-4 rounded-2xl">
            {
                items.map((item, index, arr) => <Item key={index} {...{...item, arr, index}} />)
            }
        </View>
    </View>
  )
}

export const Item = ({ title, dest, arr, index }) => {
    return (
        
    <TouchableOpacity
    onPress={() => console.log('more item clicked', dest)}
    className='w-full my-1'
    >
        <Text className="font-regular text-md">{title}</Text>
        { 
            !(( arr.length - 1 ) === index ) && <View className='w-full h-[1px] bg-[#c5bbbb] rounded-full my-2' />
        }
    </TouchableOpacity>

    )
}
export default ListCard