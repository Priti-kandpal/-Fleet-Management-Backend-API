const {createClient}=require('@supabase/supabase-js');

const supbaseUrl=process.env.SUPABASE_URL;
const supabaseKey=process.env.SUPABASE_KEY;

const supabase=createClient(supbaseUrl,supabaseKey);

module.exports=supabase;