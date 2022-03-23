import { gql, useMutation } from '@apollo/client';
import { useNotification } from '../Notification';
import { useUserState } from '../../context/User';
import { useEffect, useState } from 'react';
import { uploadImages } from '../../utils/upload';

export function useUploadImages(files: File[] | undefined) {
  const notification = useNotification();
  const userState = useUserState();
  const [imageUrls, setImageUrls] = useState<string[]>();
  const [getUploadUrl] = useMutation(CREATE_IMAGE_UPLOAD_URLS, {
    fetchPolicy: 'no-cache',
    onCompleted(data) {
      if (files)
        uploadImages(files, data.createImageUploadUrls).then((result) => {
          setImageUrls(result);
        });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  useEffect(() => {
    if (files)
      getUploadUrl({
        variables: {
          hospitalId: userState?.hospitalHospitalAdminUsers[0].hospital.id,
          count: files.length
        }
      });
  }, [files]);

  return [imageUrls];
}

const CREATE_IMAGE_UPLOAD_URLS = gql`
  mutation createImageUploadUrls($hospitalId: Int!, $count: Int!) {
    createImageUploadUrls(hospitalId: $hospitalId, count: $count) {
      uploadUrl
      downloadUrl
    }
  }
`;
