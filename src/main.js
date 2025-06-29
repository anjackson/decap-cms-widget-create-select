
import Control from './Control.tsx'
import Preview from './Preview.tsx'

if (typeof window !== 'undefined') {
    window.CreatableSelectControl = Control
    window.CreatableSelectPreview = Preview
}

export { Control as CreatableSelectControl, Preview as CreatableSelectPreview }

if (!import.meta.env.PROD) {
    console.log('[decap-cms-widget-starter] Running in development mode...')
    import("./dev.js");
}