const supabase=require('../config/supabase');

exports.createTrip=async(req, res)=>{
    const{customer_id, vechile_id, passengers, distance_km}=req.body;

    const{data:vechile}=await supabase
    .from('vechiles')
    .select('*')
    .eq('id',vechile_id)
    .single();

    if(!vechile.is_available){
        return res.status(400).json({message:
            "vechile not available"
        });
    }
if(passengers>vechile.allowed_passengers){
     return res.status(400).json({message:
         "passenger limit exceeded"});
}
await supabase
    .from('vechiles')
        .update({is_available:false})
            .eq('id',vechile_id);

    


const {data}=await 
supabase.from('trips').insert([{customer_id, vechile_id, passengers, distance_km}]);

res.status(201).json({message:"Trip created",data});
};

exports.endTrip =async (req, res)=>
{
    const{data:trip}=await
    supabase.from('trips').select('*').eq('id',tripId).single();

  const {data:vechile}=await
  supabase.from('vechiles').select('*').eq('id',trip.vechile_id).single();

  const cost=trip.distance_km* vechile.rate_per_km;


    await supabase
    .from('trips')
        .update({is_completed:true,trip_cost:cost})
            .eq('id',tripId);
    await supabase
    .from('vechiles')
        .update({is_available:true,})
            .eq('id',vechile.id);
        res.json({message:"Trip ended",cost});
    
};
