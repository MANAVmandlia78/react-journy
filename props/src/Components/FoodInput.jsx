import styles from './FoodInput.module.css'

function FoodInput({handleKeyDown}) {

    return <input
        type="text"
        className={styles.FoodInput}
        placeholder='Enter Food item Here'
        onKeyDown={
            handleKeyDown
        }
    />
}

export default FoodInput;