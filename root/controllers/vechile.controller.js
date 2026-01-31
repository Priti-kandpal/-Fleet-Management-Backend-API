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
        });
    }
const {data, error}=await 
supabase.from('vechiles').insert([{name, registration_number, allowed_passengers, rate_per_km, owner_id}]);

if(error)return
res.status(400).json1({error:error.message});

res.status(201).json({message:"Vechile Added",data});
};

exports.assignDriver =async (req, res)=>
{
    const{driver_id}=req.body;
    const{vechileId}=req.params;
    await supabase
    .from('vechiles')
        .update({driver_id})
            .eq('id',vechileId);

        res.json({message:"Driver assigned"});
    
};