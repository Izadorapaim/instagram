import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableWithoutFeedback as Twf, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
    state = {
        comment: '',
        editMode: false
    }
    handleAddComment = () => {
        Alert.alert('Adicionado!', this.state.comment)
    }

    render() {
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <View>
                        <TextInput placeholder='Pode comentar...' styles={styles.input} autoFocus={true} value={this.state.comment} onChangeText={comment => this.setState({ comment })} onSubmitEditing={this.handleAddComment} />
                    </View>
                    <View>
                        <Twf onPress={() => this.setState({ editMode: false })}>
                            <Icon name='times' size={15} color='#555' />
                        </Twf>
                    </View>
                </View>
            )
        } else {
            commentArea = (
                <Twf onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='comment-o' size={25} color='#555' />
                            <Text style={styles.caption}>
                                Adicione um comentário...
                        </Text>
                        </View>
                    </View>
                </Twf>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        padding: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input: {
        width: '90%'
    }
})
export default AddComment