// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { ExternalDef } from './types.js';

import { externalPolkaholicPNG } from '../ui/logos/external/index.js';

export const Polkaholic: ExternalDef = {
  chains: {
    Acala: 'acala',
    Ajuna: 'ajuna',
    Altair: 'altair',
    Amplitude: 'amplitude',
    Astar: 'astar',
    'Bajun Network': 'bajun',
    Basilisk: 'basilisk',
    'Bifrost-Kusama': 'bifrost-ksm',
    'Bifrost-Polkadot': 'bifrost-dot',
    'Bit.Country Pioneer': 'bitcountrypioneer',
    Bitgreen: 'bitgreen',
    Bridgehub: 'bridgehub',
    Calamari: 'calamari',
    Centrifuge: 'centrifuge',
    Clover: 'clover',
    Collectives: 'collectives',
    'Composable Finance': 'composable',
    'Crust Shadow': 'shadow',
    'DAO IPCI': 'daoipci',
    Darwinia: 'darwinia',
    'Darwinia Crab': 'crab',
    'Dora Factory': 'dorafactory',
    Efinity: 'efinity',
    Encointer: 'encointer',
    Equilibrium: 'equilibrium',
    Frequency: 'frequency',
    Genshiro: 'genshiro',
    GM: 'gm',
    Hashed: 'hashed',
    HydraDX: 'hydradx',
    'Imbue Network': 'imbue',
    Integritee: 'integritee',
    'Integritee Shell': 'integritee-shell',
    Interlay: 'interlay',
    'InvArch Tinkernet': 'tinkernet',
    Kabocha: 'kabocha',
    Kapex: 'kapex',
    Karura: 'karura',
    Khala: 'khala',
    Kico: 'kico',
    'KILT Spiritnet': 'spiritnet',
    Kintsugi: 'kintsugi',
    Kusama: 'kusama',
    Kylin: 'kylin',
    Listen: 'listen',
    Litentry: 'litentry',
    Litmus: 'litmus',
    Mangata: 'mangatax',
    Moonbeam: 'moonbeam',
    Moonriver: 'moonriver',
    Nodle: 'nodle',
    'Origin Trail': 'origintrail',
    Parallel: 'parallel',
    'Parallel Heiko': 'parallel-heiko',
    Pendulum: 'pendulum',
    Phala: 'phala',
    Picasso: 'picasso',
    Pichiu: 'pichiu',
    Polkadot: 'polkadot',
    Quartz: 'quartz',
    Robonomics: 'robonomics',
    Shiden: 'shiden',
    Snow: 'snow',
    'Sora Kusama': 'sora',
    Statemine: 'statemine',
    Statemint: 'statemint',
    SubsocialX: 'subsocialx',
    subzero: 'subzero',
    Tanganika: 'tanganika',
    Turing: 'turing',
    Unique: 'unique',
    Zeitgeist: 'zeitgeist'
  },
  create: (chain: string, path: string, data: BN | number | string): string =>
    `https://polkaholic.io/${path}/${data.toString()}&chainfilters=${chain}`,
  homepage: 'https://polkaholic.io/',
  isActive: true,
  paths: {
    address: 'account',
    block: 'blockhash',
    extrinsic: 'tx'
  },
  ui: {
    logo: externalPolkaholicPNG
  }
};
