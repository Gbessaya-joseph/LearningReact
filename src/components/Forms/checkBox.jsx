export function CheckBox ({checked, onchange, label, id}){
    return <div className="form-check">
        <input type="checkbox"
                id={id}
                className="fom-check-input"
                checked={checked}
                onChange={(e) => onchange(e.target.checked)}
        />
        <label htmlFor={id} className="form-checked-label">{label}</label>
    </div>
}