// app/settings/page.tsx
import { Header } from '@/components/elements/Header'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Настройки</h1>
          </div>

          <div className="space-y-8">
            {/* Секция подписки */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Подписка</h2>
                  <p className="opacity-90">Выйдите на новый уровень с PZ+</p>
                </div>
                <button className="px-6 py-2.5 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all">
                  Подписаться сейчас
                </button>
              </div>
            </div>

            {/* Личная информация */}
            <div className="bg-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Личная информация</h2>
              
              {/* Фотография профиля */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  В
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Фотография профиля</h3>
                  <div className="flex space-x-3">
                    <button className="px-4 py-1.5 rounded-lg bg-muted/50 text-foreground text-sm hover:bg-muted/80 transition-all">
                      Загрузить
                    </button>
                    <button className="px-4 py-1.5 rounded-lg border border-border text-foreground text-sm hover:bg-muted/30 transition-all">
                      Удалить
                    </button>
                  </div>
                </div>
              </div>

              {/* Имя пользователя */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-foreground">Имя пользователя</label>
                  <p className="text-muted-foreground text-sm">Отображается другим пользователям</p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <span className="text-foreground">Vladimir8734</span>
                    <button className="text-primary hover:text-primary/80 transition-colors text-sm">
                      Редактировать
                    </button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Эл. почта</label>
                  <p className="text-muted-foreground text-sm">Для входа и уведомлений</p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <span className="text-foreground">vleypi@gmail.com</span>
                    <button className="text-primary hover:text-primary/80 transition-colors text-sm">
                      Редактировать
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Оформление */}
            <div className="bg-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Оформление</h2>
              
              <div className="space-y-6">
                {/* Тема */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Тема</label>
                  </div>
                  <div className="md:col-span-2">
                    <select className="w-full p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>System</option>
                    </select>
                  </div>
                </div>

                {/* Язык */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Язык</label>
                  </div>
                  <div className="md:col-span-2">
                    <select className="w-full p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all">
                      <option>Русский</option>
                      <option>English</option>
                      <option>Deutsch</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Уведомления */}
            <div className="bg-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Уведомления</h2>
              
              <div className="space-y-6">
                {/* Персонализированные новости */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Персонализированные новости по учебе</h3>
                    <p className="text-muted-foreground text-sm">Рекомендации и советы по обучению</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-muted/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Цепочки и значки */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Цепочки и значки</h3>
                    <p className="text-muted-foreground text-sm">Уведомления о достижениях</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-muted/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Учебные напоминания */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Учебные напоминания</h3>
                    <p className="text-muted-foreground text-sm">Напоминания о повторении</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-muted/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Новости от Puzzles */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Новости от Puzzles</h3>
                    <p className="text-muted-foreground text-sm">Новые функции, советы и задания</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-muted/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Распродажи и акции */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Распродажи, конкурсы и акции</h3>
                    <p className="text-muted-foreground text-sm">Специальные предложения</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-muted/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Активность на курсе */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Активность на курсе</h3>
                    <p className="text-muted-foreground text-sm">Уведомления о прогрессе</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-muted/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Учетная запись и конфиденциальность */}
            <div className="bg-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Учетная запись и конфиденциальность</h2>
              
              <div className="space-y-6">
                {/* Пароль Puzzles */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Создать пароль Puzzles</h3>
                    <p className="text-muted-foreground text-sm">Для входа по email и паролю</p>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm hover:bg-primary/90 transition-all">
                    Создать
                  </button>
                </div>

                {/* Facebook */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Подключить учетную запись Facebook</h3>
                    <p className="text-muted-foreground text-sm">Для быстрого входа</p>
                  </div>
                  <button className="px-4 py-2 rounded-xl border border-border text-foreground text-sm hover:bg-muted/30 transition-all">
                    Привязать Facebook
                  </button>
                </div>

                {/* Конфиденциальность */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Конфиденциальность</h3>
                    <p className="text-muted-foreground text-sm">Показывать ваше настоящее имя в Puzzles</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-muted/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Удаление учетной записи */}
                <div className="pt-6 border-t border-border/40">
                  <div className="mb-4">
                    <h3 className="font-medium text-foreground mb-2">Удаление учетной записи</h3>
                    <p className="text-muted-foreground text-sm">
                      Все ваши данные будут удалены, и это действие невозможно будет отменить.
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-xl border border-destructive text-destructive text-sm hover:bg-destructive/10 transition-all">
                    Удалить учетную запись
                  </button>
                </div>
              </div>
            </div>

            {/* Нижние ссылки */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Конфиденциальность
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Условия
              </Link>
              <Link href="/help" className="hover:text-foreground transition-colors">
                Помощь
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}