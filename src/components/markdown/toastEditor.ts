import uploadImg from "@/apis/uploadImageApi"


export default class {
    editor
    constructor(el: string, initialValue: string, public height: string) {
        this.editor = new toastui.Editor({
            el: document.querySelector(el),
            height: height,
            initialEditType: "markdown",
            initialValue: initialValue,
            previewStyle: 'vertical'
        })
        this.ImageHook()
    }

    private ImageHook() {
        this.editor.removeHook('addImageBlobHook')
        this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
            console.log(blob)
            const form = new FormData()
            form.append('file', blob, blob.name)
            const response = await uploadImg(form)
            callback(response.data.url, blob.name)

        })
    }
}