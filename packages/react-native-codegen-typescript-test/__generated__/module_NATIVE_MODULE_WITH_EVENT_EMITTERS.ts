
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: module - NATIVE_MODULE_WITH_EVENT_EMITTERS
 */

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';
const snapshot : SchemaType = {
  'modules': {
    'NativeSampleTurboModule': {
      'type': 'NativeModule',
      'aliasMap': {
        'ObjectStruct': {
          'type': 'ObjectTypeAnnotation',
          'properties': [
            {
              'name': 'a',
              'optional': false,
              'typeAnnotation': {
                'type': 'NumberTypeAnnotation'
              }
            },
            {
              'name': 'b',
              'optional': false,
              'typeAnnotation': {
                'type': 'StringTypeAnnotation'
              }
            },
            {
              'name': 'c',
              'optional': true,
              'typeAnnotation': {
                'type': 'NullableTypeAnnotation',
                'typeAnnotation': {
                  'type': 'StringTypeAnnotation'
                }
              }
            }
          ]
        }
      },
      'enumMap': {},
      'spec': {
        'eventEmitters': [
          {
            'name': 'onEvent1',
            'optional': false,
            'typeAnnotation': {
              'type': 'EventEmitterTypeAnnotation',
              'typeAnnotation': {
                'type': 'VoidTypeAnnotation'
              }
            }
          },
          {
            'name': 'onEvent2',
            'optional': false,
            'typeAnnotation': {
              'type': 'EventEmitterTypeAnnotation',
              'typeAnnotation': {
                'type': 'StringTypeAnnotation'
              }
            }
          },
          {
            'name': 'onEvent3',
            'optional': false,
            'typeAnnotation': {
              'type': 'EventEmitterTypeAnnotation',
              'typeAnnotation': {
                'type': 'NumberTypeAnnotation'
              }
            }
          },
          {
            'name': 'onEvent4',
            'optional': false,
            'typeAnnotation': {
              'type': 'EventEmitterTypeAnnotation',
              'typeAnnotation': {
                'type': 'BooleanTypeAnnotation'
              }
            }
          },
          {
            'name': 'onEvent5',
            'optional': false,
            'typeAnnotation': {
              'type': 'EventEmitterTypeAnnotation',
              'typeAnnotation': {
                'type': 'TypeAliasTypeAnnotation',
                'name': 'ObjectStruct'
              }
            }
          },
          {
            'name': 'onEvent6',
            'optional': false,
            'typeAnnotation': {
              'type': 'EventEmitterTypeAnnotation',
              'typeAnnotation': {
                'type': 'ArrayTypeAnnotation',
                'elementType': {
                  'type': 'TypeAliasTypeAnnotation',
                  'name': 'ObjectStruct'
                }
              }
            }
          },
          {
            'name': 'onEvent7',
            'optional': false,
            'typeAnnotation': {
              'type': 'EventEmitterTypeAnnotation',
              'typeAnnotation': {
                'type': 'GenericObjectTypeAnnotation',
                'dictionaryValueType': {
                  'type': 'StringTypeAnnotation'
                }
              }
            }
          }
        ],
        'methods': []
      },
      'moduleName': 'SampleTurboModule'
    }
  }
};
export default snapshot;
