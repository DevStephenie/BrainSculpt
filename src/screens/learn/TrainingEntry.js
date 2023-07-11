import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { BaseView } from '../../components'
import { trainings } from '../../utils/constants'

const TrainingEntry = () => {
  return (
    <>
      <BaseView>
        <View className="flex flex-row flex-wrap justify-start items-start w-full my-5">
          {
            trainings.map((training, index) => <Training key={index} {...training} />)
          }
        </View>
      </BaseView>
    </>
  )
}

export const Training = ({image, title, to}) => {
    return (
        <View className="flex justify-center items-center mx-2 my-2">
            <TouchableOpacity
                className='flex justify-center items-center'
            >
                <Image 
                    source={image}
                    resizeMethod='cover'
                    className='rounded-md h-32 w-24 my-1 '
                />
                <Text className="text-md font-bold text-[#333] text-center">{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TrainingEntry