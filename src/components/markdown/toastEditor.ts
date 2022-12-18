import uploadImg from "@/apis/uploadImageApi"
import ToastEditor from '@toast-ui/editor'

export default class {
    editor
    isFullscreen: boolean = false
    constructor(el: string, initialValue: string, public height: string) {
        this.editor = new ToastEditor({
            el: document.querySelector(el)!,
            height: height,
            initialEditType: "markdown",
            initialValue: initialValue,
            previewStyle: 'vertical',
            toolbarItems: this.toolbarItems() as [],
        })
        this.ImageHook()
    }
    private toolbarItems() {
        return ([
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            // Using Option: Customize the last button
            [{
                el: this.fullScreen(),
                command: 'fullScreen',
                tooltip: 'fullScreen'
            }]
        ])
    }
    private ImageHook() {
        this.editor.removeHook('addImageBlobHook')
        this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
            const form = new FormData()
            form.append('file', blob, blob.name)
            const response = await uploadImg(form)
            callback(response.data.url, blob.name)

        })
    }
    private fullScreen() {
        const btn = document.createElement('button') as HTMLButtonElement
        btn.innerText = '全屏'
        btn.style.margin = '0'
        btn.addEventListener('click', () => {
            const editor = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
            editor?.classList.toggle('fullscreen')
            if (this.isFullscreen === false) {
                this.editor.setHeight('100vh')
               
            } else {
                this.editor.setHeight(this.height)
            }
            this.isFullscreen = !this.isFullscreen
        })
        return btn
    }
}