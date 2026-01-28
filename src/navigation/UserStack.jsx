import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateUser, EditUser, UserList } from '../screen';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Userlist"
        component={UserList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{
          headerTitle: 'Create New User',
        }}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{
          headerTitle: 'Edit User',
        }}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
