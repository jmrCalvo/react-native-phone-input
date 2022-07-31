# react-native-phone-input-component
the phone input with flag button
## Installation

```sh
npm install react-native-phone-input-component
```

## Usage

```js
import { PhoneInput } from "react-native-phone-input-component";
```

## Examples

| ![select country](https://i.ibb.co/yRtw8pQ/Simulator-Screen-Shot-i-Phone-13-2022-07-30-at-21-23-41.png) | ![search country](https://i.ibb.co/gdcRVt5/Simulator-Screen-Shot-i-Phone-13-2022-07-30-at-21-23-47.png) | ![normal and input custom](https://i.ibb.co/BrTMDNY/Simulator-Screen-Shot-i-Phone-13-2022-07-31-at-12-34-57.png) | ![custom container and input](https://i.ibb.co/XWBf0V6/Simulator-Screen-Shot-i-Phone-13-2022-07-31-at-13-31-16.png) | 
| -- | -- | -- | -- |
## Documentation

The props are the following:
  ### __containerStyle__
  - Description: this is the styles for the container of the input and button  
  - Type: StyleProp\<ViewStyle>
  - Default

      ```json 
        { 
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
        } 
      ```
  ### __inputStyle__
  - Description: this is the style for the input, you can change the style up to you.
  - Type: StyleProp\<ViewStyle>

  ### __placeholder__
  - Type: String

  ### __returnKeyType__
  - Description: When the keyboard pop up, there is button to hide it.
  - type: String

  ### __onBlur__
  - Type: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void

  ### __onFocus__
  - Type: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void

  ### __onChangeText__
  - Type: (text: string) => void

  ### __placeholderTextColor__
  - Type: String

  ### __textAlign__
  - Description: this is the text align for the input
  - Type: 'left' | 'center' | 'right'

  ### __flagSelectorStyle__
  - Description: the styles for the button, to show the modal to select the country
  - Type: StyleProp<ViewStyle>
  - Default: 
      
      ```json 
        {
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#efecec',
          width: 50,
        }
      ```
  ### __defaultCountry__
  - Description: this is the default country that will be displayed, it must be on the two-letters format of the country
  - Type: String
  - Default: "us"

  ### __errorStyle__
  - Description: the style for the text that will be displayed when the user input an error
  - Type: StyleProp<TextStyle>

  ### __modalStyle__
  - Description: the style for the modal to choose the country
  - Type: ViewStyle

---
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
## Thanks

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

Flags [provider](https://github.com/afancylab/data)
