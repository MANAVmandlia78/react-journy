import styles from './FoodInput.module.css'

function FoodInput({handleOnChange}) {

    return <input
        type="text"
        className={styles.FoodInput}
        placeholder='Enter Food item Here'
        onChange={
            handleOnChange
        }
    />
}

export default FoodInput;