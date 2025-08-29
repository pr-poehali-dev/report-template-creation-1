import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface ReportData {
  date: string;
  reportNumber: string;
  clientInfo: string;
  fullName: string;
  phoneNumbers: string;
  emails: string;
  documents: string;
  addresses: string;
  vehicles: string;
  socialAccounts: string;
  contactNames: string;
  vkProfileLink: string;
  vkAnalysis: string;
  socialAnalysis: string;
  telegramId: string;
  telegramAnalysis: string;
  purchaseReport: string;
  conclusion: string;
  privacyPolicy: string;
}

export default function Index() {
  const [currentView, setCurrentView] = useState<'report' | 'admin'>('report');
  const [isLoading, setIsLoading] = useState(false);
  
  const getCurrentDate = () => {
    const now = new Date();
    return `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear().toString().slice(-2)}`;
  };

  const [reportData, setReportData] = useState<ReportData>({
    date: getCurrentDate(),
    reportNumber: '№ В/П 01442-25',
    clientInfo: '',
    fullName: '',
    phoneNumbers: '',
    emails: '',
    documents: '',
    addresses: '',
    vehicles: '',
    socialAccounts: '',
    contactNames: '',
    vkProfileLink: '',
    vkAnalysis: 'Мы провели комплексный анализ закрытого профиля ВК, используя передовые поисковые системы, а также специализированные инструменты отслеживания. Целью проверки было выявление признаков активности в группах и сообществах, связанных с тематикой знакомств. По результатам исследования группы, соответствующие тематике знакомств или аналогичным темам, обнаружены не были. Анализ активности пользователя показал, что активность в переписке с другими пользователями крайне низкая. Основная деятельность сводится к просмотру ленты новостей. Признаки, указывающие на активные знакомства с противоположным полом, отсутствуют. Также не было обнаружено дополнительных аккаунтов ВК, ни активных, ни удалённых, связанных с данным пользователем. К сожалению, возможности детального анализа цифровой активности пользователя и выгрузки списка скрытых друзей были ограничены, поскольку приватные настройки конфиденциальности аккаунта не позволяют специализированным техническим средствам отслеживать подробную цифровую активность данного пользователя ВК по переписке и получать информацию о скрытых друзьях, а также иную приватную информацию, которую пользователь скрыл в настройках приватности.',
    socialAnalysis: 'В рамках комплексной проверки на верность вашей второй половины, которая проводилась по всем открытым и доступным источникам, мы провели детальный анализ с использованием специализированного программного обеспечения и технических средств. Целью было выявление возможной связи вашей второй половины с похожими аккаунтами и профилями в социальных сетях и на сайтах знакомств, включая поиск дополнительных, скрытых, удалённых профилей и аккаунтов на всех доступных платформах. По результатам углубленной поиска и анализу полученных данных, мы можем с уверенностью в 99,9% заявить, что ваша вторая половина не имеет отношения к обнаруженным найденным схожим аккаунтам ВКонтакте и профилям на сервисах и сайтах знакомств. Схожие аккаунты и профили, которые были обнаружены по некоторым схожим цифровым параметрам, при углубленном и детальном исследовании подтвердили опровергающий факт причастности к схожим аккаунтам и профилям вашей второй половины, данные схожие профили и аккаунты принадлежат другим лицам и не имеют никакой общей связи с вашей второй половиной. Также, в ходе дополнительного углубленного поиска в социальных сетях, на сервисах и сайтах знакомств и флирта не было обнаружено других профилей и аккаунтов, которые могли бы принадлежать или предположительно принадлежать вашей второй половине. Отсутствие активных, дополнительных, дублированных, скрытых или анонимных профилей и аккаунтов на сайтах и сервисах знакомств свидетельствует о том, что ваша вторая половина не ведёт знакомства в сети Интернет, что исключает возможность ведения двойной личной жизни с помощью онлайн-знакомств или флирта, а также не использует специализированные платформы и сервисы для поиска знакомств или флирта, а также не скрывает свою личность за несколькими аккаунтами.',
    telegramId: '',
    telegramAnalysis: 'Был проведен углубленный анализ аккаунта Telegram вашей второй половины, с целью выявления наличия групп и каналов, связанных с тематикой знакомств, флирта и подобных сообществ, которые могли бы свидетельствовать о попытках знакомств, флирта или каких либо скрытых тематических интересов. В ходе исследования были использованы специализированные поисковые сервисы, инструменты отслеживания и иные программные модули, позволяющие проверить актуальные и архивные данные аккаунта. Также осуществлялся поиск дополнительных аккаунтов Telegram, в ходе которого, иных аккаунтов, которые могли бы принадлежать или предположительно принадлежать вашей второй половине, обнаружены не были. По результатам цифрового анализа аккаунта вашей второй половины сообщаем, что на данном аккаунте отсутствуют какие-либо группы или каналы, связанные с тематикой знакомств, флирта и подобной тематике. Это относится как к активным, так и к удалённым группам и сообществам. Данный факт указывает на отсутствие активности пользователя в поиске знакомств, флирта и тайных встреч. К сожалению, возможность отслеживания активности пользователя в переписках Telegram оказалась недоступной. Настройки конфиденциальности аккаунта не позволяют специализированным техническим средствам отслеживать подробную активность по переписке.',
    purchaseReport: 'В рамках проведенного исследования был осуществлен углубленный поиск по всем доступным открытым источникам, платформам и информационным ресурсам, с целью выявления возможной информации о последних покупках вашей второй половины. Основной задачей являлось определение признаков, которые могли бы свидетельствовать о подозрительном или необычном поведении. В процессе поиска и анализа информации были обнаружены некоторые схожие цифровые данные, связанные с покупками в отдельных магазинах, что предполагали наличие цифровых признаков, схожих с цифровыми данными вашей второй половины. Однако, при дополнительном и более детальном изучении, подтверждение таких данных установлено не было. В результате, можно констатировать факт, что в открытых информационных ресурсах отсутствует информация о каких-либо покупках в розничных магазинах или интернет-магазинах, связанных с вашей второй половиной.',
    conclusion: 'По результатам комплексного и тщательного анализа, проведённого в рамках услуги «Полная проверка на верность», мы представляем вашему вниманию подробный отчёт и выводы. Мы провели глубокий цифровой анализ основного профиля ВКонтакте вашей второй половины, используя передовые поисковые системы и специализированные инструменты отслеживания. Целью было выявление активности, связанной с сервисами знакомств и флирта, а также наличие дополнительных аккаунтов. По результатам исследования, аккаунт не демонстрирует признаков участия в группах или сообществах, связанных с тематикой знакомств. Активность пользователя в переписке крайне низкая, основное время проводится за просмотром новостной ленты. Дополнительных и удалённых аккаунтов ВКонтакте, связанных с пользователем, обнаружено не было. Следует отметить, что из-за настроек приватности аккаунта ВКонтакте возможности для глубокого анализа переписки и выявления скрытых друзей были ограничены. Тем не менее, используемые нами методы позволили получить максимально полную картину с учётом данных ограничений. В рамках расширенного поиска по социальным сетям и специализированным платформам знакомств и флирта была проведена проверка на наличие дополнительных, скрытых, удалённых или дублированных аккаунтов. Результаты исследования показали, что никакие найденные схожие профили не имеют отношения к вашей второй половине. Таким образом, с высокой степенью уверенности – 99,9% – можно утверждать, что ваша вторая половина не использует сторонние аккаунты для онлайн-знакомств или скрытых коммуникаций. Также был проведён углублённый цифровой анализ аккаунта Telegram вашей второй половины. Используемые инструменты позволили проверить как активные, так и удалённые группы и каналы, связанные с тематикой знакомств и флирта. В ходе исследования не выявлено никаких связей, свидетельствующих о подозрительной или скрытой активности. Анализ поиска дополнительных аккаунтов Telegram также не обнаружил иных профилей, принадлежащих вашей второй половине. В дополнение к проверке социальных сетей, был проведён поиск информации о покупках вашей второй половины в розничных и интернет-магазинах через открытые источники. Несмотря на выявление некоторых цифровых совпадений, при детальном анализе подтверждающих факторов не обнаружено. В целом, данных о подозрительных или необычных покупках, связанных с вашей второй половиной, не выявлено. Итог: На основании проведённой всесторонней полной проверки на верность, мы с уверенностью можем сделать следующий итог: ваша вторая половина не проявляет активности, связанной с онлайн-знакомствами или флиртом, не имеет скрытых или дополнительных аккаунтов в социальных сетях и специальных сервисах и не использует их для ведения двойной личной жизни. Все собранные данные не дают никаких оснований для беспокойства и подтверждают верность вашего партнёра. Мы искренне рады, что результаты проверки оказались положительными. Верьте своей второй половине и дорожите вашими отношениями. Благодарим вас за ваше обращение и доверие. Желаем вам и вашей семье крепкой любви и крепких, доверительных отношений.',
    privacyPolicy: 'В целях обеспечения максимальной конфиденциальности и полной анонимности наших клиентов данный отчет передается исключительно заказчику и не сохраняется в наших системах в виде копий. После успешной отправки, отчет автоматически удаляется с сервера отправителя, что исключает его дальнейшее хранение. Мы придерживаемся строгой политики конфиденциальности и гарантируем полную анонимность наших клиентов. Вся информация, связанная с заказом, не сохраняется на наших серверах после его выполнения и не передается третьим лицам при любых обстоятельствах. Вся информация, которую мы предоставляем, получена исключительно из общедоступных источников и сервисов, не требующих согласия на обработку персональных данных. Это включает в себя данные, размещенные пользователями в открытом доступе в социальных сетях, на форумах, в блогах и других публичных платформах. Сбор и анализ данных цифровой активности осуществляется в рамках правового поля Российской Федерации. Мы не нарушаем права на неприкосновенность частной жизни, личную и семейную тайну, гарантированные Конституцией Российской Федерации (статья 23) и Федеральным законом № 152-ФЗ "О персональных данных". Всю информацию мы получаем исключительно из общедоступных источников и сервисов, не требующих согласия на обработку персональных данных, в соответствии с пунктом 1 части 1 статьи 6 и пунктом 10 части 1 статьи 6 указанного закона.'
  });

  // Загружаем данные из localStorage при инициализации
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('reportData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setReportData(prev => ({ ...prev, ...parsedData }));
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных из localStorage:', error);
    }
  }, []);

  // Сохраняем данные в localStorage при изменении
  useEffect(() => {
    try {
      localStorage.setItem('reportData', JSON.stringify(reportData));
    } catch (error) {
      console.error('Ошибка при сохранении данных в localStorage:', error);
    }
  }, [reportData]);

  const updateReportData = (field: keyof ReportData, value: string) => {
    setReportData(prev => ({ ...prev, [field]: value }));
  };

  const handleViewChange = (view: 'report' | 'admin') => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsLoading(false);
    }, 100);
  };

  const clearAllData = () => {
    if (confirm('Вы уверены, что хотите очистить все данные? Это действие нельзя отменить.')) {
      const defaultData = {
        date: getCurrentDate(),
        reportNumber: '№ В/П 01442-25',
        clientInfo: '',
        fullName: '',
        phoneNumbers: '',
        emails: '',
        documents: '',
        addresses: '',
        vehicles: '',
        socialAccounts: '',
        contactNames: '',
        vkProfileLink: '',
        vkAnalysis: reportData.vkAnalysis,
        socialAnalysis: reportData.socialAnalysis,
        telegramId: '',
        telegramAnalysis: reportData.telegramAnalysis,
        purchaseReport: reportData.purchaseReport,
        conclusion: reportData.conclusion,
        privacyPolicy: reportData.privacyPolicy
      };
      setReportData(defaultData);
      localStorage.removeItem('reportData');
    }
  };

  const handlePrintToPDF = () => {
    try {
      // Проверяем, есть ли минимальные данные для экспорта
      if (!reportData.clientInfo.trim()) {
        alert('Необходимо заполнить информацию о заказчике перед экспортом');
        return;
      }
      
      // Добавляем класс для печати
      document.body.classList.add('printing');
      
      // Ждем применения стилей
      setTimeout(() => {
        window.print();
        document.body.classList.remove('printing');
      }, 100);
    } catch (error) {
      console.error('Ошибка при печати:', error);
      alert('Произошла ошибка при экспорте документа');
    }
  };

  const ReportView = () => (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen print:p-4 print:bg-white">
      {/* Header */}
      <div className="bg-white border-2 border-gray-300 rounded-lg mb-8 print:border-black">
        <div className="bg-gray-100 px-6 py-4 rounded-t-lg border-b border-gray-300 flex justify-between items-center print:bg-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">ОТЧЁТ ПО ПОЛНОЙ ПРОВЕРКЕ НА ВЕРНОСТЬ</h1>
            <div className="mt-2 space-y-1">
              <p className="text-sm font-semibold">Дата проверки: {reportData.date}</p>
              <p className="text-sm font-semibold">{reportData.reportNumber}</p>
            </div>
          </div>
          <Button 
            onClick={() => handleViewChange('admin')} 
            variant="outline"
            disabled={isLoading}
            className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600 print:hidden disabled:opacity-50"
          >
            {isLoading ? 'Загрузка...' : 'Верность.Про'}
          </Button>
        </div>
        
        {/* Export Button */}
        <div className="px-6 py-4 print:hidden">
          <Button 
            onClick={handlePrintToPDF}
            className="bg-red-600 hover:bg-red-700 text-white border-2 border-black"
          >
            <Icon name="Lock" className="mr-2" size={16} />
            Конфиденциально!
          </Button>
        </div>
      </div>

      {/* Client Info */}
      <Card className="report-section">
        <CardHeader className="report-header">
          <CardTitle>Информация о заказчике</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="whitespace-pre-wrap">{reportData.clientInfo || 'Информация о заказчике не заполнена'}</p>
        </CardContent>
      </Card>

      {/* General Information */}
      <Card className="report-section">
        <CardHeader className="report-header">
          <CardTitle>Общая информация о второй половине</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div>
            <Label className="font-semibold text-gray-700">ФИО и дата рождения:</Label>
            <p className="mt-1 whitespace-pre-wrap">{reportData.fullName || 'Не указано'}</p>
          </div>
          
          <Separator />
          
          <div>
            <Label className="font-semibold text-gray-700">Найденные номера телефонов:</Label>
            <p className="mt-1 whitespace-pre-wrap">{reportData.phoneNumbers || 'Не найдены'}</p>
          </div>
          
          <Separator />
          
          <div>
            <Label className="font-semibold text-gray-700">Найденные E-mail адреса:</Label>
            <p className="mt-1 whitespace-pre-wrap">{reportData.emails || 'Не найдены'}</p>
          </div>
          
          <Separator />
          
          <div>
            <Label className="font-semibold text-gray-700">Найденные документы:</Label>
            <p className="mt-1 whitespace-pre-wrap">{reportData.documents || 'Не найдены'}</p>
          </div>
          
          <Separator />
          
          <div>
            <Label className="font-semibold text-gray-700">Найденные адреса:</Label>
            <p className="mt-1 whitespace-pre-wrap">{reportData.addresses || 'Не найдены'}</p>
          </div>
          
          <Separator />
          
          <div>
            <Label className="font-semibold text-gray-700">Найденные автомобили:</Label>
            <p className="mt-1 whitespace-pre-wrap">{reportData.vehicles || 'Не найдены'}</p>
          </div>
          
          <Separator />
          
          <div>
            <Label className="font-semibold text-gray-700">Найденные аккаунты соцсетей и мессенджеров:</Label>
            <p className="mt-1 whitespace-pre-wrap">{reportData.socialAccounts || 'Не найдены'}</p>
          </div>
          
          <Separator />
          
          <div>
            <Label className="font-semibold text-gray-700">Как записана ваша вторая половина у других людей в телефоне:</Label>
            <p className="mt-1 whitespace-pre-wrap">{reportData.contactNames || 'Информация не найдена'}</p>
          </div>
        </CardContent>
      </Card>

      {/* VK Analysis */}
      <Card className="report-section">
        <CardHeader className="report-header">
          <CardTitle>
            Полный цифровой анализ основного профиля ВК проверяемого
            {reportData.vkProfileLink && ` (${reportData.vkProfileLink})`}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="whitespace-pre-wrap leading-relaxed">{reportData.vkAnalysis}</p>
        </CardContent>
      </Card>

      {/* Social Networks Analysis */}
      <Card className="report-section">
        <CardHeader className="report-header">
          <CardTitle>Детальный информационный отчет о всех найденных дополнительных аккаунтах социальных сетях, а так же найденных профилях и аккаунтов на доступных сервисах и сайтах знакомств и флирта</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="whitespace-pre-wrap leading-relaxed">{reportData.socialAnalysis}</p>
        </CardContent>
      </Card>

      {/* Telegram Analysis */}
      <Card className="report-section">
        <CardHeader className="report-header">
          <CardTitle>
            Детальный цифровой анализ аккаунта Телеграм
            {reportData.telegramId && ` (${reportData.telegramId})`}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="whitespace-pre-wrap leading-relaxed">{reportData.telegramAnalysis}</p>
        </CardContent>
      </Card>

      {/* Purchase Report */}
      <Card className="report-section">
        <CardHeader className="report-header">
          <CardTitle>Подробный отчет о совершенных покупках в розничных магазинах и интернет-ресурсах</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="whitespace-pre-wrap leading-relaxed">{reportData.purchaseReport}</p>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="report-section">
        <CardHeader className="report-header">
          <CardTitle>Заключение по результатам полной проверки на верность</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="whitespace-pre-wrap leading-relaxed">{reportData.conclusion}</p>
        </CardContent>
      </Card>

      {/* Confidential Notice */}
      <div className="confidential-notice mb-6">
        <p className="leading-relaxed">
          <strong>Благодарим Вас за обращение и доверие к нашим услугам.</strong> В целях обеспечения анонимности и защиты конфиденциальных данных все отчёты отправляются исключительно заказчику и после отправки автоматически удаляются с наших серверов, исключая возможность повторной отправки.
        </p>
      </div>

      {/* Privacy Policy */}
      <Card className="report-section">
        <CardHeader className="report-header">
          <CardTitle>Политика конфиденциальности и обеспечения анонимности клиентов</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="whitespace-pre-wrap leading-relaxed">{reportData.privacyPolicy}</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="footer-dark py-6 px-8 rounded-lg mt-8 text-center">
        <p>© All Rights Reserved. Proverka.Vernosti 2025.</p>
      </div>
    </div>
  );

  const AdminView = () => (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="bg-white border-2 border-gray-300 rounded-lg mb-8">
        <div className="bg-gray-100 px-6 py-4 rounded-t-lg border-b border-gray-300 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">ПАНЕЛЬ УПРАВЛЕНИЯ ОТЧЁТАМИ</h1>
          <div className="flex space-x-3">
            <Button 
              onClick={clearAllData}
              variant="outline"
              className="bg-red-600 text-white hover:bg-red-700 border-red-600"
            >
              <Icon name="Trash2" className="mr-2" size={16} />
              Очистить всё
            </Button>
            <Button 
              onClick={() => handleViewChange('report')} 
              variant="outline"
              disabled={isLoading}
              className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600 disabled:opacity-50"
            >
              <Icon name="ArrowLeft" className="mr-2" size={16} />
              {isLoading ? 'Загрузка...' : 'К отчёту'}
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Header Information */}
        <Card className="report-section">
          <CardHeader className="report-header">
            <CardTitle>Информация в шапке отчёта</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div>
              <Label htmlFor="date" className="font-semibold">Дата проверки</Label>
              <p className="text-sm text-gray-600 mb-2">Формат: дд.мм.гг (автоматически заполняется текущей датой)</p>
              <Input
                id="date"
                value={reportData.date}
                onChange={(e) => updateReportData('date', e.target.value)}
                className="field-input"
              />
            </div>
            
            <div>
              <Label htmlFor="reportNumber" className="font-semibold">Номер проверки</Label>
              <p className="text-sm text-gray-600 mb-2">Пример: № В/П 01442-25 (уникальный номер для каждой проверки)</p>
              <Input
                id="reportNumber"
                value={reportData.reportNumber}
                onChange={(e) => updateReportData('reportNumber', e.target.value)}
                className="field-input"
              />
            </div>
            
            <div>
              <Label htmlFor="clientInfo" className="font-semibold">Информация о заказчике</Label>
              <p className="text-sm text-gray-600 mb-2">Укажите контактные данные заказчика: номер телефона, ID VK или username Telegram</p>
              <Textarea
                id="clientInfo"
                value={reportData.clientInfo}
                onChange={(e) => updateReportData('clientInfo', e.target.value)}
                className="field-input"
                rows={3}
                placeholder="Номер телефона, VK ID или Telegram username..."
              />
            </div>
          </CardContent>
        </Card>

        {/* General Information Fields */}
        <Card className="report-section">
          <CardHeader className="report-header">
            <CardTitle>Общая информация о второй половине</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-6">
            <div>
              <Label htmlFor="fullName" className="font-semibold">ФИО и дата рождения</Label>
              <p className="text-sm text-gray-600 mb-2">Укажите полное имя и дату рождения проверяемого лица</p>
              <Textarea
                id="fullName"
                value={reportData.fullName}
                onChange={(e) => updateReportData('fullName', e.target.value)}
                className="field-input"
                rows={2}
                placeholder="Иванов Иван Иванович, 15.06.1985"
              />
            </div>
            
            <div>
              <Label htmlFor="phoneNumbers" className="font-semibold">Найденные номера телефонов</Label>
              <p className="text-sm text-gray-600 mb-2">Перечислите все найденные номера телефонов через запятую</p>
              <Textarea
                id="phoneNumbers"
                value={reportData.phoneNumbers}
                onChange={(e) => updateReportData('phoneNumbers', e.target.value)}
                className="field-input"
                rows={2}
                placeholder="+7(xxx)xxx-xx-xx, +7(xxx)xxx-xx-xx"
              />
            </div>
            
            <div>
              <Label htmlFor="emails" className="font-semibold">Найденные E-mail адреса</Label>
              <p className="text-sm text-gray-600 mb-2">Укажите все обнаруженные электронные адреса</p>
              <Textarea
                id="emails"
                value={reportData.emails}
                onChange={(e) => updateReportData('emails', e.target.value)}
                className="field-input"
                rows={2}
                placeholder="example@mail.ru, user@gmail.com"
              />
            </div>
            
            <div>
              <Label htmlFor="documents" className="font-semibold">Найденные документы</Label>
              <p className="text-sm text-gray-600 mb-2">Перечислите найденные документы и их номера</p>
              <Textarea
                id="documents"
                value={reportData.documents}
                onChange={(e) => updateReportData('documents', e.target.value)}
                className="field-input"
                rows={3}
                placeholder="Паспорт серия XXXX номер XXXXXX, ИНН XXXXXXXXXXXX"
              />
            </div>
            
            <div>
              <Label htmlFor="addresses" className="font-semibold">Найденные адреса</Label>
              <p className="text-sm text-gray-600 mb-2">Укажите все обнаруженные адреса регистрации и проживания</p>
              <Textarea
                id="addresses"
                value={reportData.addresses}
                onChange={(e) => updateReportData('addresses', e.target.value)}
                className="field-input"
                rows={3}
                placeholder="г. Москва, ул. Примерная, д.1, кв.1"
              />
            </div>
            
            <div>
              <Label htmlFor="vehicles" className="font-semibold">Найденные автомобили</Label>
              <p className="text-sm text-gray-600 mb-2">Укажите государственные номера найденных транспортных средств</p>
              <Textarea
                id="vehicles"
                value={reportData.vehicles}
                onChange={(e) => updateReportData('vehicles', e.target.value)}
                className="field-input"
                rows={2}
                placeholder="А123БВ777, М456ГД123"
              />
            </div>
            
            <div>
              <Label htmlFor="socialAccounts" className="font-semibold">Найденные аккаунты соцсетей и мессенджеров</Label>
              <p className="text-sm text-gray-600 mb-2">Перечислите ссылки на все найденные профили в соцсетях</p>
              <Textarea
                id="socialAccounts"
                value={reportData.socialAccounts}
                onChange={(e) => updateReportData('socialAccounts', e.target.value)}
                className="field-input"
                rows={3}
                placeholder="vk.com/id123456789, t.me/username, instagram.com/username"
              />
            </div>
            
            <div>
              <Label htmlFor="contactNames" className="font-semibold">Как записана вторая половина у других в телефоне</Label>
              <p className="text-sm text-gray-600 mb-2">Укажите найденную информацию о том, под какими именами сохранен контакт</p>
              <Textarea
                id="contactNames"
                value={reportData.contactNames}
                onChange={(e) => updateReportData('contactNames', e.target.value)}
                className="field-input"
                rows={2}
                placeholder="Иван Работа, Ваня, Иван Иванович"
              />
            </div>
          </CardContent>
        </Card>

        {/* VK Analysis */}
        <Card className="report-section">
          <CardHeader className="report-header">
            <CardTitle>Анализ профиля ВКонтакте</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div>
              <Label htmlFor="vkProfileLink" className="font-semibold">Ссылка на аккаунт ВК</Label>
              <p className="text-sm text-gray-600 mb-2">Укажите ссылку на проверяемый профиль ВКонтакте</p>
              <Input
                id="vkProfileLink"
                value={reportData.vkProfileLink}
                onChange={(e) => updateReportData('vkProfileLink', e.target.value)}
                className="field-input"
                placeholder="vk.com/id123456789"
              />
            </div>
            
            <div>
              <Label htmlFor="vkAnalysis" className="font-semibold">Результаты анализа ВК</Label>
              <p className="text-sm text-gray-600 mb-2">
                Включите: ссылку на Social Graph Bot, историю изменений, цифровую активность, скрытых друзей.
                Используйте шаблонный текст и дополните его найденной информацией.
              </p>
              <Textarea
                id="vkAnalysis"
                value={reportData.vkAnalysis}
                onChange={(e) => updateReportData('vkAnalysis', e.target.value)}
                className="field-input"
                rows={8}
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Networks Analysis */}
        <Card className="report-section">
          <CardHeader className="report-header">
            <CardTitle>Анализ социальных сетей</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div>
              <Label htmlFor="socialAnalysis" className="font-semibold">Детальный анализ аккаунтов в соцсетях</Label>
              <p className="text-sm text-gray-600 mb-2">
                Укажите результаты поиска дополнительных аккаунтов и профилей на сайтах знакомств
              </p>
              <Textarea
                id="socialAnalysis"
                value={reportData.socialAnalysis}
                onChange={(e) => updateReportData('socialAnalysis', e.target.value)}
                className="field-input"
                rows={8}
              />
            </div>
          </CardContent>
        </Card>

        {/* Telegram Analysis */}
        <Card className="report-section">
          <CardHeader className="report-header">
            <CardTitle>Анализ аккаунта Telegram</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div>
              <Label htmlFor="telegramId" className="font-semibold">ID или username Telegram</Label>
              <p className="text-sm text-gray-600 mb-2">Укажите найденный Telegram ID или username</p>
              <Input
                id="telegramId"
                value={reportData.telegramId}
                onChange={(e) => updateReportData('telegramId', e.target.value)}
                className="field-input"
                placeholder="@username или ID"
              />
            </div>
            
            <div>
              <Label htmlFor="telegramAnalysis" className="font-semibold">Результаты анализа Telegram</Label>
              <p className="text-sm text-gray-600 mb-2">
                Добавьте найденную информацию об аккаунте перед шаблонным текстом. 
                Укажите группы, каналы, активность пользователя.
              </p>
              <Textarea
                id="telegramAnalysis"
                value={reportData.telegramAnalysis}
                onChange={(e) => updateReportData('telegramAnalysis', e.target.value)}
                className="field-input"
                rows={8}
              />
            </div>
          </CardContent>
        </Card>

        {/* Purchase Report */}
        <Card className="report-section">
          <CardHeader className="report-header">
            <CardTitle>Анализ покупок</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div>
              <Label htmlFor="purchaseReport" className="font-semibold">Отчет о покупках</Label>
              <p className="text-sm text-gray-600 mb-2">
                Результаты поиска информации о покупках в розничных и интернет-магазинах
              </p>
              <Textarea
                id="purchaseReport"
                value={reportData.purchaseReport}
                onChange={(e) => updateReportData('purchaseReport', e.target.value)}
                className="field-input"
                rows={6}
              />
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="report-section">
          <CardHeader className="report-header">
            <CardTitle>Заключение по результатам проверки</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div>
              <Label htmlFor="conclusion" className="font-semibold">Итоговое заключение</Label>
              <p className="text-sm text-gray-600 mb-2">
                При необходимости откорректируйте заключение в соответствии с результатами проверки.
              </p>
              <Textarea
                id="conclusion"
                value={reportData.conclusion}
                onChange={(e) => updateReportData('conclusion', e.target.value)}
                className="field-input"
                rows={12}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy */}
        <Card className="report-section">
          <CardHeader className="report-header">
            <CardTitle>Политика конфиденциальности</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div>
              <Label htmlFor="privacyPolicy" className="font-semibold">Политика конфиденциальности</Label>
              <p className="text-sm text-gray-600 mb-2">
                Редактирование текста политики конфиденциальности и анонимности клиентов
              </p>
              <Textarea
                id="privacyPolicy"
                value={reportData.privacyPolicy}
                onChange={(e) => updateReportData('privacyPolicy', e.target.value)}
                className="field-input"
                rows={8}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return currentView === 'report' ? <ReportView /> : <AdminView />;
}