export interface Ship {
  symbol: string;
  registration: ShipRegistration;
  nav: ShipNav;
  crew: ShipCrew;
  frame: ShipFrame;
  reactor: ShipReactor;
  engine: ShipEngine;
  modules: ShipModule[];
  mounts: ShipMount[];
  cargo: ShipCargo;
  fuel: ShipFuel;
  cooldown: ShipCooldown;
}

export interface ShipRegistration {
  name: string;
  factionSymbol: FactionSymbol;
  role?: ShipRole;
}

export enum ShipRole {
  FABRICATOR,
  HARVESTER,
  HAULER,
  INTERCEPTOR,
  EXCAVATOR,
  TRANSPORT,
  REPAIR,
  SURVEYOR,
  COMMAND,
  CARRIER,
  PATROL,
  SATELLITE,
  EXPLORER,
  REFINERY,
}

export interface ShipNav {
  systemSymbol: string;
  waypointSymbol: string;
  route: ShipNavRoute;
  status: ShipNavStatus;
  flightMode: ShipNavFlightMode;
}

export interface ShipNavRoute {
  destination: ShipNavRouteWaypoint;
  origin: ShipNavRouteWaypoint;
  departureTime: Date;
  arrival: Date;
}

export interface ShipNavRouteWaypoint {
  symbol: string;
  type: WaypointType;
  systemSymbol: string;
  x: number;
  y: number;
}

export enum ShipNavStatus {
  IN_TRANSIT,
  IN_ORBIT,
  DOCKED,
}

export enum ShipNavFlightMode {
  DRIFT,
  STEALTH,
  CRUISE,
  BURN,
}

export interface ShipCrew {
  current: number;
  required: number;
  capacity: number;
  rotation: "STRICT" | "RELAXED";
  morale: number; // 0 to 100
  wages: number;
}

export interface ShipFuel {
  current: number;
  capacity: number;
  consumed?: {
    amount: number;
    timestamp: Date;
  };
}

export interface ShipCooldown {
  shipSymbol: string;
  totalSeconds: number;
  remainingSeconds: number;
  expiration?: Date;
}

export interface ShipMount {
  symbol: ShipMountSymbol;
  name: string;
  description: string;
  strength?: number;
  deposits?: OreDeposit[];
  requirements: ShipPartRequirements;
}

export interface ShipPartRequirements {
  power?: number;
  crew?: number;
  slots?: number;
}

export enum OreDeposit {
  QUARTZ_SAND,
  SILICON_CRYSTALS,
  PRECIOUS_STONES,
  ICE_WATER,
  AMMONIA_ICE,
  IRON_ORE,
  COPPER_ORE,
  SILVER_ORE,
  ALUMINUM_ORE,
  GOLD_ORE,
  PLATINUM_ORE,
  DIAMONDS,
  URANITE_ORE,
  MERITIUM_ORE,
}

export enum ShipMountSymbol {
  MOUNT_GAS_SIPHON_I,
  MOUNT_GAS_SIPHON_II,
  MOUNT_GAS_SIPHON_III,
  MOUNT_SURVEYOR_I,
  MOUNT_SURVEYOR_II,
  MOUNT_SURVEYOR_III,
  MOUNT_SENSOR_ARRAY_I,
  MOUNT_SENSOR_ARRAY_II,
  MOUNT_SENSOR_ARRAY_III,
  MOUNT_MINING_LASER_I,
  MOUNT_MINING_LASER_II,
  MOUNT_MINING_LASER_III,
  MOUNT_LASER_CANNON_I,
  MOUNT_MISSILE_LAUNCHER_I,
  MOUNT_TURRET_I,
}

export interface ShipModule {
  symbol: ShipModuleSymbol;
  name: string;
  description: string;
  capacity?: number;
  range?: number;
  requirements: ShipPartRequirements;
}

export enum ShipModuleSymbol {
  MODULE_MINERAL_PROCESSOR_I,
  MODULE_GAS_PROCESSOR_I,
  MODULE_CARGO_HOLD_I,
  MODULE_CARGO_HOLD_II,
  MODULE_CARGO_HOLD_III,
  MODULE_CREW_QUARTERS_I,
  MODULE_ENVOY_QUARTERS_I,
  MODULE_PASSENGER_CABIN_I,
  MODULE_MICRO_REFINERY_I,
  MODULE_ORE_REFINERY_I,
  MODULE_FUEL_REFINERY_I,
  MODULE_SCIENCE_LAB_I,
  MODULE_JUMP_DRIVE_I,
  MODULE_JUMP_DRIVE_II,
  MODULE_JUMP_DRIVE_III,
  MODULE_WARP_DRIVE_I,
  MODULE_WARP_DRIVE_II,
  MODULE_WARP_DRIVE_III,
  MODULE_SHIELD_GENERATOR_I,
  MODULE_SHIELD_GENERATOR_II,
}

export interface ShipEngine {
  symbol: ShipEngineSymbol;
  name: string;
  contition: number; // 0 to 1
  integrity: number; // 0 to 1
  description: string;
  speed: number;
  requirements: ShipPartRequirements;
  quality: number;
}

export enum ShipEngineSymbol {
  ENGINE_IMPULSE_DRIVE_I,
  ENGINE_ION_DRIVE_I,
  ENGINE_ION_DRIVE_II,
  ENGINE_HYPER_DRIVE_I,
}

export interface ShipReactor {
  symbol: ShipReactorSymbol;
  name: string;
  contition: number; // 0 to 1
  integrity: number; // 0 to 1
  description: string;
  powerOutput: number;
  requirements: ShipPartRequirements;
  quality: number;
}

export enum ShipReactorSymbol {
  REACTOR_SOLAR_I,
  REACTOR_FUSION_I,
  REACTOR_FISSION_I,
  REACTOR_CHEMICAL_I,
  REACTOR_ANTIMATTER_I,
}

export interface ShipFrame {
  symbol: ShipFrameSymbol;
  name: string;
  condition: number; // 0 to 1
  integrity: number; // 0 to 1
  description: string;
  moduleSlots: number;
  mountingPoints: number;
  fuelCapacity: number;
  requirements: ShipPartRequirements;
  quality: number;
}

export enum ShipFrameSymbol {
  FRAME_PROBE,
  FRAME_DRONE,
  FRAME_INTERCEPTOR,
  FRAME_RACER,
  FRAME_FIGHTER,
  FRAME_FRIGATE,
  FRAME_SHUTTLE,
  FRAME_EXPLORER,
  FRAME_MINER,
  FRAME_LIGHT_FREIGHTER,
  FRAME_HEAVY_FREIGHTER,
  FRAME_TRANSPORT,
  FRAME_DESTROYER,
  FRAME_CRUISER,
  FRAME_CARRIER,
  FRAME_BULK_FREIGHTER,
}

export enum ShipType {
  SHIP_PROBE,
  SHIP_MINING_DRONE,
  SHIP_SIPHON_DRONE,
  SHIP_INTERCEPTOR,
  SHIP_LIGHT_HAULER,
  SHIP_COMMAND_FRIGATE,
  SHIP_EXPLORER,
  SHIP_HEAVY_FREIGHTER,
  SHIP_LIGHT_SHUTTLE,
  SHIP_ORE_HOUND,
  SHIP_REFINING_FREIGHTER,
  SHIP_SURVEYOR,
  SHIP_BULK_FREIGHTER,
}

export interface ShipCargo {
  capacity: number;
  units: number;
  inventory: ShipCargoItem[];
}

export interface ShipCargoItem {
  symbol: ItemSymbol;
  name: string;
  description: string;
  units: number;
}

export enum ItemSymbol {
  PRECIOUS_STONES,
  QUARTZ_SAND,
  SILICON_CRYSTALS,
  AMMONIA_ICE,
  LIQUID_HYDROGEN,
  LIQUID_NITROGEN,
  ICE_WATER,
  EXOTIC_MATTER,
  ADVANCED_CIRCUITRY,
  GRAVITON_EMITTERS,
  IRON,
  IRON_ORE,
  COPPER,
  COPPER_ORE,
  ALUMINUM,
  ALUMINUM_ORE,
  SILVER,
  SILVER_ORE,
  GOLD,
  GOLD_ORE,
  PLATINUM,
  PLATINUM_ORE,
  DIAMONDS,
  URANITE,
  URANITE_ORE,
  MERITIUM,
  MERITIUM_ORE,
  HYDROCARBON,
  ANTIMATTER,
  FAB_MATS,
  FERTILIZERS,
  FABRICS,
  FOOD,
  JEWELRY,
  MACHINERY,
  FIREARMS,
  ASSAULT_RIFLES,
  MILITARY_EQUIPMENT,
  EXPLOSIVES,
  LAB_INSTRUMENTS,
  AMMUNITION,
  ELECTRONICS,
  SHIP_PLATING,
  SHIP_PARTS,
  EQUIPMENT,
  FUEL,
  MEDICINE,
  DRUGS,
  CLOTHING,
  MICROPROCESSORS,
  PLASTICS,
  POLYNUCLEOTIDES,
  BIOCOMPOSITES,
  QUANTUM_STABILIZERS,
  NANOBOTS,
  AI_MAINFRAMES,
  QUANTUM_DRIVES,
  ROBOTIC_DRONES,
  CYBER_IMPLANTS,
  GENE_THERAPEUTICS,
  NEURAL_CHIPS,
  MOOD_REGULATORS,
  VIRAL_AGENTS,
  MICRO_FUSION_GENERATORS,
  SUPERGRAINS,
  LASER_RIFLES,
  HOLOGRAPHICS,
  SHIP_SALVAGE,
  RELIC_TECH,
  NOVEL_LIFEFORMS,
  BOTANICAL_SPECIMENS,
  CULTURAL_ARTIFACTS,
  FRAME_PROBE,
  FRAME_DRONE,
  FRAME_INTERCEPTOR,
  FRAME_RACER,
  FRAME_FIGHTER,
  FRAME_FRIGATE,
  FRAME_SHUTTLE,
  FRAME_EXPLORER,
  FRAME_MINER,
  FRAME_LIGHT_FREIGHTER,
  FRAME_HEAVY_FREIGHTER,
  FRAME_TRANSPORT,
  FRAME_DESTROYER,
  FRAME_CRUISER,
  FRAME_CARRIER,
  FRAME_BULK_FREIGHTER,
  REACTOR_SOLAR_I,
  REACTOR_FUSION_I,
  REACTOR_FISSION_I,
  REACTOR_CHEMICAL_I,
  REACTOR_ANTIMATTER_I,
  ENGINE_IMPULSE_DRIVE_I,
  ENGINE_ION_DRIVE_I,
  ENGINE_ION_DRIVE_II,
  ENGINE_HYPER_DRIVE_I,
  MODULE_MINERAL_PROCESSOR_I,
  MODULE_GAS_PROCESSOR_I,
  MODULE_CARGO_HOLD_I,
  MODULE_CARGO_HOLD_II,
  MODULE_CARGO_HOLD_III,
  MODULE_CREW_QUARTERS_I,
  MODULE_ENVOY_QUARTERS_I,
  MODULE_PASSENGER_CABIN_I,
  MODULE_MICRO_REFINERY_I,
  MODULE_SCIENCE_LAB_I,
  MODULE_JUMP_DRIVE_I,
  MODULE_JUMP_DRIVE_II,
  MODULE_JUMP_DRIVE_III,
  MODULE_WARP_DRIVE_I,
  MODULE_WARP_DRIVE_II,
  MODULE_WARP_DRIVE_III,
  MODULE_SHIELD_GENERATOR_I,
  MODULE_SHIELD_GENERATOR_II,
  MODULE_ORE_REFINERY_I,
  MODULE_FUEL_REFINERY_I,
  MOUNT_GAS_SIPHON_I,
  MOUNT_GAS_SIPHON_II,
  MOUNT_GAS_SIPHON_III,
  MOUNT_SURVEYOR_I,
  MOUNT_SURVEYOR_II,
  MOUNT_SURVEYOR_III,
  MOUNT_SENSOR_ARRAY_I,
  MOUNT_SENSOR_ARRAY_II,
  MOUNT_SENSOR_ARRAY_III,
  MOUNT_MINING_LASER_I,
  MOUNT_MINING_LASER_II,
  MOUNT_MINING_LASER_III,
  MOUNT_LASER_CANNON_I,
  MOUNT_MISSILE_LAUNCHER_I,
  MOUNT_TURRET_I,
  SHIP_PROBE,
  SHIP_MINING_DRONE,
  SHIP_SIPHON_DRONE,
  SHIP_INTERCEPTOR,
  SHIP_LIGHT_HAULER,
  SHIP_COMMAND_FRIGATE,
  SHIP_EXPLORER,
  SHIP_HEAVY_FREIGHTER,
  SHIP_LIGHT_SHUTTLE,
  SHIP_ORE_HOUND,
  SHIP_REFINING_FREIGHTER,
  SHIP_SURVEYOR,
  SHIP_BULK_FREIGHTER,
}

export enum FactionSymbol {
  COSMIC,
  VOID,
  GALACTIC,
  QUANTUM,
  DOMINION,
  ASTRO,
  CORSAIRS,
  OBSIDIAN,
  AEGIS,
  UNITED,
  SOLITARY,
  COBALT,
  OMEGA,
  ECHO,
  LORDS,
  CULT,
  ANCIENTS,
  SHADOW,
  ETHEREAL,
}

export interface Faction {
  symbol: FactionSymbol;
  name: string;
  description: string;
  headquarters?: string;
  traits: FactionTrait[];
  isRecruiting: boolean;
}

export interface FactionTrait {
  symbol: FactionTraitSymbol;
  name: string;
  description: string;
}

export enum FactionTraitSymbol {
  BUREAUCRATIC,
  SECRETIVE,
  CAPITALISTIC,
  INDUSTRIOUS,
  PEACEFUL,
  DISTRUSTFUL,
  WELCOMING,
  SMUGGLERS,
  SCAVENGERS,
  REBELLIOUS,
  EXILES,
  PIRATES,
  RAIDERS,
  CLAN,
  GUILD,
  DOMINION,
  FRINGE,
  FORSAKEN,
  ISOLATED,
  LOCALIZED,
  ESTABLISHED,
  NOTABLE,
  DOMINANT,
  INESCAPABLE,
  INNOVATIVE,
  BOLD,
  VISIONARY,
  CURIOUS,
  DARING,
  EXPLORATORY,
  RESOURCEFUL,
  FLEXIBLE,
  COOPERATIVE,
  UNITED,
  STRATEGIC,
  INTELLIGENT,
  RESEARCH_FOCUSED,
  COLLABORATIVE,
  PROGRESSIVE,
  MILITARISTIC,
  TECHNOLOGICALLY_ADVANCED,
  AGGRESSIVE,
  IMPERIALISTIC,
  TREASURE_HUNTERS,
  DEXTEROUS,
  UNPREDICTABLE,
  BRUTAL,
  FLEETING,
  ADAPTABLE,
  SELF_SUFFICIENT,
  DEFENSIVE,
  PROUD,
  DIVERSE,
  INDEPENDENT,
  SELF_INTERESTED,
  FRAGMENTED,
  COMMERCIAL,
  FREE_MARKETS,
  ENTREPRENEURIAL,
}

export interface System {
  constellation?: string;
  symbol: string;
  sectorSymbol: string;
  type: SystemType;
  x: number;
  y: number;
  waypoints: SystemWaypoint[];
  factions: FactionSymbol[];
  name?: string;
}

export enum SystemType {
  NEUTRON_STAR,
  RED_STAR,
  ORANGE_STAR,
  BLUE_STAR,
  YOUNG_STAR,
  WHITE_DWARF,
  BLACK_HOLE,
  HYPERGIANT,
  NEBULA,
  UNSTABLE,
}

export interface SystemWaypoint {
  symbol: string;
  type: WaypointType;
  x: number;
  y: number;
  orbitals: {
    symbol: string[];
  };
  orbits?: string | undefined;
}

export enum WaypointType {
  PLANET,
  GAS_GIANT,
  MOON,
  ORBITAL_STATION,
  JUMP_GATE,
  ASTEROID_FIELD,
  ASTEROID,
  ENGINEERED_ASTEROID,
  ASTEROID_BASE,
  NEBULA,
  DEBRIS_FIELD,
  GRAVITY_WELL,
  ARTIFICIAL_GRAVITY_WELL,
  FUEL_STATION,
}

export interface Waypoint {
  symbol: string;
  type: WaypointType;
  systemSymbol: string;
  x: number;
  y: number;
  orbitals: {
    symbol: string[];
  };
  orbits?: string;
  faction?: FactionSymbol;
  traits: WaypointTrait[];
  modifiers?: WaypointModifier[];
  chart?: Chart;
  isUnderConstruction: boolean;
}

export interface WaypointTrait {
  symbol: WaypointTraitSymbol;
  name: string;
  description: string;
}

export interface WaypointModifier {
  symbol: WaypointModifierSymbol;
  name: string;
  description: string;
}

export enum WaypointTraitSymbol {
  UNCHARTED,
  UNDER_CONSTRUCTION,
  MARKETPLACE,
  SHIPYARD,
  OUTPOST,
  SCATTERED_SETTLEMENTS,
  SPRAWLING_CITIES,
  MEGA_STRUCTURES,
  PIRATE_BASE,
  OVERCROWDED,
  HIGH_TECH,
  CORRUPT,
  BUREAUCRATIC,
  TRADING_HUB,
  INDUSTRIAL,
  BLACK_MARKET,
  RESEARCH_FACILITY,
  MILITARY_BASE,
  SURVEILLANCE_OUTPOST,
  EXPLORATION_OUTPOST,
  MINERAL_DEPOSITS,
  COMMON_METAL_DEPOSITS,
  PRECIOUS_METAL_DEPOSITS,
  RARE_METAL_DEPOSITS,
  METHANE_POOLS,
  ICE_CRYSTALS,
  EXPLOSIVE_GASES,
  STRONG_MAGNETOSPHERE,
  VIBRANT_AURORAS,
  SALT_FLATS,
  CANYONS,
  PERPETUAL_DAYLIGHT,
  PERPETUAL_OVERCAST,
  DRY_SEABEDS,
  MAGMA_SEAS,
  SUPERVOLCANOES,
  ASH_CLOUDS,
  VAST_RUINS,
  MUTATED_FLORA,
  TERRAFORMED,
  EXTREME_TEMPERATURES,
  EXTREME_PRESSURE,
  DIVERSE_LIFE,
  SCARCE_LIFE,
  FOSSILS,
  WEAK_GRAVITY,
  STRONG_GRAVITY,
  CRUSHING_GRAVITY,
  TOXIC_ATMOSPHERE,
  CORROSIVE_ATMOSPHERE,
  BREATHABLE_ATMOSPHERE,
  THIN_ATMOSPHERE,
  JOVIAN,
  ROCKY,
  VOLCANIC,
  FROZEN,
  SWAMP,
  BARREN,
  TEMPERATE,
  JUNGLE,
  OCEAN,
  RADIOACTIVE,
  MICRO_GRAVITY_ANOMALIES,
  DEBRIS_CLUSTER,
  DEEP_CRATERS,
  SHALLOW_CRATERS,
  UNSTABLE_COMPOSITION,
  HOLLOWED_INTERIOR,
  STRIPPED,
}

export enum WaypointModifierSymbol {
  STRIPPED,
  UNSTABLE,
  RADIATION_LEAK,
  CRITICAL_LIMIT,
  CIVIL_UNREST,
}

export interface Chart {
  waypointSymbol: string;
  submittedBy: string;
  submittedOn: Date;
}

export interface Agent {
  accountId: string;
  symbol: string; // 3 to 14
  headquarters: string;
  credits: number;
  startingFaction: FactionSymbol;
  shipCount: number;
}

export interface Contract {
  id: number;
  factionSymbol: FactionSymbol;
  type: "PROCUREMENT" | "TRANSPORT" | "SHUTTLE";
  terms: ContractTerms;
  accepted: boolean;
  fulfilled: boolean;
  deadlineToAccept?: Date;
}

export interface ContractTerms {
  deadline: Date;
  payment: ContractPayment;
  deliver?: ContractDeliverItem[];
}

export interface ContractPayment {
  onAccepted: number;
  onFulfilled: number;
}

export interface ContractDeliverItem {
  itemSymbol: ItemSymbol;
  destinationSymbol: string;
  unitsRequired: number;
  unitsFulfilled: number;
}
