import React, {useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CurrencyInput from 'react-native-currency-input';

// @components
import Text from '../components/customText';
import Button from '../components/button';

// @utils
import {formatToDecimal} from '../utils/general';

// @theme
import {fonts, pallet} from '../theme';

// @assets
const arrow = require('../assets/arrow_down.png');
const memberCardImage = require('../assets/card_member.png');
const boneBlueImage = require('../assets/boneBlue.png');
const boneYellowImage = require('../assets/boneYellow.png');

const HomeScreen = () => {
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);
  const [petExpenses, setPetExpenses] = useState('');
  const [price, setPrice] = useState(0);

  const onCalculatePrice = () =>
    petExpenses
      ? setPrice(Number(petExpenses) * 0.15 * 12)
      : Alert.alert('alerta', 'Debe ingresar un valor valido');

  const renderInfoCard = () => (
    <View style={styles.infoCardContainer}>
      <Text bold>Beneficios los 365 días del año</Text>
      <View style={styles.benefice}>
        <Image source={boneYellowImage} style={styles.bone} />
        <Text style={styles.desc} bold>
          <Text bold style={styles.textHighlighted}>
            15%
          </Text>{' '}
          de descuento en todos los productos
        </Text>
      </View>
      <View style={styles.benefice}>
        <Image source={boneYellowImage} style={styles.bone} />
        <Text style={styles.desc} bold>
          Domicilo{' '}
          <Text bold style={styles.textHighlighted}>
            gratis
          </Text>{' '}
          <Text style={styles.smallText}>a partir de $120.000</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.seeMoreContainer}
        onPress={() => setShowMoreBenefits(!showMoreBenefits)}>
        <Text bold>Ver otros beneficios</Text>
        <Image
          source={arrow}
          style={showMoreBenefits ? styles.arrowUp : styles.arrowDown}
        />
      </TouchableOpacity>
      {showMoreBenefits && (
        <View>
          <View style={styles.benefice}>
            <Image source={boneBlueImage} style={styles.bone} />
            <Text>Regalo de bienvenida</Text>
          </View>
          <View style={styles.benefice}>
            <Image source={boneBlueImage} style={styles.bone} />
            <Text>Bono de Netflix para maratonear</Text>
          </View>
          <View style={styles.benefice}>
            <Image source={boneBlueImage} style={styles.bone} />
            <Text>Beneficios en restaurantes y tiendas</Text>
          </View>
          <View style={styles.benefice}>
            <Image source={boneBlueImage} style={styles.bone} />
            <Text>
              Por cada pedido que hagas, donaremos un porcentaje a una fundación
            </Text>
          </View>
        </View>
      )}
      <View style={styles.divider} />

      <View style={styles.paymentInfoContainer}>
        <View>
          <Text style={styles.onlyPay} bold>
            Paga únicamente
          </Text>
          <Text style={styles.bigText} bold>
            $69.900<Text>/año</Text>
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.paymentInfo}>
            Lo que equivale a <Text bold>$5.260</Text> el mes
          </Text>
        </View>
      </View>
      <Button customStyle={styles.paymentButton}>Adquirir membresía</Button>
      <Text style={styles.termsAndConditions} bold>
        Aplican términos y condiciones
      </Text>
    </View>
  );

  const renderSaveCalculation = () => (
    <View style={styles.saveCalculationContainer}>
      <Text style={styles.extraBig} bold>
        Calcula tu ahorro con la membresía
      </Text>
      <Text style={styles.medium} bold>
        ¿Cuánto gastas al mes en tu peludo?
      </Text>
      <CurrencyInput
        value={petExpenses}
        onChangeValue={value => setPetExpenses(value)}
        prefix="$"
        delimiter="."
        precision={0}
        minValue={0}
        style={styles.input}
        keyboardType="numeric"
      />
      {console.log(petExpenses, Number(petExpenses))}
      <Button onPress={onCalculatePrice}>Calcular</Button>
      <Text style={styles.saveText} bold>
        Te ahorras
      </Text>
      <Text style={styles.price} bold>
        {price ? formatToDecimal(price) : `$${price}`}
      </Text>
      <Text style={styles.medium} bold>
        al año
      </Text>
    </View>
  );

  const renderExpiriences = () => (
    <View>
      <Text>
        Experiencias de LAIKA <Text>Members</Text>
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Image source={arrow} style={styles.arrow} />
        <View style={styles.laikaMember}>
          <Text style={styles.title} bold>
            LAIKA{' '}
            <Text style={styles.textHighlighted} bold>
              Member
            </Text>
          </Text>
          <Text style={styles.description}>
            Conviértete en miembro, recibe beneficios exclusivos y dale lo mejor
            a tu mascota.
          </Text>
          <Image
            source={memberCardImage}
            style={styles.memberCard}
            resizeMode="contain"
          />
        </View>
        {/* {renderInfoCard()} */}
        {renderSaveCalculation()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pallet.primaryColor,
  },
  content: {
    padding: 20,
  },
  arrow: {
    width: 30,
    height: 30,
    transform: [{rotate: '90deg'}],
  },
  title: {
    fontSize: 30,
  },
  textHighlighted: {
    color: pallet.yellowGold,
  },
  laikaMember: {
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 8,
  },
  memberCard: {
    width: 300,
    height: 200,
    marginVertical: 30,
  },
  infoCardContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: pallet.yellowGold,
    backgroundColor: pallet.laikaColor,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  benefice: {
    flexDirection: 'row',
    marginTop: 15,
  },
  bone: {
    width: 17,
    height: 17,
    marginRight: 7,
  },
  desc: {
    fontSize: 17,
  },
  smallText: {
    fontSize: 12,
  },
  seeMoreContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowUp: {
    marginLeft: 8,
    width: 20,
    height: 20,
    transform: [{rotate: '180deg'}],
  },
  arrowDown: {
    marginLeft: 8,
    width: 20,
    height: 20,
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: pallet.yellowGold,
    borderStyle: 'dashed',
    marginVertical: 20,
  },
  bigText: {
    fontSize: 20,
  },
  paymentInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentInfo: {textAlign: 'center', fontSize: 12},
  infoContainer: {
    width: 140,
    backgroundColor: pallet.purpleVariant,
    borderRadius: 12,
    padding: 8,
    paddingHorizontal: 15,
  },
  onlyPay: {
    marginBottom: 5,
  },
  paymentButton: {
    marginTop: 20,
  },
  termsAndConditions: {
    color: pallet.yellowGold,
    fontSize: 10,
    alignSelf: 'center',
    marginVertical: 7,
  },
  extraBig: {
    fontSize: 25,
    textAlign: 'center',
    maxWidth: 250,
    marginBottom: 5,
  },
  saveCalculationContainer: {
    padding: 40,
    alignItems: 'center',
  },
  input: {
    color: pallet.white,
    textAlign: 'center',
    backgroundColor: pallet.plum,
    width: '100%',
    paddingVertical: 20,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: fonts.bold,
    fontSize: 20,
  },
  price: {
    fontSize: 25,
    color: pallet.yellowGold,
  },
  saveText: {
    marginTop: 30,
    fontSize: 16,
  },
  medium: {
    fontSize: 16,
  },
});

export default HomeScreen;
