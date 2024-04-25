import React from 'react'
import {Modal, Space, Typography} from 'antd'
import CloseButton from '../buttons/closeButton'
import SaveButton from '../buttons/saveButton'
import DeleteButton from '../buttons/deleteButton'

const {Title} = Typography

export default function DictionaryModal({modalForm, setModalForm, model: Model}) {

  const isEdit = !!modalForm?.id
  const Form = Model.formComponent

  const onReset = () => {
    setModalForm(null)
  }

  const onEdit = async () => {
    const item = new Model(modalForm)
    await item.edit()
    onReset()
  }

  const onSave = async () => {
    const item = new Model(modalForm)
    await item.save()
    onReset()
  }

  const onDelete = async () => {
    const item = new Model(modalForm)
    await item.delete()
    onReset()
  }

  return (
    <Modal
      width={800}
      open={!!modalForm}
      closable={false}
      onCancel={() => {
        setModalForm(null)
      }}
      footer={[
        <Space key='footer'>
          <CloseButton onClick={onReset}/>
          {isEdit && <DeleteButton onClick={onDelete}/>}
          <SaveButton onClick={isEdit ? onEdit : onSave}/>
        </Space>
      ]}
    >
      <Title level={2}>
        {Model.caption}
      </Title>
      <Form 
        modalForm={modalForm} 
        setModalForm={setModalForm}
      />
    </Modal>
  )
}