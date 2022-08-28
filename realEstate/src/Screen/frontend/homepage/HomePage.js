import {View,StyleSheet} from 'react-native';
import React from 'react';
import {
  ScrollView,
  Box,
  HStack,
  IconButton,
  Icon,
  Stack,
  Input,
  Image,
  Badge,
  Heading,
  
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


export default function HomePage() {
  return (
    <ScrollView style={Styles.flexContainer}>
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="white"
        px="1"
        py="2"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="menu" size="lg" color="black" />
            }
          />
        </HStack>
        <HStack>
          <Stack w="100%" maxW="200px" mx="auto">
            <Input
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="search" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Search"
            />
          </Stack>
        </HStack>
        <HStack>
        <Box>
            <IconButton
              icon={
                <Icon
                  as={FontAwesome5Icon}
                  name="user-circle"
                  size="md"
                  color="#f75606"
                />
              }
            />
          </Box>
          
          <Box>
            <IconButton
             
              icon={
                <Icon
                  as={MaterialIcons}
                  name="logout"
                  size="md"
                  color="#f75606"
                />
              }
            />
          </Box>
        </HStack>
      </HStack>
      <Box>
        <Swiper
          autoplay={true}
          style={Styles.wrapper}
          height={160}
          showsPagination={true}>
          <View>
            <Image
              source={{
                uri: 'https://icms-image.slatic.net/images/ims-web/c423e8db-cb5f-44ec-baa8-0e5941de7971.jpg_1200x1200.jpg',
              }}
              alt="slider"
              style={{height: '100%'}}
            />
          </View>
          <View>
            <Image
              source={{
                uri: 'https://daraz-app-73432.web.app/static/media/pic4.1e109436af5b9878655c.jpg',
              }}
              alt="slider"
              style={{height: '100%'}}
            />
          </View>
        </Swiper>
      </Box>
   
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  images: {
    width: '100%',
    height: 130,
  },
  heading: {
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
