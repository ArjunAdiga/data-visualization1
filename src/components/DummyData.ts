



export const chartData = [
  { month: '', value: 38000, fullMonth: '' },
  { month: 'Apr', value: 20000, fullMonth: 'April' },
  { month: 'May', value: 45000, fullMonth: 'May' }, 
  { month: 'Jun', value: 40000, fullMonth: 'June' },
  { month: 'Jul', value: 89600, fullMonth: 'July', isPeak: true }, 
  { month: 'Aug', value: 60000, fullMonth: 'August' },
  { month: 'Sep', value: 45000, fullMonth: 'September' },
  { month: 'Oct', value: 58000, fullMonth: 'October' },
];

export const kpis = [
  {
    title: "Infrastructure Units",
    description: "This describes variable two and what the shown data means.",
    value: "€421.07",
  },
  {
    title: "Charging Growth",
    description: "This describes variable two and what the shown data means.",
    value: "33.07",
  },
  {
    title: "Localization change",
    description: "This describes variable two and what the shown data means.",
    value: "21.9%",
  },
  {
    title: "Fleet growth",
    description: "This describes variable two and what the shown data means.",
    value: "7.03%",
  },
];

type Tag = {
  id: number;
  name: string;
  tooltip: string;
  isSelected: boolean;
};

type TagCategory = Tag[][];

export const initialVariables: TagCategory = [    // dummy data for all variables 
  [
    { id: 1, name: 'Carbon 1', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
    { id: 2, name: 'CO2 Distribution', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
    { id: 3, name: 'Fleet Sizing', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
  ],
  [
    { id: 4, name: 'Parking Rate', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
    { id: 5, name: 'Border Rate', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
    { id: 6, name: 'Request Rate', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
  ],
  [
    { id: 7, name: 'Variable 1', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
    { id: 8, name: 'Variable 2', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
    { id: 9, name: 'Variable 3', tooltip: 'But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you are a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.', isSelected: false },
  ],
];

