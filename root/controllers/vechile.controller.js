const supabase =require('../config/supabase');

exports.addVechile=async (req ,res)=>{
    const {owner_id, name, registration_id, allowed_passengers, rate_per_km}=req.body;

    const {data:owner}=await supabase
    .from('users')
    .select('*')
    .eq('id',owner_id)
    .single();

    if(owner.role !=='owner'){
        return res.status(403).json({message:
            "Only owners can add vechile"
        })
    }

}