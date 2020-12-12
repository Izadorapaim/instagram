import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, Button, View, ScrollView, TextInput, Text, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import { AsyncStorage } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'


import Interacao from '../../components/interacoes'
import Comentarios from '../../components/Comments'
import * as data from '../../../postagens.json'
import Headers from '../Header'
import AddComnet from '../../components/AddComments';


import { Container, Post, Header, Avatar, Name, Description, Loading } from './styles';
//import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Feed() {
  const [error, setError] = useState('');
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('')
  const [comentarios, setComentarios] = useState([]);


  const MAX_LENGTH = 250;

  //const texto = data.author.name;
  //console.log(texto)

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === total) return;
    if (loading) return;

    setLoading(true);

    axios
      .get(`https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=${pageNumber}&limit=4`)
      .then(response => {
        const totalItems = response.headers["x-total-count"]
        const data = response.data
        //console.log(data)
        setLoading(false)
        setTotal(Math.floor(totalItems / 4));
        setPage(pageNumber + 1);
        setFeed(shouldRefresh ? data : [...feed, ...data]);
      })
      .catch(err => {
        setError(err.message);
        setLoading(true)
      })
  }

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  const onGet = (id) => {
    try {

      const value = AsyncStorage.getItem(id);

      if (value !== null) {
        // We have data!!
        setComentarios(value)
      }
    } catch (error) {
      // Error saving data
    }
  }

  const onSave = async (id) => {
    try {
      await AsyncStorage.setItem(id, text);
      setComentarios([...comentarios, ...text])
    } catch (error) {
      // Error saving data
    }
  }

  useEffect(() => {
    loadPage()
  }, []);

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      this.toggleLike();
    } else {
      this.lastTap = now;
    }
  }

  const renderItem = ({ item }) => {
    return (
      <Post>
        <Header>
          <Avatar source={{ uri: item.author.avatar }} />
          <Name>{item.author.name}</Name>
        </Header>

        <TouchableWithoutFeedback onPress={() => handleDoubleTap} >
          <LazyImage
            aspectRatio={item.aspectRatio}
            shouldLoad={viewable.includes(item.id)}
            smallSource={{ uri: item.small }}
            source={{ uri: item.image }}
          />
        </TouchableWithoutFeedback>

        <Interacao />

        <Description>
          <Name>{item.author.name}</Name> {item.description}
        </Description>
        <Description>
          {comentarios}
        </Description>

        <AddComnet />

        {/* 
        <TextInput
          multiline={true}
          onChangeText={(text) => setText(text)}
          placeholder={"Comentários"}
          style={[styles.text]}
          maxLength={MAX_LENGTH}
          value={text} /> */}



        {/* <Button
          title="Salvar"
          onPress={() => onSave(String(item.id))}
          accessibilityLabel="Salvar">
        </Button> */}

      </Post>
    )
  }

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <View style={styles.containerh}>
        <View style={styles.linhaContainerh}>
          <View>
            <Text style={styles.titulo}>Instagram</Text>
          </View>
          <View>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigate('Login')}>
              <AntDesign name="logout" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <FlatList
        key="list"
        data={feed}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListFooterComponent={loading && <Loading />}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    lineHeight: 33,
    color: "#333333",
    padding: 16,
    paddingTop: 16,
    minHeight: 170,
    borderTopWidth: 1,
    borderColor: "rgba(212,211,211, 0.3)"
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain'
  },
  containerh: {
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    alignContent: 'flex-start'
  },
  linhaContainerh: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titulo: {
    color: '#000',
    fontFamily: 'GrandHotel_400Regular',
    fontSize: 35,
    marginBottom: 2
  }

})
