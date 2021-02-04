import { Upload, message } from 'antd';
const { Dragger } = Upload;

const UploadComponent = () => {
	const props = {
		name: 'imageFile',
		multiple: false,
		action: '/upload',
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		},
		onChange(info) {
			const { status } = info.file;
			if (status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};
	return (
		<Dragger {...props}>
			<p className='ant-upload-drag-icon'></p>
			<p className='ant-upload-text'>Click or drag file to this area to upload</p>
			<p className='ant-upload-hint'>
				Support for a single or bulk upload. Strictly prohibit from uploading
				company data or other band files
			</p>
		</Dragger>
	);
};

export default UploadComponent;
