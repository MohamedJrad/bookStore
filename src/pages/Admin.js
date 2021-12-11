import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import AddBook from '../components/AddBook'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1';
import Home from './Home.js'
const Admin = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <AmplifyAuthenticator>

                <Button type="primary" onClick={showModal}>
                    Add a New Book
                </Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <AddBook />
                </Modal>
                <Home />
                <AmplifySignOut></AmplifySignOut>
            </AmplifyAuthenticator>

        </div>


    );
};


export default Admin
