
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: module - NATIVE_MODULE_WITH_COMPLEX_ARRAY2
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
            'name': 'getArray',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'ArrayTypeAnnotation',
                'elementType': {
                  'type': 'ArrayTypeAnnotation',
                  'elementType': {
                    'type': 'ArrayTypeAnnotation',
                    'elementType': {
                      'type': 'StringTypeAnnotation'
                    }
                  }
                }
              },
              'params': [
                {
                  'name': 'arg',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'ArrayTypeAnnotation',
                    'elementType': {
                      'type': 'ArrayTypeAnnotation',
                      'elementType': {
                        'type': 'ArrayTypeAnnotation',
                        'elementType': {
                          'type': 'ArrayTypeAnnotation',
                          'elementType': {
                            'type': 'ArrayTypeAnnotation',
                            'elementType': {
                              'type': 'StringTypeAnnotation'
                            }
                          }
                        }
                      }
                    }
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
