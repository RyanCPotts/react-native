
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: module - NATIVE_MODULE_WITH_NESTED_ALIASES
 */

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';
const snapshot : SchemaType = {
  'modules': {
    'NativeSampleTurboModule': {
      'type': 'NativeModule',
      'aliasMap': {
        'Bar': {
          'type': 'ObjectTypeAnnotation',
          'properties': [
            {
              'name': 'z',
              'optional': false,
              'typeAnnotation': {
                'type': 'NumberTypeAnnotation'
              }
            }
          ]
        },
        'Foo': {
          'type': 'ObjectTypeAnnotation',
          'properties': [
            {
              'name': 'bar1',
              'optional': false,
              'typeAnnotation': {
                'type': 'TypeAliasTypeAnnotation',
                'name': 'Bar'
              }
            },
            {
              'name': 'bar2',
              'optional': false,
              'typeAnnotation': {
                'type': 'TypeAliasTypeAnnotation',
                'name': 'Bar'
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
            'name': 'foo1',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'TypeAliasTypeAnnotation',
                'name': 'Foo'
              },
              'params': [
                {
                  'name': 'x',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'TypeAliasTypeAnnotation',
                    'name': 'Foo'
                  }
                }
              ]
            }
          },
          {
            'name': 'foo2',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'VoidTypeAnnotation'
              },
              'params': [
                {
                  'name': 'x',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'TypeAliasTypeAnnotation',
                    'name': 'Foo'
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
