export const uploadImages = async (
  files: File[],
  urls: { uploadUrl: string; downloadUrl: string }[]
) => {
  try {
    const promises: any = [];
    urls.forEach((url, index) => {
      promises.push(
        fetch(url.uploadUrl, {
          method: 'PUT',
          body: files[index],
          headers: {
            'Content-Type': files[index].type
          }
        })
      );
    });

    await Promise.all(promises);

    return urls.map((url) => url.downloadUrl);
  } catch (error) {
    console.error(error);
  }
};
