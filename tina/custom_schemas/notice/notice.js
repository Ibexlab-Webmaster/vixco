export const notice = {
    label: 'Notice Page',
    name: 'notice',
    path: 'content/notice',
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === 'notice') {
                return '/notice'
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
                }
            ],
        },
        {
            label: 'Input',
            name: 'input',
            component: 'group',
            type: 'object',
            fields: [
                {
                    label: 'Input Placeholder',
                    name: 'placeholder',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Input Result',
                    name: 'result',
                    component: 'text',
                    type: 'string'
                },
                {
                    label: 'Image',
                    name: 'icon',
                    type: 'image',
                    parse: (media) => {
                        return `${media}`; // This is how the image is saved in public/uploads
                    },
                    uploadDir: () => '/public',

                    previewSrc: (fullSrc) => fullSrc.replace('/public', ''), //This is what is shown after inserted
                }
            ],
        },
    ],
};