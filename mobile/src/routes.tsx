import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrphanageDetails";
import SelectedMapPosition from "./pages/createOrphanage/SelectMapPosition";
import OrphanageData from "./pages/createOrphanage/OrphanageData";
import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
						headerShown: true,
						header: () => <Header showCase={false} title="Orfanato" />
          }}
        />

				<Screen 
					name="SelectedMapPosition" 
					component={SelectedMapPosition} 
					options={{
						headerShown: true,
						header: () => <Header title="Selecione no mapa" />
          }}
				/>

				<Screen 
					name="OrphanageData" 
					component={OrphanageData} 
					options={{
						headerShown: true,
						header: () => <Header title="Informe os dados" />
          }}
				/>
      </Navigator>
    </NavigationContainer>
  );
}
