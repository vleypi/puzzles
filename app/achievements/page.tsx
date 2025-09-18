// app/achievements/page.tsx
import { Header } from '@/components/elements/Header'
import Link from 'next/link'

export default function AchievementsPage() {
  const achievements = {
    unlocked: [
      {
        id: 1,
        title: 'Первые шаги',
        description: 'Изучите первую карточку',
        icon: '🎯',
        progress: 100,
        unlockedDate: '2 дня назад',
        rarity: 'common'
      },
      {
        id: 2,
        title: 'Серия новичка',
        description: 'Изучайте карточки 3 дня подряд',
        icon: '🔥',
        progress: 100,
        unlockedDate: '1 день назад',
        rarity: 'rare'
      },
      {
        id: 3,
        title: 'Мастер точности',
        description: 'Достигните 90% точности в тесте',
        icon: '🎯',
        progress: 100,
        unlockedDate: 'Сегодня',
        rarity: 'epic'
      }
    ],
    locked: [
      {
        id: 4,
        title: 'Неделя силы воли',
        description: 'Изучайте карточки 7 дней подряд',
        icon: '💪',
        progress: 85,
        rarity: 'rare'
      },
      {
        id: 5,
        title: 'Энциклопедист',
        description: 'Изучите 500 карточек',
        icon: '📖',
        progress: 45,
        rarity: 'epic'
      }
    ]
  }

  const stats = {
    totalAchievements: 24,
    unlockedAchievements: 3,
    completion: 13
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-100 to-gray-200 border-gray-300'
      case 'rare': return 'from-blue-100 to-blue-200 border-blue-300'
      case 'epic': return 'from-purple-100 to-purple-200 border-purple-300'
      case 'legendary': return 'from-yellow-100 to-yellow-200 border-yellow-300'
      default: return 'from-gray-100 to-gray-200 border-gray-300'
    }
  }

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
            <h1 className="text-3xl font-bold text-foreground">Достижения</h1>
            <p className="text-muted-foreground mt-2">Отслеживайте ваш прогресс и получайте награды</p>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-200/50 rounded-2xl p-5 text-center">
              <div className="text-2xl font-bold text-foreground mb-2">{stats.unlockedAchievements}</div>
              <div className="text-muted-foreground text-sm">Получено</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-200/50 rounded-2xl p-5 text-center">
              <div className="text-2xl font-bold text-foreground mb-2">{stats.totalAchievements}</div>
              <div className="text-muted-foreground text-sm">Всего</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-200/50 rounded-2xl p-5 text-center">
              <div className="text-2xl font-bold text-foreground mb-2">{stats.completion}%</div>
              <div className="text-muted-foreground text-sm">Прогресс</div>
            </div>
          </div>

          {/* Полученные достижения */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Полученные достижения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.unlocked.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`bg-gradient-to-br ${getRarityColor(achievement.rarity)} border rounded-2xl p-5 transition-all hover:scale-105`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{achievement.description}</p>
                      <div className="text-xs text-muted-foreground">
                        Получено: {achievement.unlockedDate}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Неполученные достижения */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">Предстоящие достижения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.locked.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-gradient-to-br from-slate-100 to-slate-200/50 border border-slate-300 rounded-2xl p-5 opacity-80 transition-all hover:opacity-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl opacity-50">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                      
                      {achievement.progress > 0 && (
                        <div className="space-y-2">
                          <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500 ease-out"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-muted-foreground text-right">
                            {achievement.progress}% завершено
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}