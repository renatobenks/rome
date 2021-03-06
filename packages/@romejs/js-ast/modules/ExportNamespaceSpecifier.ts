/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Identifier, JSNodeBase} from '../index';
import {createBuilder} from '../utils';

export type ExportNamespaceSpecifier = JSNodeBase & {
  type: 'ExportNamespaceSpecifier';
  exported: Identifier;
};

export const exportNamespaceSpecifier = createBuilder<ExportNamespaceSpecifier>(
  'ExportNamespaceSpecifier',
  {
    bindingKeys: {},
    visitorKeys: {
      exported: true,
    },
  },
);
