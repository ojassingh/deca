import styles from '../styles/Login.module.scss';
import { FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navi from '../components/Navi';
import { Fragment } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient'

const signup = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false)
    const [studentNumber, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const signupHandler = async (email, password, name, studentNumber) => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.signUp(
                {
                  email: email,
                  password: password,
                },
                {
                  data: {
                    name: name,
                    studentNumber: studentNumber
                  }
                }
            )
            if (error) throw error
            alert('Check email for confirmation!')
            router.push('/')
            router.reload('/')
          } catch (error) {
            alert(error.error_description || error.message)
          } finally {
            setLoading(false)
          }
    }


    return(<Fragment>
        <Navi/>
        <div className={styles.container}>
        <div className='align-middle'>
        <h1 className={styles.title}>Hello, young padawan.</h1>
        <FormControl>

            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input className='text-black rounded-sm' id='email' type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <FormLabel htmlFor='text'>Full Name</FormLabel>
            <Input className='text-black rounded-sm' id='name' type='name'
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />

            <FormLabel htmlFor='text'>Student Number</FormLabel>
            <Input className='text-black rounded-sm' id='studentNumber' type='number'
                value={studentNumber}
                onChange={(e) => setNumber(e.target.value)} 
            />

            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input className='text-black rounded-sm' id='password' type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

        

        </FormControl>
        <br/>

        <motion.button className="outline outline-offset-2 outline-1 my-8 mr-5 rounded-full hover:bg-green-500 outline-white-500 px-10 py-3 ..."
              whileHover={{ translateY: -10}}
              onClick={(e) => {
              e.preventDefault()
              signupHandler(email, password, name, studentNumber)
            }} 
        > 
                Create an account
        </motion.button>
        <br/>
        
        <motion.button className='underline underline-offset-1 text-cyan-500'>
            <Link href='/login'>Already have an account? Log in.</Link>
        </motion.button>
       
        </div>
    </div>
    </Fragment>);
}

export default signup;