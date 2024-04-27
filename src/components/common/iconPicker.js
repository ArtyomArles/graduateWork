import {Button, Modal, Radio} from 'antd'
import React, {useEffect, useState} from 'react'
import {ICONS, ICON_NOT_FOUND} from './icons'

export default function IconPicker({icon, onChange, iconPack}) {
  const [collapsed, setCollapsed] = useState(false)
  const [currenctIcon, setCurrentIcon] = useState(<ICON_NOT_FOUND />)
  const handleOk = () => {
    setCollapsed(collapsed => !collapsed)
  }

  useEffect(() => {
    const _icon = ICONS.find((item) => item.name === icon)
    setCurrentIcon(_icon?.icon || <ICON_NOT_FOUND />)
  }, [icon])

  return (
    <>
      <div style={{fontSize: '35px', display: 'flex', alignItems: 'center', gap: '5px'}}>
        {currenctIcon}
        <Button onClick={handleOk}>
          Выбрать иконку
        </Button>
      </div>
      <Modal 
        open={collapsed}
        title='Выбор иконки'
        onCancel={handleOk}
        footer={
          <Button onClick={handleOk}>Ок</Button>
        }
      >
        <Radio.Group
          buttonStyle='solid'
          defaultValue={icon}
          size='large'
          onChange={onChange}
        >
          {ICONS.map(item =>
            <Radio.Button
              key={item.name}
              value={item.name}
            >
              {item.icon()}
            </Radio.Button>
          )}
        </Radio.Group>
      </Modal>
    </>
  )
}