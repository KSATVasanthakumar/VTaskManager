import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Projectpage, CreateProject } from '../screen';

const Stack = createNativeStackNavigator();

const ProjectStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectPage"
        component={Projectpage}
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

export default ProjectStack;
