
declare namespace toastui {
    class Editor {
        constructor(options: any)
        getMarkdown: () => string
        getHTML: () => string
        on: (event: string, callback: Function) => string
        removeHook:(type:string) => void
        addHook:(tpye: string, handle:Function) => void
        setPlaceholder:(placeholder:string) => void
        setHeight:(height:string) => void
    }
}