
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: module - NATIVE_MODULE_WITH_ROOT_TAG
 */

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';
const snapshot : SchemaType = {
  'modules': {
    'NativeSampleTurboModule': {
      'type': 'NativeModule',
      'aliasMap': {},
      'enumMap': {},
      'spec': {
        'eventEmitters': [],
        'methods': [
          {
            'name': 'getRootTag',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'ReservedTypeAnnotation',
                'name': 'RootTag'
              },
              'params': [
                {
                  'name': 'rootTag',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'ReservedTypeAnnotation',
                    'name': 'RootTag'
                  }
                }
              ]
            }
          }
        ]
      },
      'moduleName': 'SampleTurboModule'
    }
  }
};
export default snapshot;
