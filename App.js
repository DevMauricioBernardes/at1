import * as React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <View style={estilo.banner}>
          <Image source={require('./src/img/banner.png')}></Image>
        </View>
          
        <View>  
          <Text style={estilo.txtCategoria}>Moda Feminina</Text>
          <View>          
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{margin: 20}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Vestido')}>
                  <View style={{alignItems: 'center'}}>
                    <Image style={{width: 170, height: 200}} source={require('./src/img/vestido.png')}></Image>
                    <Text style={estilo.txtProdutos}>vestido</Text>
                    <Text style={estilo.txtProdutos}>R$60,00</Text>
                  </View>
                </TouchableOpacity> 
              </View>
              <View style={{margin: 20}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Macacão')}>
                  <View>
                    <Image style={{width: 170, height: 200}} source={require('./src/img/macacao.png')}></Image>
                    <Text style={estilo.txtProdutos}>macacão</Text>
                    <Text style={estilo.txtProdutos}>R$80,00</Text>
                  </View>
                </TouchableOpacity> 
              </View>            
            </View>
          </View>
        </View>   

        <View>
          <Text style={estilo.txtCategoria}>Moda Masculina</Text>
          <View>          
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{margin: 20}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Calça Jeans')}>
                  <View style={{alignItems: 'center'}}>
                    <Image style={{width: 170, height: 200}} source={require('./src/img/calca.png')}></Image>
                    <Text style={estilo.txtProdutos}>calça jeans</Text>
                    <Text style={estilo.txtProdutos}>R$100,00</Text>
                  </View>
                </TouchableOpacity> 
              </View>
              <View style={{margin: 20}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Casaco')}>
                  <View>
                    <Image style={{width: 170, height: 200}} source={require('./src/img/casaco.png')}></Image>
                    <Text style={estilo.txtProdutos}>casaco</Text>
                    <Text style={estilo.txtProdutos}>R$80,00</Text>
                  </View>
                </TouchableOpacity> 
              </View>            
            </View>
          </View>
        </View>

        <View>
          <Text style={estilo.txtCategoria}>Bem Vindo ao BAZZAAR</Text>
          <Text style={estilo.txtSobre}>Nossos produtos são inspirados pelas pessaos que estão à nossa volta, com suas belezas e qualidades. Produtos de bom gosto especialmente para você.
            Descubra our story e aproveite as promoções.
          </Text>
        </View>

        <View style={estilo.areaInformacoes}>
            <Text style={estilo.txtInformacoes}>Rua Eusébio 10</Text>
            <Text style={estilo.txtInformacoes}>Centro, Cidade das Águias</Text>
            <Text></Text>
            <Text style={estilo.txtInformacoes}>Aberto de segunda à sexta das 10:00 às 21:00</Text>
        </View>

        <View style={{marginVertical: 20}}>
          <Text style={estilo.txtSiga}>Siga-nos</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={estilo.icones} source={require('./src/img/twitter.png')}></Image>
          <Image style={estilo.icones} source={require('./src/img/facebook.png')}></Image>
          <Image style={estilo.icones} source={require('./src/img/tiktok.png')}></Image>
          <Image style={estilo.icones} source={require('./src/img/instagram.png')}></Image>
          <Image style={estilo.icones} source={require('./src/img/whatsapp.png')}></Image>
          </View>
        </View>

        <View style={{marginVertical: 20}}>
          <Text style={estilo.txtSiga}>Aceitamos</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={estilo.icones} source={require('./src/img/visa.png')}></Image>
          <Image style={estilo.icones} source={require('./src/img/master.png')}></Image>
          <Image style={estilo.icones} source={require('./src/img/amex.png')}></Image>
          
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

function Vestido() {
  return (
    <View>
      <View style={{margin: 20,alignItems: 'center'}}>
        <Image style={{width: 360, height: 500}} source={require('./src/img/vestidoG.png')}></Image>
        <Text style={estilo.txtProdutos}>vestido</Text>
        <Text style={estilo.txtProdutos}>R$60,00</Text>
      </View> 
    </View>   
  );
}

function Macacao() {
  return (
    <View>
      <View style={{margin: 20,alignItems: 'center'}}>
        <Image style={{width: 360, height: 500}} source={require('./src/img/macacaoG.png')}></Image>
        <Text style={estilo.txtProdutos}>macacão</Text>
        <Text style={estilo.txtProdutos}>R$80,00</Text>
      </View> 
    </View>
  );
}

function Calca() {
  return (
    <View>
      <View style={{margin: 20,alignItems: 'center'}}>
        <Image style={{width: 360, height: 500}} source={require('./src/img/calcaG.png')}></Image>
        <Text style={estilo.txtProdutos}>Calça</Text>
        <Text style={estilo.txtProdutos}>R$100,00</Text>
      </View> 
    </View>
  );
}

function Casaco() {
  return (
    <View>
      <View style={{margin: 20,alignItems: 'center'}}>
        <Image style={{width: 360, height: 500}} source={require('./src/img/casacoG.png')}></Image>
        <Text style={estilo.txtProdutos}>Casaco</Text>
        <Text style={estilo.txtProdutos}>R$80,00</Text>
      </View> 
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BAZZAAR">
        <Stack.Screen name="BAZZAAR" component={HomeScreen} />
        <Stack.Screen name="Vestido" component={Vestido} />
        <Stack.Screen name="Macacão" component={Macacao} />
        <Stack.Screen name="Calça Jeans" component={Calca} />
        <Stack.Screen name="Casaco" component={Casaco} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const estilo = StyleSheet.create({
  banner: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    width: 420, 
    height: 140,
  },
  txtCategoria:{
    color: 'black',
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 15
  },  
  txtProdutos: {
    color: 'black'
  },
  txtSobre:{
    color: 'black',
    fontSize: 15,    
    marginLeft: 15,
    width: 380,
  },
  areaInformacoes:{
    backgroundColor: 'lightgrey',
    width: 380,
    margin: 20,
    alignItems: 'center',
    padding: 25
  },
  txtInformacoes:{
    color: 'black',
  },
  txtSiga:{
    color: 'black',
    fontSize: 20,    
    marginLeft: 50,
    fontWeight: '500'
  },
  icones:{    
    margin:10,
  }




})
