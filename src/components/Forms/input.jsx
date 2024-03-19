/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onchange
 */
export function Input ({placeholder, value, onchange}){
    return <div>
        <input type="text"
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={(e) =>onchange(e.target.value)}
        />
    </div>
}