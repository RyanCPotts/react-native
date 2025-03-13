
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: module - NATIVE_MODULE_WITH_UNION
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
            'name': 'getUnion',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'UnionTypeAnnotation',
                'memberType': 'ObjectTypeAnnotation'
              },
              'params': [
                {
                  'name': 'chooseInt',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'UnionTypeAnnotation',
                    'memberType': 'NumberTypeAnnotation'
                  }
                },
                {
                  'name': 'chooseFloat',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'UnionTypeAnnotation',
                    'memberType': 'NumberTypeAnnotation'
                  }
                },
                {
                  'name': 'chooseObject',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'UnionTypeAnnotation',
                    'memberType': 'ObjectTypeAnnotation'
                  }
                },
                {
                  'name': 'chooseString',
                  'optional': false,
                  'typeAnnotation': {
                    'type': 'StringLiteralUnionTypeAnnotation',
                    'types': [
                      {
                        'type': 'StringLiteralTypeAnnotation',
                        'value': 'One'
                      },
                      {
                        'type': 'StringLiteralTypeAnnotation',
                        'value': 'Two'
                      },
                      {
                        'type': 'StringLiteralTypeAnnotation',
                        'value': 'Three'
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
