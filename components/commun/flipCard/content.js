import carPicture from "../../../public/images/carPicture.jpg";
import { techList } from "./techList";

const { listTech } = techList;
const initialTech = [
  {
    id: 0,
    nom: "TARHI",
    email: "tarhisaid@gmail.com",
    job: "PISTEUR",
    active: true,
    atelierAffectation: "E-PARKING",
    availability: true,
    doing: 1,
    workingDayDuration: "5h",
    enAttente: 0,
    termines: 0,
  },
];

const initialCar = {
  id: 0,
  whereIsTheCar: "Pending",
  responsabilitiesHistory: [{ name: "", startingTime: "" }],
  affectationChefAtelier: ["Amine", "yassine", "TARHI"],
  responsability: "TARHI",
  startingTime:
    "startedAt text to wrap mthode check multiple line stop reading",
  note: [
    {
      sender: "NOTE DE TEXT",
      senderTime: "SENDER TIME",
      noteText: "MY TEXT note",
    },
  ],
  photo: {
    carPhoto:
      "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9",
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
    express: true,
    mecanique: true,
    diagnostic: true,
    carrosserie: true,
    divers: {
      pneus: true,
      plaquettes: true,
      batterie: true,
      lavage: true,
      divers: {
        newOne: false,
        diversNote: "divers note",
      },
    },
    EstimatedTime: "EstimatedTime",
  },
};

const content = [
  {
    id: 89,
    whereIsTheCar: "TARHI",
    csName: "TARHI", // a supprimer
    responsibility: "TARHI",
    responsabilitiesHistory: [{ name: "", startingTime: "" }],
    affectationChefAtelier: ["Amine", "yassine", "TARHI"],
    note: [
      {
        sender: "NOTE DE TEXT",
        senderTime: "note created at: ",
        noteText: "MY TEXT",
      },
    ],
    photo: {
      carPhoto:
        "https://firebasestorage.googleapis.com/v0/b/one-touch-work.appspot.com/o/files%2Fimages%20(2).png?alt=media&token=c0ce54d8-4f47-4bd2-b997-776f8f6b65a9",
      createdaT: "created at: ",
    },

    deliveryTimeAdjustment: [
      {
        deadLineTime: "17:45",
        deadLineDay: "Lundi 07/08/22",
        who: "Said",
        when: "now",
        why: "Explication",
        isCustomerInformed: "Non",
      },
    ],

    emoji: "😅🤩😛😅🤩😛",
    carTasks: {
      express: true,
      mecanique: false,
      diagnostic: false,
      carrosserie: false,
      divers: {
        newOne: true,
        diversNote: "divers note",
      },
      EstimatedTime: "EstimatedTime",
    },
  },
  {
    id: 39,
    whereIsTheCar: "E-Parking",
    csName: "TARHI",
    responsibility: "yassine",
    affectationChefAtelier: ["Amine", "yassine", "TARHI"],
    startingTime: "starvrgtedAt ",
    note: [
      {
        sender: "NOTE DE TEXT",
        senderTime: "note created at: ",
        noteText: "MY TEXT testing said",
      },
      {
        sender: "NOTE DE TEXT 2",
        senderTime: "note created at: ",
        noteText: "MY TEXT testing amine",
      },
    ],
    photo: {
      carPhoto: carPicture,
      createdaT: "created at: ",
    },

    deliveryTimeAdjustment: [
      {
        deadLineTime: "00:00",
        deadLineDay: "Lundi 07/08/22",
        who: "Said",
        when: "now",
        why: "Explication",
        isCustomerInformed: "Non",
      },
    ],

    emoji: "😅🤩😅🤩😛😛😅🤩😛",
    carTasks: {
      express: true,
      mecanique: true,
      diagnostic: false,
      carrosserie: false,
      divers: {
        newOne: false,
        diversNote: "divers note",
      },
      EstimatedTime: "EstimatedTime",
    },
  },
  {
    id: 887,
    csName: "TARHI",
    whereIsTheCar: "E-Parking",
    responsibility: "NoOne",
    startingTime: "staefegoedAt ",
    affectationChefAtelier: ["JAWAD", "yassine", "TARHI"],
    note: [
      {
        sender: "NOTE DE TEXT",
        senderTime: "note created at: ",
        noteText: "MY TEXT",
      },
    ],
    photo: {
      carPhoto: carPicture,
      createdaT: "created at: ",
    },

    deliveryTimeAdjustment: [
      {
        deadLineTime: "55:00",
        deadLineDay: "Lundi 07/08/22",
        who: "Said",
        when: "now",
        why: "Explication",
        isCustomerInformed: "Non",
      },
    ],

    emoji: "😅  😛   😛",
    carTasks: {
      express: true,
      mecanique: false,
      diagnostic: true,
      carrosserie: false,
      divers: {
        newOne: false,
        diversNote: "divers note",
      },
      EstimatedTime: "EstimatedTime",
    },
  },
  {
    id: 819,
    csName: "TARHI",
    whereIsTheCar: "Pending",
    responsibility: "amine",
    startingTime: "star4454tedAt ",
    affectationChefAtelier: ["Amine", "TARHI"],
    note: [
      {
        sender: "NOTE DE TEXT",
        senderTime: "note created at: ",
        noteText: "MY TEXT",
      },
    ],
    photo: {
      carPhoto: carPicture,
      createdaT: "created at: ",
    },

    deliveryTimeAdjustment: [
      {
        deadLineTime: "29:00",
        deadLineDay: "Lundi 07/08/22",
        who: "Said",
        when: "now",
        why: "Explication",
        isCustomerInformed: "Non",
      },
    ],

    emoji: "😅🤩😛😅🤩😛",
    carTasks: {
      express: false,
      mecanique: true,
      diagnostic: false,
      carrosserie: true,
      divers: {
        newOne: false,
        diversNote: "divers note",
      },
      EstimatedTime: "EstimatedTime",
    },
  },
  {
    id: 71,
    csName: "TARHI",
    whereIsTheCar: "Pending",
    responsibility: "NoOne",
    startingTime: "starkd7d7dtedAt ",
    affectationChefAtelier: ["Amine", "yassine"],
    note: [
      {
        sender: "NOTE DE TEXT",
        senderTime: "note created at: ",
        noteText: "MY TEXT",
      },
    ],
    photo: {
      carPhoto: carPicture,
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

    emoji: "😅🤩😛😅🤩😛",
    carTasks: {
      express: false,
      mecanique: false,
      diagnostic: false,
      carrosserie: true,
      divers: {
        newOne: false,
        diversNote: "divers note",
      },
      EstimatedTime: "EstimatedTime",
    },
  },
  {
    id: 89,
    csName: "TARHI",
    whereIsTheCar: "Pending",
    responsibility: "Amine",
    affectationChefAtelier: ["Amine", "yassine"],
    note: [
      {
        sender: "NOTE DE TEXT",
        senderTime: "note created at: ",
        noteText: "MY TEXT",
      },
    ],
    photo: {
      carPhoto: carPicture,
      createdaT: "created at: ",
    },

    deliveryTimeAdjustment: [
      {
        deadLineTime: "21:00",
        deadLineDay: "Lundi 07/08/22",
        who: "Said",
        when: "now",
        why: "Explication",
        isCustomerInformed: "Non",
      },
    ],

    emoji: "😅🤩😛😅🤩😛",
    carTasks: {
      express: false,
      mecanique: false,
      diagnostic: true,
      carrosserie: false,
      divers: {
        newOne: false,
        diversNote: "divers note",
      },
      EstimatedTime: "EstimatedTime",
    },
  },
  {
    id: 41,
    csName: "TARHI",
    whereIsTheCar: "Pending",
    responsibility: "Younes",
    affectationChefAtelier: ["TARHI"],
    note: [
      {
        sender: "NOTE DE TEXT",
        senderTime: "note created at: ",
        noteText: "MY TEXT",
      },
    ],
    photo: {
      carPhoto: carPicture,
      createdaT: "created at: ",
    },

    deliveryTimeAdjustment: [
      {
        deadLineTime: "15:00",
        deadLineDay: "Lundi 07/08/22",
        who: "Said",
        when: "now",
        why: "Explication",
        isCustomerInformed: "Non",
      },
    ],

    emoji: "😅🤩😛😅🤩😛",
    carTasks: {
      express: true,
      mecanique: false,
      diagnostic: false,
      carrosserie: false,
      divers: {
        newOne: false,
        diversNote: "divers note",
      },
      EstimatedTime: "EstimatedTime",
    },
  },
];

export default content;
export { initialTech, initialCar };
