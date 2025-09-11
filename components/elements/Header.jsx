import { Search } from '@/components/ui/Search'


export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center space-x-4">
            <a href='/' className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25">
                <span className="text-white font-bold text-lg">PZ</span>
              </div>
              <span className="text-xl font-bold text-white">Puzzles</span>
            </a>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <Search />
          </div>

          <div className="flex items-center space-x-3">
            <button className='py-2 px-4 rounded-lg flex items-center transition-colors bg-blue-600 hover:bg-blue-700 text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Создать
            </button>
            
            <button data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 h-8 gap-1.5 px-3 has-[&gt;svg]:px-2.5 rounded-xl hover:bg-slate-800/50 transition-all duration-200 text-slate-300 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-4 h-4"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg></button>
            
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium">
              В
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}