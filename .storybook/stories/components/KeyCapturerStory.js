import { storiesOf } from '@storybook/react'

import documentation from './KeyCapturerStore.md'

// Story Definitions ==========================================================
const KeyCapturerDocumentationChapters = [
    { subtitle: 'Documentation', info: documentation }
]

// Story setup ================================================================
export const Story = () =>
    storiesOf('KeyCapturer', module).addWithChapters(
        'Component Documentation',
        {
            chapters: KeyCapturerDocumentationChapters
        }
    )
