import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Morepage, CreateProject } from '../screen';

const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MorePage"
        component={Morepage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateProject"
        component={CreateProject}
        options={{
          headerTitle: 'Create New Project',
        }}
      />
    </Stack.Navigator>
  );
};

export default MoreStack;
