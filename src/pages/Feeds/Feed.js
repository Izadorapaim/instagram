import React, { Component } from 'react'
import {  FlatList, Dimensions, Image, StyleSheet, View, TouchableOpacity as Twf } from 'react-native'
import Header from '../../components/Header'
import Post from '../../components/Post'

import Author from '../../components/Author'
import Comments from '../comentarios'
import AddComment from '../../components/AddComments'
import Icon from 'react-native-vector-icons/FontAwesome'

class Feed extends Component {
    constructor() {
        super();
        this.state = {
            iconName: "heart-o",
            color: "#555",
            like: false
        };

    }

    rota = () => {
        this.props.navigation.navigate('Coment')
    }

    onLike() {
        this.setState({
            like: !this.state.like
        })
        if (this.state.like)
            this.state.iconName = "heart-o",
                this.state.color = "#555"
        else
            this.state.iconName = "heart",
                this.state.color = "red"
    }

    Post (){
        return (
            <View style={styles.containe}>
                <View style={styles.linhaCabecalho}>
                    <Twf>
                        <Author email={this.props.email} nickname={this.props.nickname} />
                    </Twf>
                    <Twf style={{ alignItems: 'flex-end' }}>
                        <Icon name='ellipsis-v' size={30} color='#555' />
                    </Twf>
                </View>
                <Image source={this.props.image} style={styles.image} />
                <View style={styles.linhaInteracao}>
                    <View style={styles.CurtComeComp}>
                        <Twf onPress={() => this.onLike()}>
                            <Icon name={this.state.iconName} size={30} color={this.state.color} />
                        </Twf>
                        <Twf onPress={this.rota}>
                            <Icon name='comment-o' size={30} color='#555' />
                        </Twf>
                        <Twf>
                            <Icon name='share' size={30} color='#555' />
                        </Twf>
                    </View>
                    <View style={{ flex: 2, alignItems: 'flex-end' }}>
                        <Twf>
                            <Icon name='bookmark-o' size={30} color='#555' />
                        </Twf>
                    </View>
                </View>
                <Comments comments={this.props.comments} />
                <AddComment />
            </View>
        )
    }

    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'Rafaelprfilho@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Jonhn Ray Sheldon',
                comment: 'Stunning!'
            }, {
                nickname: 'Ana Julia Aruuda',
                comment: 'Foto linda! Onde foi tirada?'
            }]
        }, {
            id: Math.random(),
            nickname: 'Francisco Leandro Lima',
            email: 'filima@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                       Post(this.state.posts)} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    containe: {
        flex: 1,
        marginBottom: 15
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    },
    linhaCabecalho: {
        flex: 1, flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    linhaInteracao: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom: 10
    },
    CurtComeComp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Feed