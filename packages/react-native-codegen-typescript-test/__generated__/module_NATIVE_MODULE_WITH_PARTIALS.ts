
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: module - NATIVE_MODULE_WITH_PARTIALS
 */

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';
const snapshot : SchemaType = {
  'modules': {
    'NativeSampleTurboModule': {
      'type': 'NativeModule',
      'aliasMap': {
        'SomeObj': {
          'type': 'ObjectTypeAnnotation',
          'properties': [
            {
              'name': 'a',
              'optional': false,
              'typeAnnotation': {
                'type': 'StringTypeAnnotation'
              }
            },
            {
              'name': 'b',
              'optional': true,
              'typeAnnotation': {
                'type': 'BooleanTypeAnnotation'
              }
            }
          ]
        }
      },
      'enumMap': {},
      'spec': {
        'eventEmitters': [],
        'methods': [
          {
            'name': 'getSomeObj',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'TypeAliasTypeAnnotation',
                'name': 'SomeObj'
              },
              'params': []
            }
          },
          {
            'name': 'getPartialSomeObj',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'ObjectTypeAnnotation',
                'properties': [
                  {
                    'name': 'a',
                    'optional': true,
                    'typeAnnotation': {
                      'type': 'StringTypeAnnotation'
                    }
                  },
                  {
                    'name': 'b',
                    'optional': true,
                    'typeAnnotation': {
                      'type': 'BooleanTypeAnnotation'
                    }
                  }
                ]
              },
              'params': []
            }
          },
          {
            'name': 'getSomeObjFromPartialSomeObj',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'TypeAliasTypeAnnotation',
                'name': 'SomeObj'
              },
              'params': [
                {
                  'name': 'value',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'ObjectTypeAnnotation',
                    'properties': [
                      {
                        'name': 'a',
                        'optional': true,
                        'typeAnnotation': {
                          'type': 'StringTypeAnnotation'
                        }
                      },
                      {
                        'name': 'b',
                        'optional': true,
                        'typeAnnotation': {
                          'type': 'BooleanTypeAnnotation'
                        }
                      }
                    ]
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
