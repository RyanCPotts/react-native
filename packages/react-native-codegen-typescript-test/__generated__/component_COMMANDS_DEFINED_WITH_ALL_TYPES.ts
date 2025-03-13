
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: component - COMMANDS_DEFINED_WITH_ALL_TYPES
 */

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';
const snapshot : SchemaType = {
  'modules': {
    'Module': {
      'type': 'Component',
      'components': {
        'Module': {
          'extendsProps': [
            {
              'type': 'ReactNativeBuiltInType',
              'knownTypeName': 'ReactNativeCoreViewProps'
            }
          ],
          'events': [],
          'props': [],
          'commands': [
            {
              'name': 'handleRootTag',
              'optional': false,
              'typeAnnotation': {
                'type': 'FunctionTypeAnnotation',
                'params': [
                  {
                    'name': 'rootTag',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'ReservedTypeAnnotation',
                      'name': 'RootTag'
                    }
                  }
                ],
                'returnTypeAnnotation': {
                  'type': 'VoidTypeAnnotation'
                }
              }
            },
            {
              'name': 'hotspotUpdate',
              'optional': false,
              'typeAnnotation': {
                'type': 'FunctionTypeAnnotation',
                'params': [
                  {
                    'name': 'x',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'Int32TypeAnnotation'
                    }
                  },
                  {
                    'name': 'y',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'Int32TypeAnnotation'
                    }
                  }
                ],
                'returnTypeAnnotation': {
                  'type': 'VoidTypeAnnotation'
                }
              }
            },
            {
              'name': 'scrollTo',
              'optional': false,
              'typeAnnotation': {
                'type': 'FunctionTypeAnnotation',
                'params': [
                  {
                    'name': 'x',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'FloatTypeAnnotation'
                    }
                  },
                  {
                    'name': 'y',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'Int32TypeAnnotation'
                    }
                  },
                  {
                    'name': 'z',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'DoubleTypeAnnotation'
                    }
                  },
                  {
                    'name': 'animated',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'BooleanTypeAnnotation'
                    }
                  }
                ],
                'returnTypeAnnotation': {
                  'type': 'VoidTypeAnnotation'
                }
              }
            }
          ]
        }
      }
    }
  }
};
export default snapshot;
