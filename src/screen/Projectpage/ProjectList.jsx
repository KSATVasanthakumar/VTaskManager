import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import SkeletonCard from '../../components/SkeletonCard';
import { colors } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Project = () => {
  const navigation = useNavigation();
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [result, setResult] = useState([]);
  const [pageSize] = useState(5); // constant

  const getProject = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const nextPage = pageNumber + 1;
      const response = await axios.get(
        `https://TaskmanagerAPI.coolboiler.com/api/projects?PageNumber=${nextPage}&PageSize=${pageSize}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response.data);

      const newData = response.data.data || [];
      setResult(prev => [...prev, ...newData]);
      setPageNumber(nextPage); // ✅ THIS WAS MISSING
      if (newData.length < pageSize) {
        setHasMore(false); // 🚫 stop further calls
      }
    } catch (error) {
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };
  useEffect(() => {
    getProject();
  }, []);

  const footerView = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        {/* <Pressable>
          <Text>See more</Text>
        </Pressable> */}
      </View>
    );
  };
  return (
    <WrapperContainer>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Project</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 10,
          top: 15,
        }}
      >
        <Pressable
          style={{
            height: 50,
            width: 50,
            backgroundColor: colors.ACCENT,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() =>
            navigation.navigate('Project', { screen: 'CreateProject' })
          }
        >
          <Text
            style={{
              color: colors.MAINBG,
              fontWeight: '900',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            +
          </Text>
        </Pressable>
      </View>
      <View style={{ margin: 10, paddingTop: 30 }}>
        {initialLoading ? (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={() => <SkeletonCard />}
            contentContainerStyle={{ padding: 20 }}
          />
        ) : result.length > 0 ? (
          <FlatList
            contentContainerStyle={{
              paddingBottom: 70,
              padding: 20,
              marginTop: 20,
            }}
            data={result}
            renderItem={({ item }) => (
              <View
                style={{
                  elevation: 3,
                  shadowColor: '#000',
                  shadowOpacity: 0.1,
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.PRIMARY,
                    marginTop: 12,
                    padding: 20,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: colors.TEXTPRIMARY,
                      fontSize: 16,
                      fontWeight: '600',
                    }}
                  >
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      color: colors.TEXTPRIMARY,
                      marginTop: 6,
                      fontSize: 14,
                      opacity: 0.8,
                    }}
                  >
                    Description:{item?.description}
                  </Text>
                </View>
              </View>
            )}
            onEndReached={getProject}
            onEndReachedThreshold={0.5}
            ListEmptyComponent={<Text>NO PROJECT FOUND</Text>}
          />
        ) : (
          <Text>No Project Found</Text>
        )}
      </View>
    </WrapperContainer>
  );
};

export default Project;

const styles = StyleSheet.create({});
