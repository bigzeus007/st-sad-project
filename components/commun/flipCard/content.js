import carPicture from "../images/carPicture.jpg"
import { techList } from "../../specific/tech/techList";



const {listTech}=techList;

const content = [
  {
    id: 89,
    whereIsTheCar:"Amine",
    csName:"TARHI", // a supprimer
    responsibility:"Amine",
    responsabilitiesHistory:[{name:"",startingTime:""}],
    affectationChefAtelier:["Amine","yassine","TARHI"],
    note:[{
      sender:"NOTE DE TEXT",
      senderTime:"note created at: ",
      noteText:"MY TEXT",
    }],
    photo:{
      carPhoto: carPicture,
      createdaT:"created at: ",
    },
   
    deliveryTimeAdjustment:[{
      deadLineTime:"17:45",
      deadLineDay:"Lundi 07/08/22",
      who:"Said",
      when:"now",
      why:"Explication",
      isCustomerInformed:"Non", }],
  
    emoji: "😅🤩😛😅🤩😛",
    carTasks:{
  
      myService:true,
      mecanical:false,
      electrical:false,
      body:false,
      divers:{
        newOne:true,
        diversNote:"divers note",
      },
      EstimatedTime:"EstimatedTime",
    },
    
  
  },
  {
    id: 39,
    whereIsTheCar:"E-Parking",
    csName:"TARHI",
    responsibility:"yassine",
    affectationChefAtelier:["Amine","yassine","TARHI"],
    startingTime:"starvrgtedAt ",
    note:[{
      sender:"NOTE DE TEXT",
      senderTime:"note created at: ",
      noteText:"MY TEXT testing said",
    },
    {
      sender:"NOTE DE TEXT 2",
      senderTime:"note created at: ",
      noteText:"MY TEXT testing amine",
    }
  ],
    photo:{
      carPhoto: carPicture,
      createdaT:"created at: ",
    },
   
    deliveryTimeAdjustment:[{
      deadLineTime:"00:00",
      deadLineDay:"Lundi 07/08/22",
      who:"Said",
      when:"now",
      why:"Explication",
      isCustomerInformed:"Non", }],
  
    emoji: "😅🤩😅🤩😛😛😅🤩😛",
    carTasks:{
  
      myService:true,
      mecanical:true,
      electrical:false,
      body:false,
      divers:{
        newOne:false,
        diversNote:"divers note",
      },
      EstimatedTime:"EstimatedTime",
    },
    
  
  },
  {
    id: 887,
    csName:"TARHI",
    whereIsTheCar:"E-Parking",
    responsibility:"yassine",
    startingTime:"staefegoedAt ",
    affectationChefAtelier:["JAWAD","yassine","TARHI"],
    note:[{
      sender:"NOTE DE TEXT",
      senderTime:"note created at: ",
      noteText:"MY TEXT",
    }],
    photo:{
      carPhoto: carPicture,
      createdaT:"created at: ",
    },
   
    deliveryTimeAdjustment:[{
      deadLineTime:"55:00",
      deadLineDay:"Lundi 07/08/22",
      who:"Said",
      when:"now",
      why:"Explication",
      isCustomerInformed:"Non", }],
  
    emoji: "😅  😛   😛",
    carTasks:{
  
      myService: true,
      mecanical:false,
      electrical:true,
      body:false,
      divers:{
        newOne:false,
        diversNote:"divers note",
      },
      EstimatedTime:"EstimatedTime",
    },
    
  
  },
  {
    id: 819,
    csName:"TARHI",
    whereIsTheCar:"E-Parking",
    responsibility:"amine",
    startingTime:"star4454tedAt ",
    affectationChefAtelier:["Amine"],
    note:[{
      sender:"NOTE DE TEXT",
      senderTime:"note created at: ",
      noteText:"MY TEXT",
    }],
    photo:{
      carPhoto: carPicture,
      createdaT:"created at: ",
    },
   
    deliveryTimeAdjustment:[{
      deadLineTime:"29:00",
      deadLineDay:"Lundi 07/08/22",
      who:"Said",
      when:"now",
      why:"Explication",
      isCustomerInformed:"Non", }],
  
    emoji: "😅🤩😛😅🤩😛",
    carTasks:{
  
      myService:false,
      mecanical:true,
      electrical:false,
      body:true,
      divers:{
        newOne:false,
        diversNote:"divers note",
      },
      EstimatedTime:"EstimatedTime",
    },
    
  
  },
  {
    id: 71,
    csName:"TARHI",
    whereIsTheCar:"Pending",
    responsibility:"Amine",
    startingTime:"starkd7d7dtedAt ",
    affectationChefAtelier:["Amine","yassine"],
    note:[{
      sender:"NOTE DE TEXT",
      senderTime:"note created at: ",
      noteText:"MY TEXT",
    }],
    photo:{
      carPhoto: carPicture,
      createdaT:"created at: ",
    },
   
    deliveryTimeAdjustment:[{
      deadLineTime:"17:00",
      deadLineDay:"Lundi 07/08/22",
      who:"Said",
      when:"now",
      why:"Explication",
      isCustomerInformed:"Non", }],
  
    emoji: "😅🤩😛😅🤩😛",
    carTasks:{
  
      myService:false,
      mecanical:false,
      electrical:false,
      body:true,
      divers:{
        newOne:false,
        diversNote:"divers note",
      },
      EstimatedTime:"EstimatedTime",
    },
    
  
  },
  {
    id: 89,
    csName:"TARHI",
    whereIsTheCar:"Pending",
    responsibility:"Amine",
    affectationChefAtelier:["Amine","yassine"],
    note:[{
      sender:"NOTE DE TEXT",
      senderTime:"note created at: ",
      noteText:"MY TEXT",
    }],
    photo:{
      carPhoto: carPicture,
      createdaT:"created at: ",
    },
   
    deliveryTimeAdjustment:[{
      deadLineTime:"21:00",
      deadLineDay:"Lundi 07/08/22",
      who:"Said",
      when:"now",
      why:"Explication",
      isCustomerInformed:"Non", }],
  
    emoji: "😅🤩😛😅🤩😛",
    carTasks:{
  
      myService:false,
      mecanical:false,
      electrical:true,
      body:false,
      divers:{
        newOne:false,
        diversNote:"divers note",
      },
      EstimatedTime:"EstimatedTime",
    },
    
  
  },
  {
    id: 41,
    csName:"TARHI",
    whereIsTheCar:"Pending",
    responsibility:"Amine",
    affectationChefAtelier:["Amine","yassine"],
    note:[{
      sender:"NOTE DE TEXT",
      senderTime:"note created at: ",
      noteText:"MY TEXT",
    }],
    photo:{
      carPhoto: carPicture,
      createdaT:"created at: ",
    },
   
    deliveryTimeAdjustment:[{
      deadLineTime:"15:00",
      deadLineDay:"Lundi 07/08/22",
      who:"Said",
      when:"now",
      why:"Explication",
      isCustomerInformed:"Non", }],
  
    emoji: "😅🤩😛😅🤩😛",
    carTasks:{
  
      myService:true,
      mecanical:false,
      electrical:false,
      body:false,
      divers:{
        newOne:false,
        diversNote:"divers note",
      },
      EstimatedTime:"EstimatedTime",
    },
    
  
  },
    
  ];
  
  export default content;
  