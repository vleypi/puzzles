// app/statistics/page.tsx
import { Header } from '@/components/elements/Header'
import Link from 'next/link'

export default function StatisticsPage() {
  const stats = {
    totalStudyTime: 42,
    totalCards: 156,
    averageDailyTime: 4.2,
    accuracy: 87,
    streak: 12,
    dailyGoal: 30,
    dailyProgress: 23,
    setsStudied: 8,
    setsMastered: 5
  }

  const progressData = [
    { subject: 'Английский', progress: 78 },
    { subject: 'История', progress: 45 },
    { subject: 'Математика', progress: 92 },
    { subject: 'Биология', progress: 63 },
    { subject: 'Химия', progress: 51 }
  ]

  const weeklyData = [
    { day: 'Пн', time: 3.5, cards: 24 },
    { day: 'Вт', time: 4.2, cards: 32 },
    { day: 'Ср', time: 2.8, cards: 18 },
    { day: 'Чт', time: 5.1, cards: 45 },
    { day: 'Пт', time: 3.9, cards: 28 },
    { day: 'Сб', time: 1.5, cards: 12 },
    { day: 'Вс', time: 0.8, cards: 8 }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full px-4 py-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Навигация */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Назад на главную
            </Link>
          </div>

          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Статистика</h1>
            <p className="text-muted-foreground mt-2">Отслеживайте ваш прогресс и достижения</p>
          </div>

          {/* Основная статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-200/50 rounded-2xl p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground text-sm">Общее время</h3>
              </div>
              <div className="text-2xl font-bold text-foreground">{stats.totalStudyTime}ч</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-200/50 rounded-2xl p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground text-sm">Карточки</h3>
              </div>
              <div className="text-2xl font-bold text-foreground">{stats.totalCards}</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-200/50 rounded-2xl p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground text-sm">Точность</h3>
              </div>
              <div className="text-2xl font-bold text-foreground">{stats.accuracy}%</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-200/50 rounded-2xl p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground text-sm">Серия дней</h3>
              </div>
              <div className="text-2xl font-bold text-foreground">{stats.streak}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* График недельной активности */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/50 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-6">Активность за неделю</h3>
              <div className="grid grid-cols-7 gap-3">
                {weeklyData.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">{day.day}</div>
                    <div className="relative h-24 bg-blue-100/50 rounded-lg overflow-hidden">
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400 transition-all duration-300"
                        style={{ height: `${(day.time / 6) * 100}%` }}
                      ></div>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {day.time}ч
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Дневная цель */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Дневная цель</h3>
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-foreground">
                  {stats.dailyProgress} / {stats.dailyGoal} мин
                </div>
                <div className="text-sm text-muted-foreground">
                  осталось {stats.dailyGoal - stats.dailyProgress} минут
                </div>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(stats.dailyProgress / stats.dailyGoal) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Прогресс по предметам */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/50 rounded-2xl p-6 mt-6">
            <h3 className="font-semibold text-foreground mb-6">Прогресс по предметам</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {progressData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{item.subject}</span>
                    <span className="font-semibold text-foreground">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Дополнительная статистика */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/50 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Наборы</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Изучено наборов</span>
                  <span className="font-semibold text-foreground">{stats.setsStudied}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Полностью освоено</span>
                  <span className="font-semibold text-foreground">{stats.setsMastered}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">В процессе</span>
                  <span className="font-semibold text-foreground">{stats.setsStudied - stats.setsMastered}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-border/50 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Ежедневная активность</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Среднее время в день</span>
                  <span className="font-semibold text-foreground">{stats.averageDailyTime}ч</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Карточек в день</span>
                  <span className="font-semibold text-foreground">{Math.round(stats.totalCards / 7)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Лучший день</span>
                  <span className="font-semibold text-foreground">5.1ч</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}