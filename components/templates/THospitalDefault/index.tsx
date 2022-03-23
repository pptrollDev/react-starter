import React, { useEffect, useState } from 'react';
import HospitalDefault from '../../organisms/HospitalDefault';
import { IDepartment, IError, IForm } from '../../organisms/HospitalDefault/type';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useUserState } from '../../../context/User';
import { useNotification } from '../../../hooks/Notification';
import { ITHospitalDefault } from './type';

const THospitalDefault = ({ modalAddress, setModalAddress }: ITHospitalDefault) => {
  const notification = useNotification();
  const userState = useUserState();
  const [departments, setDepartments] = useState<IDepartment[]>();
  const [form, setForm] = useState<IForm>({
    id: '',
    name: '',
    aliasName: '',
    address: '',
    aroundStationInformation: '',
    phone: '',
    hospitalDepartments: [],
    hospitalTags: [],
    hospitalDivision: ''
  });
  const [error, setError] = useState<IError>({
    aliasName: undefined,
    address: undefined,
    phone: undefined,
    hospitalDepartments: undefined
  });

  useEffect(() => {
    if (userState) {
      getDepartments();
      getHospital();
    }
  }, [userState]);

  useEffect(() => {
    if (
      modalAddress?.address &&
      modalAddress?.addressDetail &&
      modalAddress?.isVisible === false
    )
      setForm({
        ...form,
        address: modalAddress.address + ' ' + modalAddress.addressDetail
      });
  }, [modalAddress]);

  const [getDepartments] = useLazyQuery(DEPARTMENTS, {
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      setDepartments(res.departments);
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [getHospital] = useLazyQuery(HOSPITAL, {
    fetchPolicy: 'no-cache',
    variables: {
      id: userState?.hospitalHospitalAdminUsers[0].hospital.id
    },
    onCompleted(data) {
      setForm({
        ...data.hospital,
        hospitalDepartments: data.hospital.hospitalDepartments.map(
          (hospitalDepartment: any) => hospitalDepartment.department
        )
      });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [updateHospital] = useMutation(UPDATE_HOSPITAL, {
    onCompleted(data) {
      getHospital();
      notification({ label: '입력하신 정보가 적용되었습니다.', type: 'success' });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  return departments !== undefined ? (
    <HospitalDefault
      departments={departments}
      setModalAddress={setModalAddress}
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      submit={() => {
        const { id, name, hospitalDepartments, hospitalTags, ...hospitalForm } = form;
        updateHospital({
          variables: {
            id: id,
            updateHospitalInput: {
              ...hospitalForm,
              tagNames: hospitalTags?.map((hospitalTag) => hospitalTag.name),
              departmentIds: hospitalDepartments?.map(
                (hospitalDepartment) => hospitalDepartment.id
              )
            }
          }
        });
      }}
    />
  ) : null;
};

export default THospitalDefault;

const DEPARTMENTS = gql`
  query departments {
    departments {
      id
      name
    }
  }
`;

const HOSPITAL = gql`
  query Hospital($id: ID!) {
    hospital(id: $id) {
      address
      aroundStationInformation
      hospitalDepartments {
        department {
          id
          name
        }
      }
      hospitalTags {
        name
      }
      id
      name
      aliasName
      phone
      hospitalDivision
    }
  }
`;

const UPDATE_HOSPITAL = gql`
  mutation UpdateHospital($id: ID!, $updateHospitalInput: UpdateHospitalInput!) {
    updateHospital(id: $id, data: $updateHospitalInput)
  }
`;
