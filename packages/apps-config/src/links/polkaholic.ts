// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { ExternalDef } from './types.js';

import { externalPolkaholicPNG } from '../ui/logos/external/index.js';

export const Polkaholic: ExternalDef = {
  chains: {
    Acala: 'acala',
    Altair: 'altair',
    Astar: 'astar',
    Basilisk: 'basilisk',
    Bifrost: 'bifrost-ksm',
    'Bifrost Polkadot': 'bifrost-dot',
    'Calamari Parachain': 'calamari',
    Centrifuge: 'centrifuge',
    Clover: 'clover',
    'Composable Finance': 'composable',
    'Crab Parachain': 'crab',
    'Crust Shadow': 'shadow',
    'Dorafactory Network': 'dorafactory',
    Efinity: 'efinity',
    'Encointer on Kusama': 'encointer',
    'Equilibrium parachain': 'equilibrium',
    HydraDX: 'hydradx',
    'Integritee Network (Kusama)': 'integritee',
    Interlay: 'interlay',
    KICO: 'kico',
    KICO2: 'kico2',
    'KILT Spiritnet': 'spiritnet',
    Karura: 'karura',
    Khala: 'khala',
    Kusama: 'kusama',
    Litentry: 'litentry',
    Litmus: 'litmus',
    'Mangata Kusama Mainnet': 'mangatax',
    Moonbeam: 'moonbeam',
    Moonriver: 'moonriver',
    NeuroWeb: 'neuroweb',
    'Nodle Parachain': 'nodle',
    'OAK Network': 'oak',
    Parallel: 'parallel',
    'Parallel Heiko': 'parallel-heiko',
    Picasso: 'picasso',
    'Pichiu Network': 'pichiu',
    'Pioneer Network': 'pioneer',
    Polkadot: 'polkadot',
    'QUARTZ by UNIQUE': 'quartz',
    Robonomics: 'robonomics',
    Shiden: 'shiden',
    Statemine: 'statemine',
    Statemint: 'statemint',
    Subsocial: 'subsocial',
    SubsocialX: 'subsocialx',
    'Turing Network': 'turing',
    UNIQUE: 'unique',
    Zeitgeist: 'zeitgeist',
    kintsugi: 'kintsugi'
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
