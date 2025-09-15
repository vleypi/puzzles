// app/sets-library/page.tsx
import { Header } from '@/components/elements/Header'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

// Демо данные для наборов
const librarySets = [
  {id: 1, title: 'Английские неправильные глаголы', description: 'Основные неправильные глаголы английского языка', quantity: 45, date: '2 дня назад', progress: 78, complexity: 'Средний'},
  {id: 2, title: 'История России: XIX век', description: 'Ключевые события и даты XIX века', quantity: 32, date: '5 дней назад', progress: 45, complexity: 'Сложный'},
  {id: 3, title: 'Французские слова для начинающих', description: 'Базовый словарный запас французского языка', quantity: 120, date: '1 неделю назад', progress: 92, complexity: 'Легкий'},
  {id: 4, title: 'Химические элементы', description: 'Основные химические элементы и их свойства', quantity: 68, date: '3 дня назад', progress: 63, complexity: 'Средний'},
  {id: 5, title: 'Математические формулы', description: 'Основные формулы алгебры и геометрии', quantity: 54, date: '2 недели назад', progress: 87, complexity: 'Сложный'},
  {id: 6, title: 'Итальянские фразы для путешествий', description: 'Полезные фразы для поездки в Италию', quantity: 38, date: '4 дня назад', progress: 71, complexity: 'Легкий'}
]

export default function SetsLibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="w-full">
          {/* Навигация и заголовок */}
          <div className="mb-8">
            <div className="mb-4">
              <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Назад на главную
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Моя библиотека наборов</h1>
            <p className="text-muted-foreground mt-2 text-[15px]">
              Все ваши наборы для изучения в одном месте
            </p>
          </div>

          {/* Статистика и фильтры */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-[15px]">
                Всего наборов: <span className="font-medium text-foreground">{librarySets.length}</span>
              </span>
              <span className="text-muted-foreground text-[15px]">
                Изучено: <span className="font-medium text-foreground">4 из 6</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 rounded-xl border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all text-[14px] flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter mr-2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Фильтры
              </button>
              
              <button className="px-4 py-2 rounded-xl border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all text-[14px] flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-down mr-2">
                  <path d="m21 16-4 4-4-4"></path>
                  <path d="M17 20V4"></path>
                  <path d="m3 8 4-4 4 4"></path>
                  <path d="M7 4v16"></path>
                </svg>
                Сортировка
              </button>
            </div>
          </div>

          {/* Сетка наборов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {librarySets.map((set) => (
              <Card 
                id={set.id}
                key={set.id}
                title={set.title}
                description={set.description}
                quantity={set.quantity}
                date={set.date}
                progress={set.progress}
                complexity={set.complexity}
              />
            ))}
            
            {/* Карточка для создания нового набора */}
            <Link href="/create-set">
              <div className="text-card-foreground flex flex-col gap-6 border-2 border-dashed border-border/40 py-8 shadow-sm group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 hover:border-primary/50 text-center">
                <div className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/30 text-primary shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-6 h-6">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">Создать новый набор</h3>
                  <p className="text-sm text-muted-foreground">Добавьте новый набор карточек</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Пагинация */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              
              <button className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary text-white">1</button>
              <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all">2</button>
              <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all">3</button>
              
              <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}