import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import { mainListItems } from '~/components/mainListItems'

const MainDrawer = (props: any) => {
  const { open, handleDrawerClose } = props

  return (
    <Drawer variant="permanent" open={open}>
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  )
}

MainDrawer.prototype = {
  handleDrawerClose: PropTypes.func
}

export default MainDrawer
