import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://visjzvscdxrpkrbkaibo.supabase.co'
const SUPABASE_KEY = 'sb_publishable_nKdIO7C9yw0xdmtji6HJEA_L7Tbjjw4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

/* ── AUTH ─────────────────────────────────────────────── */

export async function registerUser({ name, email, password }) {
  return supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  })
}

export async function loginUser({ email, password }) {
  return supabase.auth.signInWithPassword({ email, password })
}

export async function logoutUser() {
  return supabase.auth.signOut()
}

export async function getSession() {
  const { data } = await supabase.auth.getSession()
  return data.session
}

/* ── REPORTS ───────────────────────────────────────────── */

export async function saveReport({ userName, userEmail, faculty, assessment, report }) {
  return supabase.from('career_reports').insert({
    user_name:  userName,
    user_email: userEmail || null,
    faculty:    faculty.name,
    assessment,
    report,
  }).select().single()
}

export async function getReportsByEmail(email) {
  return supabase
    .from('career_reports')
    .select('*')
    .eq('user_email', email)
    .order('created_at', { ascending: false })
}
