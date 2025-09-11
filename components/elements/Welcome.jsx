import { Card } from '@/components/ui/Card'

export const Welcome = () => {
    const name = "Владимир"
    const cards = 3
    return (
        <section className="mb-8">
        <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Добро пожаловать, {name}! 👋</h1>
            <p className="text-muted-foreground text-lg">
                Готовы продолжить изучение? У вас есть {cards} набора для повторения.
            </p>
            </div>
        </section>
    )
}