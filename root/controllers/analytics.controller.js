const supabase= require('../config/supabase');

exports.getAnalytics = async(req. res)=>
{
const customers=await 
supabase.from('users').select('*',{count:'exact'}).eq('role','customer');

const owners = await 
supabase.from('users').select('*',{count:'exact'}).eq('role','owner');
const drivers= await
}