const { createClient } = require('@supabase/supabase-js');

// Reemplaza estos dos valores con los de tu panel de Supabase
const SUPABASE_URL = 'https://dtinbqdmqdhjkvjpigpx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_pxfNcd-Kjwuet4jfl6t9Gw_LrRoGXdP';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;