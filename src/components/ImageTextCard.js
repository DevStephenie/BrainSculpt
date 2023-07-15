import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const ImageTextCard = ({image, title, to, content, containerStyle, imgStyle, textStyle}) => {
    const navigator = useNavigation()

    const handleNavigate = () => {
        content ? navigator.navigate(to, { content }) : navigator.navigate(to)
    }
    return (
        <View className={`flex justify-center items-center mx-2 my-2 ${containerStyle}`}>
            <TouchableOpacity
                className='flex justify-center items-center'
                onPress={ handleNavigate }
            >
                <Image 
                    source={image}
                    resizeMethod='cover'
                    className={`rounded-md h-32 w-24 my-1 ${imgStyle}`}
                />
                <Text className={`text-md font-bold text-[#333] text-center ${textStyle}`}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ImageTextCard