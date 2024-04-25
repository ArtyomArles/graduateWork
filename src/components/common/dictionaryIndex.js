import React, {useState, useEffect, useCallback} from 'react'
import {Skeleton, Typography} from 'antd'
import AddButton from '../buttons/addButton'
import DictionaryModal from './dictionaryModal'

const {Title} = Typography

export default function DictionaryIndex({model: Model, table: Table}) {

  const [data, setData] = useState([])
  const [modalForm, setModalForm] = useState(null)
  const [loading, setLoading] = useState(false)

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
            setModalForm={setModalForm}
            pagination={{pageSizeOptions: [5, 10, 20, 50, 100], showSizeChanger: true}} 
          />
        </>}
      <DictionaryModal
        model={Model}
        modalForm={modalForm}
        setModalForm={setModalForm}
      />
    </>
  )
}