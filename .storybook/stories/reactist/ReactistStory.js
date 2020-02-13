import { storiesOf } from '@storybook/react'

import {
    introText,
    howToText,
    developmentText,
    testingText
} from './ReactistStory.md'

export const Story = () =>
    storiesOf('Reactist', module).addWithChapters('Welcome', {
        chapters: [
            {
                title: 'Reactist',
                info: introText
            },
            {
                title: 'How to use',
                info: howToText
            },
            {
                title: 'Development',
                info: developmentText
            },
            {
                title: 'Testing',
                info: testingText
            }
        ]
    })
