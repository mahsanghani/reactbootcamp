import React from "react"

class Card extends React.Component {
    static defaultProps = {
        cardColor: "blue",
        height: 100,
        width: 100
    }

    render() {
        const styles = {
            backgroundColor: this.props.cardColor,
            height: this.props.height,
            width: this.props.width
        }

        return (
            <div style={styles}></div>
        )
    }
}

// Challenge: Add prop types for the height and width. Make at least one of them required.
// Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".

Card.propTypes = {
    cardColor: PropTypes.oneOf(["red", "blue", "green", "purple"]).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number
}

Card.defaultProps = {
    height: 100,
    width: 100
}

export default Card
