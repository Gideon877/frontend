export const uploadData = async (formData: FormData) => {
    const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
    }

    return response.json();
};