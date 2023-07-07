```
import toast, { Toaster } from 'react-hot-toast'; // ADD COMPONENT TO HTML <Toaster />
```
```
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // DEBUG
    useEffect(() => {
        if (isChecked) {
            toast.success("Is checked!");
        } else {
            toast.error("Is not checked!");
        }
    }, [isChecked]);
```
```
    return (
            <div className="age-restrictions">
                <Toaster />
                <input
                    // AGE RESTRICTIONS
                    id='email-okay'
                    type="checkbox"
                    name="years-old"
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                />
                <label htmlFor="okayToEmail">En az 18 yaşında olduğumu onaylıyorum</label>
            </div>
```
```
            <input
                // PARENTS EMAIL
                className="form-input"
                type="email"
                value={parentConfirmation}
                onChange={(e) => setParentConfirm(e.target.value)}
                required={!isChecked}
                placeholder="Veli email"
            />
```
