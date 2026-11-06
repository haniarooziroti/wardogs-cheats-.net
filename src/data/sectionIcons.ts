import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  'ESP & wall intel': 'featureEsp',
  'Aimbot & smoothing': 'featureAimbot',
  'Radar & zoom': 'featureRadar',
  'Trigger & recoil helpers': 'toolkitWeapons',
  'Profiles & cloud backup': 'compareCloudBackup',
  'Capture-friendly mode': 'streamProof',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  ESP: 'featureEsp',
  Aim: 'featureAimbot',
  Radar: 'featureRadar',
  Compare: 'layers',
  Setup: 'settings',
  Features: 'layers',
  Safety: 'alert',
  Stream: 'streamProof',
  Patch: 'refresh',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'ESP overlays' },
  { icon: 'radarOnline', label: 'Radar zoom' },
  { icon: 'seasonBuild', label: 'Season build' },
  { icon: 'softAim', label: 'Aim assist' },
  { icon: 'noRecoil', label: 'Recoil help' },
  { icon: 'streamProof', label: 'Capture mode' },
  { icon: 'lootEsp', label: 'Player intel' },
  { icon: 'skeletonEsp', label: 'Outline read' },
  { icon: 'uavRadar', label: 'Map reads' },
  { icon: 'mapHack', label: 'Wall intel' },
  { icon: 'support247', label: 'Live help' },
  { icon: 'instantDelivery', label: 'Fast access' },
  { icon: 'triggerBot', label: 'Trigger timing' },
  { icon: 'boneSelect', label: 'Aim bones' },
  { icon: 'liveStatus', label: 'Loader status' },
  { icon: 'autoUpdates', label: 'Auto updates' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];
