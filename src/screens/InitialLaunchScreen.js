import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PrimaryButton from '../components/PrimaryButton';
import {colors} from '../config/Colors';
import SearchBox from '../components/SearchBox';

const DATA = [
  {id: '1', title: 'English', subTitle: ' '},
  {id: '2', title: 'English (UK)', subTitle: ''},
  {id: '3', title: 'Deutsch', subTitle: 'German'},
  {id: '4', title: 'Espanol', subTitle: 'Spanish (Latin America)'},
  {id: '5', title: 'Espanol', subTitle: 'Spanish (Spain)'},
  {id: '6', title: 'Français ', subTitle: 'French (Canada)'},
  {id: '7', title: 'Français', subTitle: 'French (France)'},
  {id: '8', title: 'Türkçe', subTitle: 'Turkish'},
];
export class InitialLaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageModalVisible: false,
    };
  }

  handleClick = () => {
    this.setState({languageModalVisible: !this.state.languageModalVisible});
  };
  render() {
    const {languageModalVisible} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <TouchableOpacity
            onPress={() => {
              this.handleClick();
            }}>
            <Text>
              <Text style={{color: '#555'}}>{DATA[0].title} </Text>
              {/* <Icon name="caret-down" /> */}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <Image
            style={styles.instaLogo}
            source={require('../images/instagramLogo.png')}
          />
          <View style={styles.ButtonItemContainer}>
            <PrimaryButton
              buttonBg={colors.primary}
              text={colors.secondary}
              label={'Create New Account'}
            />
          </View>
          <View style={styles.ButtonItemContainer}>
            <PrimaryButton
              buttonBg={colors.secondary}
              text={colors.primary}
              label={'Log in'}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}></View>
        <Modal visible={languageModalVisible} transparent={true}>
          <View
            style={[
              styles.modalContainer,
              languageModalVisible
                ? {backgroundColor: 'rgba(0,0,0,0.5)'}
                : null,
            ]}>
            <View style={styles.modalContentContainer}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>SELECT YOUR LANGUAGE</Text>
              </View>
              <View style={styles.underLine} />
              <View style={styles.searchBoxWrapper}>
                <SearchBox />
              </View>
              <View style={styles.underLine} />

              <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={styles.languageWrapper}>
                    <Text style={styles.langTitle}>{item.title}</Text>
                    <Text style={styles.subLanguage}>{item.subTitle}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default InitialLaunchScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  languageContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 15,
  },
  bottomContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  instaLogo: {
    width: '50%',
    height: '30%',
    marginBottom: 40,
  },
  bottomWrapper: {
    borderTopWidth: 0.5,
    borderColor: colors.gray,
    width: '100%',
    padding: 10,
  },
  from: {
    textAlign: 'center',
    color: colors.gray,
  },
  facebook: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    display: 'flex',
    flex: 1,
  },
  modalContentContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.secondary,
    marginLeft: '10%',
    marginRight: '10%',
  },
  titleWrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  underLine: {
    height: 0.5,
    backgroundColor: colors.gray1,
  },
  searchBoxWrapper: {
    display: 'flex',
    marginBottom: 20,
  },
  languageWrapper: {
    marginLeft: 15,
    marginBottom: 10,
  },
  subLanguage: {
    color: colors.gray,
    fontSize: 16,
  },
  langTitle: {
    fontSize: 20,
  },
  ButtonItemContainer: {
    marginBottom: 10,
    width: '100%',
  },
});
