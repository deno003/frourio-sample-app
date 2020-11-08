import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'

const MainDrawer = (props: any) => {
  const { handleDrawerClose } = props

  return (
    <Drawer variant="permanent">
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List></List>
    </Drawer>
  )
}

export default MainDrawer
