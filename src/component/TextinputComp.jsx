import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../Styles/colors'

const TextinputComp = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  maxLength,
  multiline,
  numberOfLines,
  onFocus,
  onBlur,
  onSubmitEditing,
  returnKeyType,
  onKeyPress,
  onEndEditing,
  onSelectionChange,
  onContentSizeChange,
  onLayout,
  onScroll,
  onChange,
  onChangeTextInput,
 

}) => {
  return (
    <View style={{ ...styles.textInput }}>
      <TextInput
        value={value}
        // styles={styles.textInput}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        onKeyPress={onKeyPress}
        onEndEditing={onEndEditing}
        onSelectionChange={onSelectionChange}
        onContentSizeChange={onContentSizeChange}
        onLayout={onLayout}
        onScroll={onScroll}
        onChange={onChange}
        style={styles.text}
      />
    </View>
  )
}

export default TextinputComp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // width: '80%',
    height: 50,
    borderColor: '#000',
    // borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent:'center',
    backgroundColor:COLORS.GRAY
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
})