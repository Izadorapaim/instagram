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
                <Author email={this.props.email} nickname={this.props.nickname} />
                <Image source={this.props.image} style={styles.image} />
                <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', alignContent: 'center', marginBottom: 10 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
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
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})
export default Post