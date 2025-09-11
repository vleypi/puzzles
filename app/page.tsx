import { Header } from '@/components/elements/Header'
import { Welcome } from '@/components/elements/Welcome'
import { Tool } from '@/components/ui/Tool'
// import { SetsContainer } from '@/components/containers/SetsContainer'
// import { StatsContainer } from '@/components/containers/StatsContainer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <Welcome />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Tool title='Создать набор' description='Новый набор карточек' color='from-blue-600 to-blue-700 shadow-blue-600/25'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-6 h-6">
            <path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          </Tool>
          <Tool title='Изучать' description='Режим изучения' color='from-emerald-700 to-emerald-800 shadow-emerald-700/25'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
          </Tool>
          <Tool title='Тест' description='Проверить знания' color='from-purple-600 to-purple-700 shadow-purple-600/25'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
          </Tool>
          <Tool title='Цели' description='Установить цели' color='from-orange-600 to-orange-700 shadow-orange-600/25'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          </Tool>
        </div>

        {/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='class="lg:col-span-2 space-y-6"'>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Мои наборы</h2>
              <button className='inline inline-flex items-center justify-center whitespace-nowrap text-sm font-medium rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 bg-transparen'>Посмотреть все</button>
            </div>
            <div className='space-y-4'>
              <div className='text-card-foreground flex flex-col gap-6 border py-6 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 hover:border-primary/30'>
                <div className='@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3'>
                  <div className='flex items-start justify-between'>
                    <div className='space-y-1 flex-1'>
                      <div className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors'>
                        Английские неправильные глаголы
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        Основные неправильные глаголы английского языка
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Основная колонка */}
      <div className="lg:col-span-2 space-y-6">
        <div className="space-y-6">
          {/* Заголовок */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Мои наборы</h2>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 bg-transparent"
            >
              Посмотреть все
            </button>
          </div>

          {/* Карточки наборов */}
          <div className="space-y-4">
            {/* Карточка 1 */}
            <div className="text-card-foreground flex flex-col gap-6 border py-6 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 hover:border-primary/30">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      Английские неправильные глаголы
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Основные неправильные глаголы английского языка
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis w-4 h-4">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-4 h-4">
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                      </svg>
                      <span>45 карточек</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>2 часа назад</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 text-xs">
                    Средний
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Прогресс</span>
                    <span className="font-medium text-foreground">78%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full transition-all duration-500 ease-out shadow-sm" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="flex space-x-3 pt-2">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 flex-1 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-white"
                    style={{ background: 'linear-gradient(to right, rgb(30, 58, 138), rgb(30, 64, 175))', color: 'white' }}
                  >
                    Изучать
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 flex-1 rounded-xl transition-all duration-200 text-white bg-transparent"
                    style={{ background: 'linear-gradient(to right, rgb(5, 150, 105), rgb(4, 120, 87))', border: '1px solid rgb(4, 120, 87)', color: 'white' }}
                  >
                    Тест
                  </button>
                </div>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="text-card-foreground flex flex-col gap-6 border py-6 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-2xl bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 border-accent/20 hover:border-accent/30">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      История России: XIX век
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ключевые события и даты XIX века
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis w-4 h-4">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-4 h-4">
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                      </svg>
                      <span>32 карточек</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>1 день назад</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 text-xs">
                    Сложный
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Прогресс</span>
                    <span className="font-medium text-foreground">45%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full transition-all duration-500 ease-out shadow-sm" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="flex space-x-3 pt-2">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 flex-1 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-white"
                    style={{ background: 'linear-gradient(to right, rgb(30, 58, 138), rgb(30, 64, 175))', color: 'white' }}
                  >
                    Изучать
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 flex-1 rounded-xl transition-all duration-200 text-white bg-transparent"
                    style={{ background: 'linear-gradient(to right, rgb(5, 150, 105), rgb(4, 120, 87))', border: '1px solid rgb(4, 120, 87)', color: 'white' }}
                  >
                    Тест
                  </button>
                </div>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="text-card-foreground flex flex-col gap-6 border py-6 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-2xl bg-gradient-to-br from-chart-5/5 via-chart-5/10 to-chart-5/5 border-chart-5/20 hover:border-chart-5/30">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      Математика: Производные
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Формулы и правила дифференцирования
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis w-4 h-4">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-4 h-4">
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                      </svg>
                      <span>28 карточек</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>3 дня назад</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 text-xs">
                    Легкий
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Прогресс</span>
                    <span className="font-medium text-foreground">92%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full transition-all duration-500 ease-out shadow-sm" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="flex space-x-3 pt-2">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 flex-1 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-white"
                    style={{ background: 'linear-gradient(to right, rgb(30, 58, 138), rgb(30, 64, 175))', color: 'white' }}
                  >
                    Изучать
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 flex-1 rounded-xl transition-all duration-200 text-white bg-transparent"
                    style={{ background: 'linear-gradient(to right, rgb(5, 150, 105), rgb(4, 120, 87))', border: '1px solid rgb(4, 120, 87)', color: 'white' }}
                  >
                    Тест
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Карточка активности */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div className="leading-none font-semibold flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-muted-foreground">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Недавняя активность</span>
            </div>
          </div>
          <div className="px-6 space-y-3">
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-200 cursor-pointer group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 text-primary shadow-sm group-hover:scale-105 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-5 h-5">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">Завершили изучение набора</p>
                <p className="text-sm text-muted-foreground">Английские неправильные глаголы</p>
                <p className="text-xs text-muted-foreground/80">2 часа назад</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-200 cursor-pointer group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/20 text-accent shadow-sm group-hover:scale-105 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy w-5 h-5">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">Получили достижение</p>
                <p className="text-sm text-muted-foreground">Изучено 100 карточек подряд</p>
                <p className="text-xs text-muted-foreground/80">1 день назад</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-200 cursor-pointer group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-chart-5/10 to-chart-5/20 text-chart-5 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-5 h-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">Достигли цели</p>
                <p className="text-sm text-muted-foreground">Изучение 30 минут в день</p>
                <p className="text-xs text-muted-foreground/80">2 дня назад</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Боковая колонка */}
      <div className="space-y-6">
        <div className="space-y-6">
          {/* Карточка дневной цели */}
          <div className="text-card-foreground flex flex-col gap-6 border py-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
              <div className="font-semibold flex items-center space-x-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-5 h-5 text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <span>Дневная цель</span>
              </div>
            </div>
            <div className="px-6 space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">23</div>
                <div className="text-sm text-muted-foreground">из 30 минут</div>
              </div>
              <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-24%)' }}></div>
              </div>
              <p className="text-sm text-muted-foreground text-center">Осталось 7 минут до достижения цели!</p>
            </div>
          </div>

          {/* Карточка серии дней */}
          <div className="text-card-foreground flex flex-col gap-6 border py-6 bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 border-accent/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
              <div className="font-semibold flex items-center space-x-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-5 h-5 text-accent">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
                <span>Серия дней</span>
              </div>
            </div>
            <div className="px-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">12</div>
              <p className="text-sm text-muted-foreground">дней подряд изучения</p>
            </div>
          </div>

          {/* Карточка этой недели */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
              <div className="font-semibold flex items-center space-x-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-5 h-5 text-muted-foreground">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>Эта неделя</span>
              </div>
            </div>
            <div className="px-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-800">156</div>
                  <div className="text-xs text-muted-foreground">карточек изучено</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">4.2</div>
                  <div className="text-xs text-muted-foreground">часа в день</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Точность</span>
                  <span className="font-medium text-slate-800">87%</span>
                </div>
                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                  <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-13%)' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка прогресса */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
              <div className="font-semibold flex items-center space-x-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-5 h-5 text-chart-5">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                <span>Прогресс</span>
              </div>
            </div>
            <div className="px-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Английский</span>
                  <span className="font-medium text-slate-800">78%</span>
                </div>
                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                  <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-22%)' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">История</span>
                  <span className="font-medium text-slate-800">45%</span>
                </div>
                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                  <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-55%)' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Математика</span>
                  <span className="font-medium text-slate-800">92%</span>
                </div>
                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                  <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-8%)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Study Sets */}
          <div className="lg:col-span-2 space-y-6">

          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">

          </div>
        </div>
      </main>
    </div>
  )
}