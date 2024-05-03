import React from 'react'
import {Modal, Space, Typography, Divider} from 'antd'
import CloseButton from '../buttons/closeButton'
import SaveButton from '../buttons/saveButton'
import DeleteButton from '../buttons/deleteButton'

const {Title} = Typography

export default function DictionaryModal({setNeedRefresh, modalForm, setModalForm, model: Model}) {

  const isEdit = !!modalForm?.id
  const Form = Model?.formComponent

  const onReset = () => {
    setModalForm(null)
  }

  const onEdit = async () => {
    const item = new Model(modalForm)
    await item.edit()
    onReset()
    setNeedRefresh(true)
  }

  const onSave = async () => {
    const item = new Model(modalForm)
    await item.save()
    onReset()
    setNeedRefresh(true)
  }

  const onDelete = async () => {
    const item = new Model(modalForm)
    await item.delete()
    onReset()
    setNeedRefresh(true)
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
          <CloseButton onClick={onReset} />
          {isEdit && !Model?.readOnly && 
            <DeleteButton onClick={onDelete} />}
          {!Model?.readOnly &&
            <SaveButton onClick={isEdit ? onEdit : onSave} />}
        </Space>
      ]}
    >
      <Title level={4}>
        {Model?.caption}
      </Title>
      {isEdit ? 'Редактирование записи' : 'Создание записи'}
      <Divider />
      {Model &&
        <Form
          modalForm={modalForm} 
          setModalForm={setModalForm}
          setNeedRefresh={setNeedRefresh}
        />}
    </Modal>
  )
}