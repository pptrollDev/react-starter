import React, { useEffect, useState } from 'react';
import TabletItem from '../../organisms/TabletItem';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useNotification } from '../../../hooks/Notification';
import { useUserState } from '../../../context/User';
import { treatmentItem } from '../../organisms/TabletItem/type';
import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';

const TTabletItem = () => {
  const notification = useNotification();
  const userState = useUserState();
  const [treatmentItems, setTreatmentItems] = useState<treatmentItem[]>();
  const [selectedItem, setSelectedItem] = useState<treatmentItem>();
  const [linked, setLinked] = useState<boolean>();
  const [modal, setModal] = useState<IModalWithConfirm>({ isVisible: false });

  useEffect(() => {
    if (userState) {
      setLinked(
        userState.hospitalHospitalAdminUsers[0].hospital.receiptHospitalConfiguration
          ?.chart.linked || false
      );
      getTreatmentItems();
    }
  }, [userState]);

  const [getTreatmentItems] = useLazyQuery(TREATMENT_ITEMS, {
    variables: {
      hospitalId: userState?.hospitalHospitalAdminUsers[0].hospital.id
    },
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      setTreatmentItems(res.treatmentItems);
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [switchTreatmentItem] = useMutation(SWITCH_TREATMENT_ITEM, {
    onError(error) {
      notification({ label: error.message, type: 'error' });
      getTreatmentItems();
    }
  });

  const [deleteTreatmentItem] = useMutation(DELETE_TREATMENT_ITEM, {
    variables: {
      id: selectedItem?.id
    },
    onCompleted() {
      notification({ label: '접수항목이 삭제되었습니다.', type: 'success' });
      getTreatmentItems();
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  return treatmentItems !== undefined && linked !== undefined ? (
    <TabletItem
      linked={linked}
      treatmentItems={treatmentItems}
      setTreatmentItems={setTreatmentItems}
      setSelectedItem={setSelectedItem}
      modal={modal}
      setModal={setModal}
      updateItem={(form) => {
        switchTreatmentItem({
          variables: {
            option: form.tabletAcceptReceipt,
            id: form.id
          }
        });
      }}
      deleteItem={() => deleteTreatmentItem()}
    />
  ) : null;
};

export default TTabletItem;

const TREATMENT_ITEMS = gql`
  query treatmentItems {
    treatmentItems {
      id
      name
      description
      departmentId
      tabletUseQuestionnaire
      tabletAcceptReceipt
      roomId
      room {
        id
        roomName
      }
      department {
        name
      }
      questionnaires {
        questionnaireName
      }
    }
  }
`;

const SWITCH_TREATMENT_ITEM = gql`
  mutation switchTreatmentItem($option: Boolean!, $id: ID!) {
    switchTreatmentItem(option: $option, id: $id)
  }
`;

const DELETE_TREATMENT_ITEM = gql`
  mutation deleteTreatmentItem($id: ID!) {
    deleteTreatmentItem(id: $id)
  }
`;
