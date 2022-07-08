import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Account from '../components/Account'
import { useRouter } from 'next/router'
const sesh = supabase.auth.session()

export default function account({ session }) {
  const router = useRouter();
  if (!!sesh){
    return(<Account session={sesh}/>)
  }router.push('/login');
}
