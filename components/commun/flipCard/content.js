import carPicture from "../images/carPicture.jpg"





const content = [
  {
    id: 89,
    csName:"TARHI",
    responsibility:"amine",
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
      body:false,
      divers:{
        newOne:false,
        diversNote:"divers note",
      },
      EstimatedTime:"EstimatedTime",
    },
    
  
  },
  {
    id: 39,
    csName:"TARHI",
    responsibility:"yassine",
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
      deadLineTime:"17:00",
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
    
  ];
  
  export default content;
  