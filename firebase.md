### Create user
```
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';
```
```
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                const idToken = await user.getIdToken();
                console.log("idToken - ", idToken);
                console.log(user);
                sendEmailVerification(user)
                navigate("/login")
                alert("Please check your email for verification")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });

    }
```
