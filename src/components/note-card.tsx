// Ring: aplica box-shadow no elemento
// Focus-visible: aplica o focus quando navegado pelo teclado (TAB, por exemplo), somente focus aplica pelo click do mouse

export function NoteCard() {
  return (
    <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-sm font-medium text-slate-300'>
        Há 2 dias
      </span>

      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus laudantium molestias quasi placeat dolorum autem dolorem dolore nulla non eius maiores dignissimos eligendi delectus rem officiis, quidem atque tenetur perspiciatis?
      </p>

      {
        /* Usa-se / para indicar o nivel de opacidade desejada em % */
        // Pointer-events-none retira os eventos e comportamentos de um elemento, tornando-o nao clicavel nem selecionavel
      }
      <div className='absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  )
}