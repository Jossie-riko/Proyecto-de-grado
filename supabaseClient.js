import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.116.0';

const SUPABASE_URL = 'https://dtinbqdmqdhjkvjpigpx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_pxfNcd-Kjwuet4jfl6t9Gw_LrRoGXdP';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabase };