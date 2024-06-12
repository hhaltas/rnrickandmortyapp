import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Modal, ModalContent} from 'react-native-modals';
import {Colors} from '../utils/color';

const NotificationCard = ({
  visibleModal,
  handleCloseModal,
  dataText,
  titleOK,
  titleNO,
  handleRemoveData,
  characters,
}) => {
  return (
    <Modal visible={visibleModal} onTouchOutside={visibleModal.onTouchOutside}>
      <ModalContent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{dataText}</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 40,
                marginTop: 10,
              }}>
              {titleOK ? (
                <TouchableOpacity
                  style={{
                    width: '49%',
                    marginRight: 10,
                    borderWidth: 0.8,
                    borderRadius: 5,
                    backgroundColor: Colors.separator,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => handleRemoveData(characters)}>
                  <Text>{titleOK}</Text>
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity
                style={{
                  width: titleOK ? '49%' : '100%',
                  borderWidth: 0.8,
                  borderRadius: 5,
                  backgroundColor: Colors.unFavorite,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleCloseModal}>
                <Text>{titleNO}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ModalContent>
    </Modal>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  modalOverlay: {},
  modalContent: {
    width: '95%',
  },
});
