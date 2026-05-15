export type HealthStatus = "Healthy" | "Sick" | "In Treatment" | "Observation";
export type ClimateZone = "Savanna" | "Tropical" | "Temperate" | "Polar" | "Desert";
export type FeedType = "Vegetation" | "Live Feed" | "Meat" | "Compound feed";
export type Role = "Admin" | "Veterinarian" | "Zookeeper" | "Maintenance";

export interface Animal {
  id: string;
  name: string;
  species: string;
  age: number;
  sex: "Male" | "Female";
  climate: ClimateZone;
  status: HealthStatus;
  type: "Predator" | "Prey" | "Neutral";
}

export interface Task {
  id: string;
  title: string;
  role: Role;
  time: string;
  completed: boolean;
}

export interface Enclosure {
  id: string;
  number: string;
  heatingStatus: "Heated" | "Outdoor" | "Mixed";
  inhabitants: Animal[];
  warningMessage?: string;
}

export interface FeedingSchedule {
  id: string;
  animalName: string;
  species: string;
  feedType: FeedType;
  quantity: string;
  time: string;
}

export const MOCK_ANIMALS: Animal[] = [
  { id: "A1", name: "Leo", species: "African Lion", age: 5, sex: "Male", climate: "Savanna", status: "Healthy", type: "Predator" },
  { id: "A2", name: "Zara", species: "Reticulated Giraffe", age: 3, sex: "Female", climate: "Savanna", status: "Observation", type: "Prey" },
  { id: "A3", name: "Baloo", species: "Brown Bear", age: 7, sex: "Male", climate: "Temperate", status: "In Treatment", type: "Predator" },
  { id: "A4", name: "Skipper", species: "Emperor Penguin", age: 2, sex: "Male", climate: "Polar", status: "Sick", type: "Neutral" },
  { id: "A5", name: "Manny", species: "Asian Elephant", age: 12, sex: "Male", climate: "Tropical", status: "Healthy", type: "Prey" },
  { id: "A6", name: "Kaa", species: "Reticulated Python", age: 4, sex: "Female", climate: "Tropical", status: "Healthy", type: "Predator" },
  { id: "A7", name: "Marty", species: "Plains Zebra", age: 4, sex: "Male", climate: "Savanna", status: "Healthy", type: "Prey" },
];

export const MOCK_TASKS: Task[] = [
  { id: "T1", title: "Feed the lions", role: "Zookeeper", time: "10:00 AM", completed: false },
  { id: "T2", title: "Clean Enclosure B (Bears)", role: "Maintenance", time: "11:30 AM", completed: false },
  { id: "T3", title: "Vet checkup for Skipper", role: "Veterinarian", time: "01:00 PM", completed: false },
  { id: "T4", title: "Refill Giraffe feeders", role: "Zookeeper", time: "02:00 PM", completed: false },
  { id: "T5", title: "Review breeding pair A5 & female elephant", role: "Admin", time: "04:00 PM", completed: false },
];

export const MOCK_ENCLOSURES: Enclosure[] = [
  { 
    id: "E1", 
    number: "Sector 1A", 
    heatingStatus: "Outdoor", 
    inhabitants: [MOCK_ANIMALS[0]], // Lion
    warningMessage: "Compatibility Rule Violation: Predator (Lion) placed near Sector 1B (Zebra)."
  },
  { 
    id: "E2", 
    number: "Sector 1B", 
    heatingStatus: "Outdoor", 
    inhabitants: [MOCK_ANIMALS[6]] // Zebra
  },
  { 
    id: "E3", 
    number: "Sector 2A", 
    heatingStatus: "Heated", 
    inhabitants: [MOCK_ANIMALS[4]] // Elephant
  },
  { 
    id: "E4", 
    number: "Polar Dome", 
    heatingStatus: "Mixed", 
    inhabitants: [MOCK_ANIMALS[3]] // Penguin
  },
  { 
    id: "E5", 
    number: "Reptile House", 
    heatingStatus: "Heated", 
    inhabitants: [MOCK_ANIMALS[5]] // Python
  },
];

export const MOCK_FEEDING_SCHEDULE: FeedingSchedule[] = [
  { id: "F1", animalName: "Leo", species: "African Lion", feedType: "Meat", quantity: "7 kg", time: "10:00 AM" },
  { id: "F2", animalName: "Zara", species: "Giraffe", feedType: "Vegetation", quantity: "15 kg", time: "08:00 AM" },
  { id: "F3", animalName: "Baloo", species: "Brown Bear", feedType: "Compound feed", quantity: "5 kg", time: "09:30 AM" },
  { id: "F4", animalName: "Skipper", species: "Penguin", feedType: "Live Feed", quantity: "2 kg", time: "11:00 AM" },
  { id: "F5", animalName: "Manny", species: "Elephant", feedType: "Vegetation", quantity: "40 kg", time: "08:30 AM" },
];

export const MOCK_METRICS = {
  totalAnimals: 142,
  sickInIsolation: 4,
  emptyEnclosures: 3,
  lowStockItems: 2
};
