import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [demoQuery, setDemoQuery] = useState('');
  const [showClusters, setShowClusters] = useState(false);

  const demoClusters = [
    {
      name: 'Коммерческие запросы',
      queries: ['купить смартфон', 'смартфон цена', 'смартфон интернет-магазин', 'заказать смартфон'],
      color: 'bg-[#8B5CF6]',
      size: 450
    },
    {
      name: 'Информационные запросы',
      queries: ['как выбрать смартфон', 'рейтинг смартфонов', 'обзор смартфонов', 'характеристики смартфонов'],
      color: 'bg-[#D946EF]',
      size: 320
    },
    {
      name: 'Брендовые запросы',
      queries: ['iphone купить', 'samsung galaxy', 'xiaomi redmi', 'google pixel'],
      color: 'bg-[#0EA5E9]',
      size: 280
    }
  ];

  const features = [
    {
      icon: 'Network',
      title: 'Умная кластеризация',
      description: 'AI автоматически группирует запросы по смыслу и намерениям пользователей'
    },
    {
      icon: 'TrendingUp',
      title: 'Анализ трендов',
      description: 'Выявляйте растущие темы и сезонные всплески интереса в вашей нише'
    },
    {
      icon: 'Target',
      title: 'Сегментация аудитории',
      description: 'Определяйте разные типы запросов: коммерческие, информационные, навигационные'
    },
    {
      icon: 'Zap',
      title: 'Быстрая обработка',
      description: 'Анализируйте тысячи запросов за секунды с помощью нейросетей'
    }
  ];

  const cases = [
    {
      company: 'E-commerce магазин',
      result: '+340% органического трафика',
      description: 'Оптимизация структуры сайта на основе кластеров запросов',
      metric: '15К → 66К визитов/мес'
    },
    {
      company: 'SaaS стартап',
      result: '-60% стоимость лида',
      description: 'Таргетинг на высокоинтентные кластеры запросов',
      metric: '$85 → $34 за лид'
    },
    {
      company: 'Онлайн-школа',
      result: '+220% конверсия',
      description: 'Создание контента под информационные кластеры',
      metric: '2.1% → 6.7% CR'
    }
  ];

  const faqItems = [
    {
      question: 'Как работает AI-кластеризация?',
      answer: 'Наша нейросеть анализирует семантику запросов, выявляет схожие по смыслу фразы и группирует их в кластеры. Алгоритм учитывает намерения пользователей, синонимы и контекст поиска.'
    },
    {
      question: 'Какие данные нужны для анализа?',
      answer: 'Достаточно загрузить список ключевых слов или подключить Google Search Console. Сервис автоматически обогатит данные метриками частотности и конкуренции.'
    },
    {
      question: 'Сколько времени занимает анализ?',
      answer: 'Обработка до 10 000 запросов занимает 2-3 минуты. Результаты кластеризации доступны сразу после завершения анализа.'
    },
    {
      question: 'Можно ли экспортировать результаты?',
      answer: 'Да, вы можете выгрузить кластеры в Excel, CSV или Google Sheets. Также доступен экспорт визуализаций в PNG и PDF.'
    },
    {
      question: 'Поддерживаются ли другие языки?',
      answer: 'Сервис работает с русским, английским, испанским, немецким и еще 15 языками. AI адаптируется под специфику каждого языка.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Кластер
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Возможности
              </a>
              <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Кейсы
              </a>
              <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Блог
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhCNUNGNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Работает на AI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Анализ поискового спроса
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
                с помощью AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Кластеризация и группировка поисковых запросов за секунды. 
              Находите скрытые возможности и оптимизируйте контент-стратегию с нейросетями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                Начать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur border-border/50 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Wand2" className="text-primary" />
                Попробуйте прямо сейчас
              </CardTitle>
              <CardDescription>Введите тему для анализа поисковых запросов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-6">
                <Input
                  placeholder="Например: смартфоны"
                  value={demoQuery}
                  onChange={(e) => setDemoQuery(e.target.value)}
                  className="text-lg"
                />
                <Button 
                  onClick={() => setShowClusters(true)}
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Кластеризовать
                </Button>
              </div>

              {showClusters && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Check" size={16} className="text-green-400" />
                    Найдено 3 кластера из 1050 запросов
                  </div>
                  
                  {demoClusters.map((cluster, idx) => (
                    <Card key={idx} className="border-border/50 hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${cluster.color}`} />
                            <CardTitle className="text-lg">{cluster.name}</CardTitle>
                          </div>
                          <Badge variant="secondary">{cluster.size} запросов</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {cluster.queries.map((query, qIdx) => (
                            <Badge key={qIdx} variant="outline" className="text-xs">
                              {query}
                            </Badge>
                          ))}
                          <Badge variant="outline" className="text-xs text-muted-foreground">
                            +{cluster.size - cluster.queries.length} еще
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Всё для анализа поискового спроса
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощные инструменты на базе AI для глубокого понимания вашей аудитории
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Кейсы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Реальные результаты клиентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Как AI-кластеризация помогла бизнесам кратно увеличить трафик и продажи
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="border-border/50 hover:border-secondary/50 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full" />
                <CardHeader>
                  <CardDescription className="text-xs uppercase tracking-wider">
                    {caseItem.company}
                  </CardDescription>
                  <CardTitle className="text-3xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    {caseItem.result}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="TrendingUp" size={16} className="text-green-400" />
                    <span className="font-semibold">{caseItem.metric}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Блог
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Полезные материалы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Экспертные статьи о поисковой оптимизации и работе с данными
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Как AI меняет SEO в 2024',
                excerpt: 'Разбираем новые возможности нейросетей для оптимизации контента',
                date: '15 ноября 2024',
                category: 'AI & SEO'
              },
              {
                title: 'Гайд по кластеризации запросов',
                excerpt: 'Пошаговая инструкция: от сбора семантики до структуры сайта',
                date: '12 ноября 2024',
                category: 'Руководства'
              },
              {
                title: 'Топ-10 ошибок в семантике',
                excerpt: 'Разбор типичных проблем и способы их решения',
                date: '8 ноября 2024',
                category: 'Кейсы'
              }
            ].map((post, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="BookOpen" size={48} className="text-primary/40 group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit text-xs mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                FAQ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Частые вопросы
              </h2>
              <p className="text-xl text-muted-foreground">
                Всё, что нужно знать о работе с сервисом
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0Q5NDZFNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы попробовать AI-кластеризацию?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Начните анализ поискового спроса бесплатно. Без карты, без обязательств
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 hover:bg-white/10">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={16} />
                </div>
                <span className="font-bold">AI Кластер</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Анализ поискового спроса с помощью искусственного интеллекта
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Вакансии</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 AI Кластер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
