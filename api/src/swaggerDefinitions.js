// swaggerDefinitions.js

export const swaggerDefinitions = {
    components: {
        schemas: {
            File: {
                type: 'object',
                properties: {
                    file: { type: 'string' },
                    lines: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                text: { type: 'string' },
                                number: { type: 'number' },
                                hex: { type: 'string' },
                            },
                        },
                    },
                },
            },
            SuccessResponse: {
                type: 'object',
                properties: {
                    success: { type: 'boolean' },
                    data: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/File',
                        },
                    },
                },
            },
            FileListResponse: {
                type: 'object',
                properties: {
                    success: { type: 'boolean' },
                    data: {
                        type: 'array',
                        items: { type: 'string' },
                    },
                },
            },
        },
    },
};
