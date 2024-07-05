"use client";
import { z, } from 'zod';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form";
import { zodResolver} from '@hookform/resolvers/zod'

type formData = {
    name: string;
    email: string;
    phoneNumber: number;
}


const Form = () => {

    const schema = z.object({
      name: z.string().min(2).max(30),
      email:z.string().email(),
      phoneNumber:z.number().min(10).max(12)
    })

    const{register , handleSubmit} = useForm<formData>({resolver: zodResolver(schema)})

    const submitData = (data:formData) => {
        console.log("Successful" , data);
    }

    
    // useEffect(() =>{
    //     localStorage.setItem('form', JSON.stringify(values));
    // }),[values];

    return (
        <>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Enter User Information
                        </Typography>
                        <form autoComplete='on'>
                            <Grid container spacing={1}>
                                <Grid xs={12} item>
                                    <TextField placeholder="Enter name" label="Name" variant="outlined" type="text" {...register("name")} fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" {...register("email")} fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" {...register("phoneNumber" , {valueAsNumber : true})} fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="secondary" fullWidth onSubmit={handleSubmit(submitData)}>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default Form