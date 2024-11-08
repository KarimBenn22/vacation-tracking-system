import { ReactChildren } from "@/types/common"
import { SlideAppProvider } from "./SlideAppContext"

export const SlideApp : React.FC<ReactChildren>= ({children}) => {
    return (
        <SlideAppProvider>
            {children}
        </SlideAppProvider>
    )
}