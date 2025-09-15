// app/auth/page.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Десктопная версия с картинкой */}
      <div className="hidden lg:flex min-h-screen">
        {/* Левая часть с картинкой */}
        {/* <div className="flex-1 relative bg-gradient-to-br from-blue-300/10 to-blue-900/10"> */}
        <div className="flex-1 relative bg-gradient-to-br from-blue-300/100 to-blue-900/5">
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full h-full max-w-2xl mx-auto">

            </div>
          </div>
          
          {/* Лого и название сверху слева */}
          <Link href="/">
            <div className="absolute top-8 left-8 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25">
                <span className="text-white font-bold text-lg">PZ</span>
              </div>
              <span className="text-xl font-bold text-foreground">Puzzles</span>
            </div>
          </Link>
          
          {/* Фраза снизу слева */}
          <div className="absolute bottom-8 left-8 max-w-md">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Учиться стало проще
            </h2>
            <p className="text-muted-foreground text-lg">
              Создавайте карточки, изучайте материалы и достигайте своих целей вместе с Puzzles
            </p>
          </div>
        </div>

        {/* Правая часть с формой */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground">Добро пожаловать</h1>
              <p className="text-muted-foreground mt-2">Войдите в свой аккаунт</p>
            </div>

            <div className="bg-card rounded-xl p-6 space-y-5">
              {/* Форма остается такой же */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Пароль</label>
                  <input
                    type="password"
                    placeholder="Ваш пароль"
                    className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-border/60 text-primary focus:ring-primary/30" />
                    <span className="text-muted-foreground">Запомнить меня</span>
                  </label>
                  <Link href="/forgot-password" className="text-primary hover:text-primary/80 transition-colors">
                    Забыли пароль?
                  </Link>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-sm hover:shadow font-medium">
                Войти
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/40"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 text-muted-foreground">Или войдите с помощью</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span className="text-sm">Google</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.78 5.42s-.47 1.47-1.92 1.47c-1.45 0-2.13-.94-3.26-.94-1.13 0-1.94.94-3.26.94-1.32 0-2.06-1.47-2.06-1.47S7.4 12.3 7.4 10.71c0-1.58.86-2.32 1.85-2.32.99 0 1.57.94 2.06.94.49 0 1.38-.94 2.5-.94.86 0 1.63.47 2.06.47.43 0 1.17-.47 2.24-.47 1.07 0 1.86.86 1.86 2.32z"/>
                  </svg>
                  <span className="text-sm">Apple</span>
                </button>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                Еще нет аккаунта?{' '}
                <Link href="/auth/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильная версия (остается как было) */}
      <div className="lg:hidden min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/25">
              <span className="text-white font-bold text-xl">PZ</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Добро пожаловать</h1>
            <p className="text-muted-foreground mt-2">Войдите в свой аккаунт</p>
          </div>

          <div className="bg-card rounded-xl p-6 space-y-5">
            {/* Та же форма что и выше */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Пароль</label>
                <input
                  type="password"
                  placeholder="Ваш пароль"
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-border/60 text-primary focus:ring-primary/30" />
                  <span className="text-muted-foreground">Запомнить меня</span>
                </label>
                <Link href="/forgot-password" className="text-primary hover:text-primary/80 transition-colors">
                  Забыли пароль?
                </Link>
              </div>
            </div>

            <button className="w-full py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-sm hover:shadow font-medium">
              Войти
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/40"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">Или войдите с помощью</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span className="text-sm">Google</span>
              </button>
              
              <button className="flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-border/60 bg-background text-foreground hover:bg-muted/30 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.78 5.42s-.47 1.47-1.92 1.47c-1.45 0-2.13-.94-3.26-.94-1.13 0-1.94.94-3.26.94-1.32 0-2.06-1.47-2.06-1.47S7.4 12.3 7.4 10.71c0-1.58.86-2.32 1.85-2.32.99 0 1.57.94 2.06.94.49 0 1.38-.94 2.5-.94.86 0 1.63.47 2.06.47.43 0 1.17-.47 2.24-.47 1.07 0 1.86.86 1.86 2.32z"/>
                </svg>
                <span className="text-sm">Apple</span>
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Еще нет аккаунта?{' '}
              <Link href="/auth/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}