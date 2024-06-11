import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal, ModalContent} from 'react-native-modals';

const NotificationCard = ({
  visibleModal,
  handleCloseModal,
  dataText,
  titleOK,
  titleNO,
  handleRemoveData,
  characters,
}) => {
  console.log('modalcard', visibleModal);

  return (
    <Modal visible={visibleModal} onTouchOutside={visibleModal.onTouchOutside}>
      <ModalContent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{dataText}</Text>
            <View style={{flexDirection: 'row'}}>
              {titleOK ? (
                <Button
                  title={titleOK}
                  onPress={() => handleRemoveData(characters)}
                />
              ) : null}
              <Button title={titleNO} onPress={handleCloseModal} />
            </View>
          </View>
        </View>
      </ModalContent>
    </Modal>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
