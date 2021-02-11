import { Upload } from 'antd';
const { Dragger } = Upload;

const UploadComponent = ({ props }) => {
	return (
		<Dragger {...props}>
			<p className='ant-upload-drag-icon'></p>
			<p className='ant-upload-text'>Click or drag file to this area to upload</p>
			<p className='ant-upload-hint'>Support for a single upload.</p>
		</Dragger>
	);
};

export default UploadComponent;
