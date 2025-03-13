
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: module - IOS_ONLY_NATIVE_MODULE
 */

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';
const snapshot : SchemaType = {
  'modules': {
    'NativeSampleTurboModule': {
      'type': 'NativeModule',
      'aliasMap': {},
      'enumMap': {
        'Quality': {
          'name': 'Quality',
          'type': 'EnumDeclarationWithMembers',
          'memberType': 'StringTypeAnnotation',
          'members': [
            {
              'name': 'SD',
              'value': {
                'type': 'StringLiteralTypeAnnotation',
                'value': 'SD'
              }
            },
            {
              'name': 'HD',
              'value': {
                'type': 'StringLiteralTypeAnnotation',
                'value': 'HD'
              }
            }
          ]
        },
        'Resolution': {
          'name': 'Resolution',
          'type': 'EnumDeclarationWithMembers',
          'memberType': 'NumberTypeAnnotation',
          'members': [
            {
              'name': 'Low',
              'value': {
                'type': 'NumberLiteralTypeAnnotation',
                'value': 720
              }
            },
            {
              'name': 'High',
              'value': {
                'type': 'NumberLiteralTypeAnnotation',
                'value': 1080
              }
            }
          ]
        },
        'StringOptions': {
          'name': 'StringOptions',
          'type': 'EnumDeclarationWithMembers',
          'memberType': 'StringTypeAnnotation',
          'members': [
            {
              'name': 'One',
              'value': {
                'type': 'StringLiteralTypeAnnotation',
                'value': 'one'
              }
            },
            {
              'name': 'Two',
              'value': {
                'type': 'StringLiteralTypeAnnotation',
                'value': 'two'
              }
            },
            {
              'name': 'Three',
              'value': {
                'type': 'StringLiteralTypeAnnotation',
                'value': 'three'
              }
            }
          ]
        }
      },
      'spec': {
        'eventEmitters': [],
        'methods': [
          {
            'name': 'getEnums',
            'optional': false,
            'typeAnnotation': {
              'type': 'FunctionTypeAnnotation',
              'returnTypeAnnotation': {
                'type': 'StringTypeAnnotation'
              },
              'params': [
                {
                  'name': 'quality',
                  'optional': false,
                  'typeAnnotation': {
                    'name': 'Quality',
                    'type': 'EnumDeclaration',
                    'memberType': 'StringTypeAnnotation'
                  }
                },
                {
                  'name': 'resolution',
                  'optional': true,
                  'typeAnnotation': {
                    'name': 'Resolution',
                    'type': 'EnumDeclaration',
                    'memberType': 'NumberTypeAnnotation'
                  }
                },
                {
                  'name': 'stringOptions',
                  'optional': false,
                  'typeAnnotation': {
                    'name': 'StringOptions',
                    'type': 'EnumDeclaration',
                    'memberType': 'StringTypeAnnotation'
                  }
                }
              ]
            }
          }
        ]
      },
      'moduleName': 'SampleTurboModuleIOS',
      'excludedPlatforms': [
        'android'
      ]
    }
  }
};
export default snapshot;
