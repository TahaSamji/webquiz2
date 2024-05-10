import { TextField, Button, MenuItem, Select, InputLabel } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            social_auth_type: ''
        },
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('email', values.email);
            formData.append('password', values.password);
            formData.append('social_auth_type', values.social_auth_type);
            const response = await axios.post(
                'https://sandbox.practical.me/api/login',
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                });
            if (response.data.message === "User login successfully.") {
                NotificationManager.success(response.data.message, "Success!");
                dispatch(login({token : response.data.data.auth_token}))
                nav('/userpage');
            }
            else {
                NotificationManager.error(response.data.message, "Error!");
            }
        },
    });

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                    <TextField onChange={formik.handleChange} value={formik.values.email} name="email" label="Email" variant="outlined" />
                    <TextField type="password" onChange={formik.handleChange} value={formik.values.password} name="password" label="Password" variant="outlined" />
                    <InputLabel id="demo-simple-select-label">Social Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="social_auth_type"
                        value={formik.values.social_auth_type}
                        label="Social Type"
                        onChange={formik.handleChange}
                    >
                        <MenuItem value={'normal'}>Normal</MenuItem>
                        <MenuItem value={'google'}>Google</MenuItem>
                        <MenuItem value={'facebook'}>Facebook</MenuItem>
                    </Select>
                    <br />
                    <Button type="submit" variant="contained">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;