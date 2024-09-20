export const Checkbox = ({ isChecked, label, checkHandler, id }) => {
    console.log({ isChecked })
    return (
      <div>
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={isChecked}
          onChange={checkHandler}
        />
        <label htmlFor={`checkbox-${id}`}>{label}</label>
      </div>
    )
  }