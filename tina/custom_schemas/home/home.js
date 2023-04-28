export const home = {
    label: 'Home Page',
    name: 'home',
    path: 'content/home',
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'home') {
                return '/'
            }
        },
    },
    format: 'json',
    fields: [
        {
            label: 'Hero Section',
            name: 'hero',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Subtext',
                    name: 'subtext',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Button text',
                    name: 'button',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'VIXCO x VIXPAY Card',
                    name: 'heroCard',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Text',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                }
            ],
        },
        {
            label: 'About Section',
            name: 'about',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'About Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'About Text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Image',
                    name: 'image',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'The goal',
                    name: 'goal',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',

                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        },
                        {
                            label: 'Text',
                            name: 'text',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                }
            ],
        },
        {
            label: "The advantages of VIXCO's global network configuration Section",
            name: 'globalNetworkAdvantages',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Include Image Desktop',
                    name: 'image',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'Include Image Mobile',
                    name: 'imageMobile',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'Text Items',
                    name: 'items',
                    component: "group",
                    type: 'object',
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.title };
                        },
                    },
                    fields: [
                        {
                            label: 'Text',
                            name: 'text',
                            type: 'string',
                        }
                    ],
                }
            ],
        },
        {
            label: 'Digital marketing based on VIXPAY data Section',
            name: 'dgMarketing',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Title Vixpay',
                    name: 'vixpay',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Title data',
                    name: 'data',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Image',
                    name: 'image',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'Text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Text Second',
                    name: 'text2',
                    component: 'text',
                    type: 'string'
                }
            ],
        },
        {
            label: 'Vixpay app Section',
            name: 'vixpayApp',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Image',
                    name: 'image',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'Text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Subtext',
                    name: 'subtext',
                    component: 'text',
                    type: 'string'
                },
            ],
        },
        {
            label: 'VIXCO Solution Section',
            name: 'solution',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title Vixco',
                    name: 'vixco',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Number Items Image',
                    name: 'numberImage',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'Product Vixco Items',
                    name: 'items',
                    component: "group",
                    type: 'object',
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.title };
                        },
                    },
                    fields: [
                        {
                            label: 'ID',
                            name: 'id',
                            type: 'number',
                        },
                        {
                            label: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            label: 'Text',
                            name: 'text',
                            type: 'string',
                        },
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',

                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        },
                    ],
                }
            ],
        },
        {
            label: 'VIXCO Token Section',
            name: 'token',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title Vixco',
                    name: 'vixco',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Token Process Image',
                    name: 'tokenModel',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',
        
                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        },
                    ]
                },
                {
                    label: 'Text',
                    name: 'text',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Subtext',
                    name: 'subtext',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Image',
                    name: 'image',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
            ],
        },
        {
            label: 'VIXCO Token Information Section',
            name: 'tokenInfos',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Token Diagram',
                    name: 'diagram',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',
        
                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        },
                    ]
                },
                {
                    label: 'VIXCO Token Information card',
                    name: 'infos',
                    component: "group",
                    type: 'object',
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.title };
                        },
                    },
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            label: 'Text',
                            name: 'text',
                            type: 'string',
                        }
                    ],
                },
                {
                    label: 'VIXCO Token Information card',
                    name: 'items',
                    component: "group",
                    type: 'object',
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.title };
                        },
                    },
                    fields: [
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',
        
                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        },
                        {
                            label: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            label: 'Price',
                            name: 'price',
                            type: 'string',
                        }
                    ],
                }
            ],
        },
        {
            label: 'VIXCO RoadMap',
            name: 'roadmap',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Completed',
                    name: 'completed',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',
        
                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        },
                        {
                            label: 'Completed steps',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        }
                    ]
                },
                {
                    label: 'Ongoing',
                    name: 'ongoing',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',
        
                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        },
                        {
                            label: 'Completed steps',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        }
                    ]
                },
                {
                    label: 'Future',
                    name: 'future',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',
        
                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        },
                        {
                            label: 'Completed steps',
                            name: 'items',
                            component: "group",
                            type: 'object',
                            list: true,
                            ui: {
                                itemProps: (item) => {
                                    return { label: item?.title };
                                },
                            },
                            fields: [
                                {
                                    label: 'Text',
                                    name: 'text',
                                    type: 'string',
                                }
                            ],
                        }
                    ]
                }
            ],
        },
        {
            label: 'Notice Section',
            name: 'notice',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Link',
                    name: 'link',
                    component: 'group',
                    type: 'object',
                    fields: [
                        {
                            label: 'Title',
                            name: 'title',
                            component: 'text',
                            type: 'string'
                        },
                        {
                            label: 'Image',
                            name: 'image',
                            type: 'image',
                            parse: (media) => {
                                return `${media}`; // This is how the image is saved in public/uploads
                            },
                            uploadDir: () => '/public',
        
                            previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                        }
                    ]
                },
                {
                    label: 'Items Background Desktop Image',
                    name: 'imageItems',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'Items Background Mobile Image',
                    name: 'imageItemsMobile',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'Notice Items',
                    name: 'items',
                    component: "group",
                    type: 'object',
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.title };
                        },
                    },
                    fields: [
                        {
                            label: 'ID',
                            name: 'id',
                            type: 'number',
                        },
                        {
                            label: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            label: 'Date',
                            name: 'date',
                            type: 'string',
                        },
                        {
                            label: 'Text',
                            name: 'text',
                            type: 'string',
                        },
                        {
                            label: 'Subtext',
                            name: 'subtext',
                            type: 'string',
                        }
                    ],
                }
            ],
        }
    ],
};