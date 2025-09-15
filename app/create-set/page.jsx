// app/set-create/page.tsx
import { Header } from '@/components/elements/Header'
import Link from 'next/link'

export default function CreateSetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Контент занимает всю ширину как header */}
        <div className="w-full">
          {/* Навигация назад */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Назад к наборам
            </Link>
          </div>
          
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Создать новый набор</h1>
          </div>
          
          {/* Форма без рамки */}
          <div className="space-y-8">
            {/* Название */}
            <div className="space-y-3">
              <label className="text-base font-medium text-foreground">Название набора</label>
              <input
                type="text"
                placeholder="Например, Английские неправильные глаголы"
                className="w-full px-5 py-3.5 rounded-xl border border-border/60 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all text-base"
              />
            </div>
            
            {/* Описание */}
            <div className="space-y-3">
              <label className="text-base font-medium text-foreground">Описание</label>
              <textarea
                placeholder="Краткое описание набора (необязательно)"
                rows={2}
                className="w-full px-5 py-3.5 rounded-xl border border-border/60 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none text-base"
              ></textarea>
            </div>
            
            {/* Разделитель */}
            <div className="border-t border-border/30 my-6"></div>
            
            {/* Карточки */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground text-base">Карточки</h3>
                <button className="text-primary hover:text-primary/80 transition-colors flex items-center text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus mr-2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Добавить карточку
                </button>
              </div>
              
              {/* Карточка 1 */}
              <div className="p-5 rounded-xl bg-muted/20 space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <label className="text-muted-foreground text-[15px]">Термин</label>
                    <input
                      type="text"
                      placeholder="Введите термин"
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/40 transition-all text-[15px]"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-muted-foreground text-[15px]">Определение</label>
                    <input
                      type="text"
                      placeholder="Введите определение"
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/40 transition-all text-[15px]"
                    />
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-destructive transition-colors flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 mr-2">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  Удалить карточку
                </button>
              </div>
              
              {/* Карточка 2 */}
              <div className="p-5 rounded-xl bg-muted/20 space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <label className="text-muted-foreground text-[15px]">Термин</label>
                    <input
                      type="text"
                      placeholder="Введите термин"
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/40 transition-all text-[15px]"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-muted-foreground text-[15px]">Определение</label>
                    <input
                      type="text"
                      placeholder="Введите определение"
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/40 transition-all text-[15px]"
                    />
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-destructive transition-colors flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 mr-2">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  Удалить карточку
                </button>
              </div>
            </div>
            
            {/* Кнопки действий */}
            <div className="flex justify-between pt-6">
              <Link 
                href="/"
                className="px-6 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted/30 transition-all text-[15px]"
              >
                Отмена
              </Link>
              <button className="px-7 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-sm hover:shadow text-[15px] font-medium">
                Создать набор
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}