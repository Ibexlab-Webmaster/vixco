export const headerfooter = {
    label: 'Home Page',
    name: 'headerfooter',
    path: 'content/headerfooter',
    format: 'json',
    fields: [
        {
            label: 'Header',
            name: 'header',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Logo Image',
                    name: 'logo',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                },
                {
                    label: 'About',
                    name: 'about',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Advantages',
                    name: 'advantages',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Vixpay',
                    name: 'vixpay',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Solution',
                    name: 'solution',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'VIXCO Token',
                    name: 'vixcoToken',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'RoadMap',
                    name: 'roadmap',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Notice',
                    name: 'notice',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Block scan',
                    name: 'blockscan',
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
                            component: 'text',
                            type: 'string'
                        }
                    ]
                }
            ],
        },
        {
            label: 'Footer',
            name: 'footer',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Footer Title',
                    name: 'communityTitle',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Notice Telegram',
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
                            label: 'Link',
                            name: 'link',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Chat Telegram',
                    name: 'chat',
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
                            label: 'Link',
                            name: 'link',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Instagram',
                    name: 'instagram',
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
                            label: 'Link',
                            name: 'link',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Twitter',
                    name: 'twitter',
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
                            label: 'Link',
                            name: 'link',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                },
                {
                    label: 'Email',
                    name: 'email',
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
                            label: 'Link',
                            name: 'link',
                            component: 'text',
                            type: 'string'
                        }
                    ]
                }
            ],
        }
    ],
};