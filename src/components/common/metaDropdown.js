import {Select} from 'antd'
import React, {useEffect, useState, useCallback} from 'react'

const {Option} = Select

export default function MetaDropdown ({model: Model, ...props}) {

  const [options, setOptions] = useState([])
  const [itemsCollection, setItemsCollection] = useState([])
  const [selectedValue, setSelectedValue] = useState({})
  const [loading, setLoading] = useState(false)

  const getOptions = useCallback(async () => {
    setLoading(true)
    const result = await Model.search()
    setItemsCollection(result)
    const _options = result.map(item => ({value: item.id, label: item.title}))
    setOptions(_options)
    setLoading(false)
  }, [Model])

  useEffect(() => {
    getOptions()
  }, [getOptions])
  return (
    <Select
      allowClear
      loading={loading}
      value={selectedValue}
      {...props}
      onChange={(value) => {
        setSelectedValue(value)
        props.onChange(value, itemsCollection.find(element => element.id === value))
      }}
    >
      {options.map(option => 
        <Option
          key={option.value}
          value={option.value}
          label={option.label}
        >
          {option.label}
        </Option>)}
    </Select>
  )
}