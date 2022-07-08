import { useState, useEffect, Fragment } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import styles from '../styles/Account.module.scss';
import Navi from './Navi';

export default function Account(session) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState(null)
  const [studentNumber, setNumber] = useState(null)

  // useEffect(() => {
  //   getProfile()
  // }, [session])

  // async function getProfile() {
  //   try {
  //     setLoading(true)
  //     const user = supabase.auth.user()

  //     let { data, error, status } = await supabase
  //       .from('profiles')
  //       .select(`name`)
  //       .eq('id', user.id)
  //       .single()

  //     if (error && status !== 406) {
  //       throw error
  //     }

  //     if (data) {
  //       setName(data.name)
  //     }
  //   } catch (error) {
  //     alert(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // async function updateProfile({ name, studentNumber }) {
  //   try {
  //     setLoading(true)
  //     const user = supabase.auth.user()

  //     const updates = {
  //       id: user.id,
  //       name,
  //       studentNumber,
  //       updated_at: new Date(),
  //     }

  //     let { error } = await supabase.from('profiles').upsert(updates, {
  //       returning: 'minimal', // Don't return the value after inserting
  //     })

  //     if (error) {
  //       throw error
  //     }
  //   } catch (error) {
  //     alert(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (<Fragment>
  <Navi/>
        {/* <button className="button block" onClick={() => {
          supabase.auth.signOut()
          router.push('/')
        }}>
          Sign Out
        </button> */}
    </Fragment>
  );
}
