import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import { colors } from '../../styles/colors';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { bool } from 'yup';
// ProjectName :name
// project description : description
// startdate:startDate,
// enddate:endDate,
// status:status

const CreateProject = () => {
  const today = new Date();
  const [projectname, setProjectname] = useState('');
  const [projectdescription, setProjectdescription] = useState('');
  const [projectstatus, setProjectstatus] = useState('');
  const [startdate, setstartDate] = useState(today);
  const [enddate, setendDate] = useState(today);
  const [error, setError] = useState('');
  const [minStartDate, setMinStartDate] = useState(today);

  useEffect(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 10);
    setMinStartDate(date);
  }, []);

  //   const handleCreateProject = async () => {
  //     try{
  //     const payload = {
  //       name: projectname,
  //       description: projectdescription,
  //       status: projectstatus,
  //       startDate: startdate.toLocaleDateString(),
  //       endDate: enddate.toLocaleDateString(),
  //     };
  //     console.log('payload', payload);
  //     const response = await axios.post(
  //       'https://TaskmanagerAPI.coolboiler.com/api/projects',
  //       payload,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     console.log('Project created:', response.data);
  //     }

  //   } catch (er) {
  //     console.error(
  //       'Create project failed:',
  //       er.response?.status,
  //       er.response?.data || er.message
  //     );
  //   };
  // }

  function isvalidation() {
    if (!projectname || projectname.length <= 3) {
      setError('Project Name is not Valid');
      return true;
    }
    if (!projectdescription || projectdescription.length <= 10) {
      setError('Project Description is not Valid');
      return true;
    }
    if (!projectstatus || projectstatus.length <= 5) {
      setError('Project Status is not Valid');
      return true;
    }
    setError('');
    return false;
  }

  const handleCreateProject = async () => {
    try {
      if (!isvalidation()) return;

      const payload = {
        name: projectname,
        description: projectdescription,
        status: projectstatus,
        startDate: startdate.toISOString(),
        endDate: enddate.toISOString(),
      };
      console.log('payload', payload);
      const response = await axios.post(
        'https://TaskmanagerAPI.coolboiler.com/api/projects',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      setError('Create project failed');
    }
  };

  return (
    <WrapperContainer>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {error ? (
          <Text style={styles.txtError}>{error.toLocaleUpperCase()}</Text>
        ) : (
          <Text></Text>
        )}
        <TextInput
          autoFocus={true}
          style={styles.txtInput}
          placeholder="Project Name"
          placeholderTextColor={colors.ACCENT}
          value={projectname}
          onChangeText={e => setProjectname(e)}
        />
        <TextInput
          placeholder="Project Description"
          placeholderTextColor={colors.ACCENT}
          style={styles.txtInput}
          value={projectdescription}
          onChangeText={e => setProjectdescription(e)}
        />
        <TextInput
          placeholder="Project Status"
          placeholderTextColor={colors.ACCENT}
          style={styles.txtInput}
          value={projectstatus}
          onChangeText={e => setProjectstatus(e)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}
        >
          <Text>Start Date</Text>
          <RNDateTimePicker
            value={startdate}
            mode="date"
            testID="datePicker"
            minimumDate={minStartDate}
            onChange={(e, selectedData) => {
              if (e.type === 'set' && selectedData) {
                setstartDate(selectedData);

                if (selectedData > enddate) {
                  setendDate(selectedData);
                }
              }
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>End Date</Text>
          <RNDateTimePicker
            value={startdate}
            mode="date"
            testID="datePicker"
            minimumDate={startdate}
            onChange={(e, selected) => {
              if (e.type === 'set' && selected) {
                setendDate(selected);
              }
            }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: colors.ACCENT,
              marginTop: 10,
              width: 200,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => handleCreateProject()}
          >
            <Text
              style={{
                color: colors.MAINBG,
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              Create Project
            </Text>
          </Pressable>
        </View>
      </View>
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  txtInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  txtError: {
    color: colors.ERROR,
    fontSize: 15,
    marginBottom: 10,
  },
});

export default CreateProject;
