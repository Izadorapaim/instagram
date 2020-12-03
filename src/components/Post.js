import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, View, TouchableOpacity as Twf } from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComments'
import Icon from 'react-native-vector-icons/FontAwesome'


class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
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
                        <Twf>
                            <Icon name='heart-o' size={30} color='#555' />
                        </Twf>
                        <Twf>
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
}
const styles = StyleSheet.create({
    container: {
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
export default Post