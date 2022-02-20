

const noCar = {
    id: 0,
    whereIsTheCar:"Pending",
    responsabilitiesHistory:[{name:"",startingTime:""}],
    affectationChefAtelier:["Amine","yassine","TARHI"],
    responsability:"TARHI",
    startingTime:"startedAt text to wrap mthode check multiple line stop reading",
    note: [
      {
        sender: "NOTE DE TEXT",
        senderTime: "SENDER TIME",
        noteText: "MY TEXT note",
      },
    ],
    photo: {
      carPhoto: "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9",
      createdaT: "created at: ",
    },
  
    deliveryTimeAdjustment: [
      {
        deadLineTime: "17:00",
        deadLineDay: "Lundi 07/08/22",
        who: "Said",
        when: "now",
        why: "Explication",
        isCustomerInformed: "Non",
      },
    ],
  
    emoji: "😅😅😅😅😅😅😅😅😅😅",
    carTasks: {
      myService: true,
      mecanical: true,
      electrical: true,
      body: true,
      divers: {
        pneus: true,
        plaquettes: true,
        batterie: true,
        lavage:true,
        divers: {
          newOne: false,
          diversNote: "divers note",
        },
      },
      EstimatedTime: "EstimatedTime",
    },
  };


function carsReducer(state = noCar, action) {
    switch (action.type) {
      case 'ADD_NEW_CAR': {
        //getContent from firebase
        return {} //MainCar void
      }
      case 'GET_CARS': {
        const { index } = action.payload
        return state.map((todo, i) => {
          if (i !== index) return todo
  
          return {
            ...todo,
            completed: !todo.completed,
          }
        })
      }
      case 'REMOVE_TODO': {
        return state.filter((todo, i) => i !== action.payload.index)
      }
      default:
        return state
    }
  }