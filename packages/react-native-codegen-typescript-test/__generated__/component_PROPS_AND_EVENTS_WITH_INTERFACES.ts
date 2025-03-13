
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * DO NOT MODIFY
 * Generated by src/build.js
 * From snapshot: component - PROPS_AND_EVENTS_WITH_INTERFACES
 */

import type { SchemaType } from '@react-native/codegen/lib/CodegenSchema';
const snapshot : SchemaType = {
  'modules': {
    'Module': {
      'type': 'Component',
      'components': {
        'Module': {
          'interfaceOnly': true,
          'paperComponentName': 'RCTModule',
          'extendsProps': [
            {
              'type': 'ReactNativeBuiltInType',
              'knownTypeName': 'ReactNativeCoreViewProps'
            }
          ],
          'events': [
            {
              'name': 'onDirect',
              'optional': false,
              'bubblingType': 'direct',
              'typeAnnotation': {
                'type': 'EventTypeAnnotation',
                'argument': {
                  'type': 'ObjectTypeAnnotation',
                  'properties': [
                    {
                      'name': 'x',
                      'optional': false,
                      'typeAnnotation': {
                        'type': 'StringTypeAnnotation'
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
                        'type': 'BooleanTypeAnnotation'
                      }
                    }
                  ]
                }
              }
            },
            {
              'name': 'onBubbling',
              'optional': false,
              'bubblingType': 'bubble',
              'typeAnnotation': {
                'type': 'EventTypeAnnotation',
                'argument': {
                  'type': 'ObjectTypeAnnotation',
                  'properties': [
                    {
                      'name': 'x',
                      'optional': false,
                      'typeAnnotation': {
                        'type': 'StringTypeAnnotation'
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
                        'type': 'BooleanTypeAnnotation'
                      }
                    }
                  ]
                }
              }
            }
          ],
          'props': [
            {
              'name': 'ordinary_prop',
              'optional': false,
              'typeAnnotation': {
                'type': 'ObjectTypeAnnotation',
                'properties': [
                  {
                    'name': 'x',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'StringTypeAnnotation',
                      'default': null
                    }
                  },
                  {
                    'name': 'y',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'Int32TypeAnnotation',
                      'default': 0
                    }
                  },
                  {
                    'name': 'z',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'BooleanTypeAnnotation',
                      'default': false
                    }
                  }
                ]
              }
            },
            {
              'name': 'readonly_prop',
              'optional': false,
              'typeAnnotation': {
                'type': 'ObjectTypeAnnotation',
                'properties': [
                  {
                    'name': 'x',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'StringTypeAnnotation',
                      'default': null
                    }
                  },
                  {
                    'name': 'y',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'Int32TypeAnnotation',
                      'default': 0
                    }
                  },
                  {
                    'name': 'z',
                    'optional': false,
                    'typeAnnotation': {
                      'type': 'BooleanTypeAnnotation',
                      'default': false
                    }
                  }
                ]
              }
            },
            {
              'name': 'ordinary_array_prop',
              'optional': true,
              'typeAnnotation': {
                'type': 'ArrayTypeAnnotation',
                'elementType': {
                  'type': 'ObjectTypeAnnotation',
                  'properties': [
                    {
                      'name': 'x',
                      'optional': false,
                      'typeAnnotation': {
                        'type': 'StringTypeAnnotation',
                        'default': null
                      }
                    },
                    {
                      'name': 'y',
                      'optional': false,
                      'typeAnnotation': {
                        'type': 'Int32TypeAnnotation',
                        'default': 0
                      }
                    },
                    {
                      'name': 'z',
                      'optional': false,
                      'typeAnnotation': {
                        'type': 'BooleanTypeAnnotation',
                        'default': false
                      }
                    }
                  ]
                }
              }
            },
            {
              'name': 'readonly_array_prop',
              'optional': true,
              'typeAnnotation': {
                'type': 'ArrayTypeAnnotation',
                'elementType': {
                  'type': 'ObjectTypeAnnotation',
                  'properties': [
                    {
                      'name': 'x',
                      'optional': false,
                      'typeAnnotation': {
                        'type': 'StringTypeAnnotation',
                        'default': null
                      }
                    },
                    {
                      'name': 'y',
                      'optional': false,
                      'typeAnnotation': {
                        'type': 'Int32TypeAnnotation',
                        'default': 0
                      }
                    },
                    {
                      'name': 'z',
                      'optional': false,
                      'typeAnnotation': {
                        'type': 'BooleanTypeAnnotation',
                        'default': false
                      }
                    }
                  ]
                }
              }
            },
            {
              'name': 'ordinary_nested_array_prop',
              'optional': true,
              'typeAnnotation': {
                'type': 'ArrayTypeAnnotation',
                'elementType': {
                  'type': 'ArrayTypeAnnotation',
                  'elementType': {
                    'type': 'ObjectTypeAnnotation',
                    'properties': [
                      {
                        'name': 'x',
                        'optional': false,
                        'typeAnnotation': {
                          'type': 'StringTypeAnnotation',
                          'default': null
                        }
                      },
                      {
                        'name': 'y',
                        'optional': false,
                        'typeAnnotation': {
                          'type': 'Int32TypeAnnotation',
                          'default': 0
                        }
                      },
                      {
                        'name': 'z',
                        'optional': false,
                        'typeAnnotation': {
                          'type': 'BooleanTypeAnnotation',
                          'default': false
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              'name': 'readonly_nested_array_prop',
              'optional': true,
              'typeAnnotation': {
                'type': 'ArrayTypeAnnotation',
                'elementType': {
                  'type': 'ArrayTypeAnnotation',
                  'elementType': {
                    'type': 'ObjectTypeAnnotation',
                    'properties': [
                      {
                        'name': 'x',
                        'optional': false,
                        'typeAnnotation': {
                          'type': 'StringTypeAnnotation',
                          'default': null
                        }
                      },
                      {
                        'name': 'y',
                        'optional': false,
                        'typeAnnotation': {
                          'type': 'Int32TypeAnnotation',
                          'default': 0
                        }
                      },
                      {
                        'name': 'z',
                        'optional': false,
                        'typeAnnotation': {
                          'type': 'BooleanTypeAnnotation',
                          'default': false
                        }
                      }
                    ]
                  }
                }
              }
            }
          ],
          'commands': []
        }
      }
    }
  }
};
export default snapshot;
