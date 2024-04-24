import React, {useState, useEffect, useCallback} from 'react'
import {Modal, Skeleton, Space, Typography} from 'antd'
import CloseButton from '../buttons/closeButton'
import SaveButton from '../buttons/saveButton'
import AddButton from '../buttons/addButton'
import DeleteButton from '../buttons/deleteButton'

const {Title} = Typography

export default function DictionaryIndex({model: Model, table: Table, form: Form}) {

  const [data, setData] = useState([])
  const [modalForm, setModalForm] = useState(null)
  const [loading, setLoading] = useState(false)
  const isEdit = !!modalForm?.id

  const onReset = () => {
    setModalForm(null)
  }

  const onEdit = async () => {
    const item = new Model(modalForm)
    await item.edit()
  }

  const onSave = async () => {
    const item = new Model(modalForm)
    await item.save()
  }

  const getItems = useCallback(async () => {
    setLoading(true)
    const result = await Model.search()
    setData(result)
    setLoading(false)
  }, [Model])

  useEffect(() => {
    if (!modalForm) void getItems()
  }, [getItems, modalForm])

  return (
    <>
      <Title level={2}>
        {Model.indexCaption}
      </Title>
      {loading ? 
        <Skeleton /> :
        <>
          <AddButton
            style={{float: 'right'}}
            title='Создать'
            onClick={() => {
              setModalForm(Model.initialState)
            }}
          />
          <Table
            data={data}
            setModalForm={setModalForm} />
        </>}
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
            {isEdit && <DeleteButton />}
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
    </>
  )
}