import PropTypes from 'prop-types';


function Loading (props) {
    const { name } = props;
    // const { loadCount, maxCount } = props;

    return (
        <div>
            <i> Hello {name}! </i>
            {/* <i>Loading components....{loadCount}/{maxCount}</i> */}
        </div>
    )

}


Loading.propTypes = {
    name: PropTypes.string.isRequired,
    loadCount: PropTypes.number,
    maxCount: PropTypes.number
}


export default Loading;