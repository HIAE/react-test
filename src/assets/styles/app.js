import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    bgContainer: {
        backgroundImage: `url(${require('../images/bg.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '200px',
        backgroundPosition: 'top right'
    }
})

export default useStyles