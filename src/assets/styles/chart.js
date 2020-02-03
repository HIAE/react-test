import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    inputDate: {
        marginRight: 40,
        marginBottom: 15,
        width: 'auto',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
            marginRight: 0,
        }
    }
}))

export default useStyles