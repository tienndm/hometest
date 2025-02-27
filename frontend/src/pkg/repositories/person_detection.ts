import { PersonDetectionResult } from '@/shared/models/person_detection_result';
import { UploadFile } from '@/shared/models/upload_file';

export async function uploadImageForDetection(file: UploadFile): Promise<PersonDetectionResult> {
  const formData = new FormData();
  formData.append('img', file);

  const response = await fetch('http://localhost:8632/api/v1/core', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  const data = await response.json();
  return {
    personCount: data.data.personCount,
    message: data.message,
    image: `data:image/jpeg;base64,${data.data.image}`
  };
}
