

import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

type Props = {
  visible: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDialog: React.FC<Props> = ({ visible, message, onConfirm, onCancel }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttons}>
            <Button title="Cancelar" onPress={onCancel} />
            <Button title="Aceptar" onPress={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dialog: {
    margin: 40,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  message: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ConfirmDialog;
