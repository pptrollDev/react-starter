import React, { useEffect, useState } from 'react';
import TabletItemForm from '../../organisms/TabletItemForm';
import { IDepartment, IError, IForm, IRoom } from '../../organisms/TabletItemForm/type';
import { useNotification } from '../../../hooks/Notification';
import { useRouter } from 'next/router';
import { useUserState } from '../../../context/User';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';

const TTabletItemForm = () => {
  const router = useRouter();
  const notification = useNotification();
  const userState = useUserState();
  const [id, setId] = useState<string>();
  const [linked, setLinked] = useState<boolean>();
  const [departments, setDepartments] = useState<IDepartment[]>();
  const [rooms, setRooms] = useState<IRoom[]>();
  const [form, setForm] = useState<IForm>({
    tabletAcceptReceipt: false,
    name: '',
    description: '',
    departmentId: '',
    tabletUseQuestionnaire: false,
    responseType: '',
    questionnaireName: '',
    answers: [''],
    roomId: ''
  });
  const [error, setError] = useState<IError>({
    name: undefined,
    departmentId: undefined,
    responseType: undefined,
    questionnaireName: undefined,
    answers: undefined,
    roomId: undefined
  });
  const [modal, setModal] = useState<IModalWithConfirm>({
    isVisible: false
  });

  useEffect(() => {
    if (id) getTreatmentItem();
  }, [id]);

  useEffect(() => {
    const tempId: any = router.query.id;

    if (userState) {
      setLinked(
        userState.hospitalHospitalAdminUsers[0].hospital.receiptHospitalConfiguration
          ?.chart.linked || false
      );
      setId(tempId || '');
      getDepartments();
      getRooms();
    }
  }, [userState]);

  const [getDepartments] = useLazyQuery(DEPARTMENTS, {
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      setDepartments(res.departments);
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [getRooms] = useLazyQuery(ROOMS, {
    fetchPolicy: 'no-cache',
    variables: {
      hospitalId: userState?.hospitalHospitalAdminUsers[0].hospital.id
    },
    onCompleted(res) {
      setRooms(res.rooms);
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [getTreatmentItem] = useLazyQuery(GET_TREATMENT_ITEM, {
    fetchPolicy: 'no-cache',
    variables: {
      id: id
    },
    onCompleted(res) {
      setForm({
        tabletAcceptReceipt: res.getTreatmentItem.tabletAcceptReceipt,
        name: res.getTreatmentItem.name,
        description: res.getTreatmentItem.description,
        departmentId: res.getTreatmentItem.departmentId,
        tabletUseQuestionnaire: res.getTreatmentItem.tabletUseQuestionnaire,
        responseType: res.getTreatmentItem.questionnaires[0]
          ? res.getTreatmentItem.questionnaires[0]?.responseType
          : '',
        questionnaireName: res.getTreatmentItem.questionnaires[0]
          ? res.getTreatmentItem.questionnaires[0].questionnaireName
          : '',
        answers: res.getTreatmentItem.questionnaires[0]
          ? res.getTreatmentItem.questionnaires[0].answers
          : [''],
        roomId: res.getTreatmentItem.roomId || ''
      });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [createTreatmentItem] = useMutation(CREATE_TREATMENT_ITEM, {
    onCompleted() {
      router.push('/tablet/item');
      notification({ label: '접수항목이 생성되었습니다.', type: 'success' });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [updateTreatmentItem] = useMutation(UPDATE_TREATMENT_ITEM, {
    onCompleted() {
      router.push('/tablet/item');
      notification({ label: '접수항목이 수정되었습니다.', type: 'success' });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  return id !== undefined &&
    linked !== undefined &&
    departments !== undefined &&
    rooms !== undefined ? (
    <TabletItemForm
      id={id}
      linked={linked}
      departments={departments}
      rooms={rooms}
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      modal={modal}
      setModal={setModal}
      submit={() => {
        const tempForm = {
          tabletAcceptReceipt: form.tabletAcceptReceipt,
          name: form.name,
          description: form.description,
          departmentId: form.departmentId,
          tabletUseQuestionnaire: form.tabletUseQuestionnaire,
          roomId: form.roomId,
          questionnaires: form.tabletUseQuestionnaire
            ? [
                {
                  questionnaireName: form.questionnaireName,
                  question: form.questionnaireName,
                  responseType: form.responseType,
                  answers: form.answers
                }
              ]
            : []
        };

        if (id)
          updateTreatmentItem({
            variables: {
              data: tempForm,
              id: id
            }
          });
        else
          createTreatmentItem({
            variables: {
              data: {
                ...tempForm
              }
            }
          });
      }}
    />
  ) : null;
};

export default TTabletItemForm;

const DEPARTMENTS = gql`
  query departments {
    departments {
      id
      name
    }
  }
`;

const ROOMS = gql`
  query rooms {
    rooms {
      id
      roomName
    }
  }
`;

const GET_TREATMENT_ITEM = gql`
  query getTreatmentItem($id: ID!) {
    getTreatmentItem(id: $id) {
      description
      departmentId
      department {
        id
      }
      hospitalId
      name
      roomId
      tabletAcceptReceipt
      questionnaires {
        answers
        questionnaireName
        responseType
      }
      tabletUseQuestionnaire
    }
  }
`;

const CREATE_TREATMENT_ITEM = gql`
  mutation createTreatmentItem($data: CreateReceiptTreatmentItemInput!) {
    createTreatmentItem(data: $data) {
      id
    }
  }
`;

const UPDATE_TREATMENT_ITEM = gql`
  mutation updateTreatmentItem($data: CreateReceiptTreatmentItemInput!, $id: ID!) {
    updateTreatmentItem(data: $data, id: $id)
  }
`;
