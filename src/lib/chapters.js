export default [
    {
        id: 1,
        subject: 'maths',
        title: 'Développement limité',
        lessons: [
            {
                id: 1,
                title: 'Développement limité : cours complet',
                small: false,
                level: 'ip',
                author: 'Litarvan',
                posted: new Date(),
                views: 68_030,
                content: 'https://www.orphoz.com/uploads/media/pdf-exemple.pdf',
                pages: [
                    {},
                    {},
                    {}
                ],
                comments: [
                    {},
                    {}
                ]
            }
        ],
        subjects: [
            {
                id: 1,
                title: 'Concours ESSEC 2019 - Sujet A',
                has: ['subject', 'corrected'],
                level: 'prepa',
                author: 'Litarvan',
                posted: new Date(),
                views: 120_734,
                content: ['https://www.orphoz.com/uploads/media/pdf-exemple.pdf', 'https://www.orphoz.com/uploads/media/pdf-exemple.pdf'],
                pages: [
                    {},
                    {},
                    {}
                ],
                comments: [
                    {},
                    {}
                ]
            }
        ],
        exercices: [],
        questions: []
    },
    { id: 2, subject: 'maths', title: 'Matrices', lessons: [], subjects: [], exercises: [], questions: [] },
    { id: 3, subject: 'maths', title: 'Séries numériques', lessons: [], subjects: [], exercises: [], questions: [] }
];