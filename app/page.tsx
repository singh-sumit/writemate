import Actions from '@/components/Actions'
import { TextEditor } from '@/components/TextEditor'
import TextEditorProvider from '@/context/textEditorContext'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-slate-400 to-red-100 -mt-6'>

      <TextEditorProvider>
        <Actions />

        <TextEditor />
      </TextEditorProvider>
    </div>
  )
}
