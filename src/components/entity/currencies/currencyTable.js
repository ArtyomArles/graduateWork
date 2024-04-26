import React from 'react'
import {Table, Typography} from 'antd'
import {getDataWithKeys} from 'src/helpers/getDataWithKeys'
import {ICONS, ICON_NOT_FOUND} from 'src/components/common/icons'

export default function CurrencyTable({data, setModalForm, ...props}) {

  const columns = [
    {
      title: 'Код',
      dataIndex: 'code',
      key: 'code',
      align: 'center'
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      render: (title, record) => <Typography.Link onClick={() => {
        setModalForm(record)
      }}>{title}</Typography.Link>
    },
    {
      title: 'Курс валюты',
      dataIndex: 'currencyRate',
      key: 'currencyRate'
    },
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country'
    },
    {
      title: 'Иконка',
      dataIndex: 'icon',
      key: 'icon',
      render: (icon) => {
        const returnedIcon = ICONS.find(_icon => _icon.name === icon)
        return returnedIcon ? <returnedIcon.icon /> : <ICON_NOT_FOUND />
      }
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description'
    }
  ]

  return (
    <Table
      columns={columns}
      dataSource={getDataWithKeys(data)}
      {...props}
    />
  )
}